import { useEffect, useState } from 'react';

import { useMutation, useQuery } from 'react-query';
import { Container, FormModalButtonContainer, FormModalContainer } from './styles';

import Button from '../Button';
import FormInput from '../FormInput';
import Menu from '../Menu';
import Modal from '../Modal';
import Pagination from '../Pagination';
import SearchBar from '../SearchBar';
import Table from '../Table';

import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import SearchIcon from '@mui/icons-material/Search';

import useConfirmationDialog from '@/hooks/useConfirmationDialog';
import { useToast } from '@/hooks/useToast';
import { useForm } from 'react-hook-form';

import * as instituteApi from '@/api/institute';
import * as researcherApi from '@/api/researcher';
import Select from '../Select';

const ResearchersPage = () => {
  const [searchData, setSearchData] = useState({ name: '', acronym: '' });
  const [isCreateFormModalOpen, setIsCreateFormModalOpen] = useState(false);
  const [isEditFormModalOpen, setIsEditFormModalOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);

  const [idToEdit, setIdToEdit] = useState();

  const { successToast, errorToast } = useToast();

  const { openConfirmationDialog } = useConfirmationDialog();

  const { data, isFetching, refetch } = useQuery('getResearchers', () =>
    researcherApi.advancedSearch(searchData.name, searchData.acronym, selectedPage, 15),
  );

  useEffect(() => {
    refetch();
  }, [isCreateFormModalOpen, selectedPage, refetch]);

  const handleSearch = () => {
    refetch();
  };

  const handleDeleteResearcher = useMutation(async (id) => {
    await researcherApi.deleteResearcher(id);
    successToast('Deletado com sucesso');
    refetch();
  });

  const tableColumns = [
    { heading: 'Nome', value: 'name' },
    { heading: 'Instituto', value: 'institute.acronym' },
  ];

  const expandedData = [{ title: 'Resumo', content: 'resume' }];

  const handleDeleteConfirmationDialog = (id) => {
    openConfirmationDialog(
      'Confirmar',
      'Tem certeza de que quer deletar o Pesquisador?',
      () => handleDeleteResearcher.mutate(id),
      () => {
        errorToast('Cancelado');
      },
    );
  };

  const tableRowOptions = [
    {
      icon: <DeleteIcon fontSize="small" />,
      fn: (id) => handleDeleteConfirmationDialog(id),
    },
    {
      icon: <EditIcon fontSize="small" />,
      fn: async (id) => {
        setIdToEdit(id);
        setIsEditFormModalOpen(true);
      },
    },
  ];

  const searchParams = [
    {
      queryField: 'name',
      placeholder: 'Nome',
      type: 'input',
    },
    {
      queryField: 'acronym',
      placeholder: 'Instituto',
      type: 'input',
    },
  ];

  const menuData = [
    {
      option: 'Adicionar',
      icon: <AddIcon fontSize="small" />,
      fn: () => {
        setIdToEdit();
        setIsCreateFormModalOpen(true);
      },
      active: isCreateFormModalOpen ? true : false,
    },
  ];

  return (
    <>
      <Container>
        <SearchBar params={searchParams} data={[]} setData={setSearchData} onClick={handleSearch} />
        {data && (
          <Table
            columns={tableColumns}
            data={data.content}
            isFetching={isFetching}
            rowOptions={tableRowOptions}
            expandedData={expandedData}
            expandable={true}
          />
        )}

        {data && (
          <Pagination
            pages={data.totalPages}
            selected={selectedPage}
            setSelected={setSelectedPage}
            refetch={refetch}
          />
        )}
        <Menu data={menuData} justify={'flex-end'} />
      </Container>
      {isCreateFormModalOpen && (
        <ResearcherCacheForm open={isCreateFormModalOpen} setOpen={setIsCreateFormModalOpen} />
      )}
      {isEditFormModalOpen && (
        <ResearcherForm
          open={isEditFormModalOpen}
          setOpen={setIsEditFormModalOpen}
          refetch={refetch}
          defaultValue={idToEdit}
          id={idToEdit}
        />
      )}
    </>
  );
};

const ResearcherCacheForm = ({ open, setOpen }) => {
  const { successToast, errorToast } = useToast();
  const { openConfirmationDialog } = useConfirmationDialog();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchInstitutes = async () => {
      const data = await instituteApi.getInstitutes();
      setOptions(
        data.map((option) => ({
          value: option.id,
          label: option.acronym,
        })),
      );
    };
    fetchInstitutes();
  }, []);

  const onSubmit = async (data) => {
    researcherApi
      .searchResearcher(data.researcheridNumber)
      .then((response) => {
        setValue('name', response.name);
        setValue('researcheridNumber', response.researcherIdNumber);
        setResearcherCacheData(response);
        setIsValid(true);
      })
      .catch(() => {
        setIsValid(false);
        setSelectedOption(null);
        setResearcherCacheData(null);
      });
  };

  const handleSaveResearcher = async () => {
    await researcherApi.addResearcher(researcherCacheData.researcherIdNumber, selectedOption.value);
    successToast('Salvo com sucesso');
    setOpen(false);
  };

  const onSave = () => {
    openConfirmationDialog(
      'Confirmar',
      'Deseja salvar o Pesquisador ?',
      handleSaveResearcher,
      () => {
        errorToast('Operação Cancelada');
      },
    );
  };

  const [selectedOption, setSelectedOption] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [researcherCacheData, setResearcherCacheData] = useState();

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <Modal title={'Novo Instituto'} open={open} setOpen={setOpen}>
      <FormModalContainer onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          register={{ ...register('researcheridNumber', { required: true }) }}
          field={'Researcher ID'}
          required={errors.researcheridNumber}
        />

        {isValid && (
          <>
            <FormInput
              register={{ ...register('name', { required: false }) }}
              field={'Nome'}
              required={errors.name}
            />

            <Select
              id="institute-select"
              label="Instituto"
              options={options}
              value={selectedOption}
              onChange={handleChange}
              placeholder="Selecione uma opção"
              allowClear
              allowSearch
              allowSort
            />
          </>
        )}

        <FormModalButtonContainer>
          <Button icon={<SearchIcon fontSize="small" />} round={false}>
            Pesquisar
          </Button>
          {isValid && (
            <Button
              onClick={onSave}
              icon={<SaveIcon fontSize="small" />}
              round={false}
              disabled={selectedOption ? false : true}
            >
              Salvar
            </Button>
          )}
        </FormModalButtonContainer>
      </FormModalContainer>
    </Modal>
  );
};

const ResearcherForm = ({ open, setOpen, id }) => {
  const { successToast } = useToast();

  const handleSaveResearcher = async (name, acronym) => {
    await researcherApi.addResearcher(name, acronym);
    successToast('Salvo com sucesso');
  };

  const handleUpdateResearcher = async (id, name, acronym) => {
    await researcherApi.updateResearcher(id, name, acronym).then(() => {
      successToast('Atualizado com sucesso');
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (id) {
      const fetchResearcher = async () => {
        const data = await researcherApi.getResearcher(id);
        setValue('researcheridNumber', data.researcheridNumber);
        setValue('name', data.name);
        setValue('email', data.email);
        setValue('institute', data.institute.acronym);
        setValue('resume', data.resume);
      };

      fetchResearcher();
    }
  }, [id, setValue]);

  const onSubmit = async (data) => {
    if (id) {
      handleUpdateResearcher(id, data.name, data.acronym).then(() => {
        setOpen(false);
      });
    } else {
      handleSaveResearcher(data.name, data.acronym).then(() => {
        setOpen(false);
      });
    }
  };

  return (
    <Modal title={id ? 'Editar Instituto' : 'Novo Instituto'} open={open} setOpen={setOpen}>
      <FormModalContainer onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          register={{ ...register('researcheridNumber', { required: true }) }}
          field={'Researcher ID'}
          required={errors.researcheridNumber}
          readOnly={true}
        />

        <FormInput
          register={{ ...register('name', { required: true }) }}
          field={'Nome'}
          required={errors.acronym}
        />

        <FormInput
          register={{ ...register('email', { required: true }) }}
          field={'Email'}
          required={errors.email}
        />

        <FormInput
          register={{ ...register('institute', { required: true }) }}
          field={'institute'}
          required={errors.institute}
        />

        <FormInput
          register={{ ...register('resume', { required: true }) }}
          field={'Resumo'}
          required={errors.resume}
        />

        <FormModalButtonContainer>
          <Button icon={<SaveIcon fontSize="small" />} round={false}>
            Salvar
          </Button>
        </FormModalButtonContainer>
      </FormModalContainer>
    </Modal>
  );
};

export default ResearchersPage;
