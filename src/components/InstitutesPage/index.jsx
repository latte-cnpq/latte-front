import React, { useEffect, useState } from 'react';
import { Container, FormModalButtonContainer, FormModalContainer } from './styles';

import Modal from '../Modal';
import Table from '../Table';
import SearchBar from '../SearchBar';
import Button from '../Button';
import FormInput from '../FormInput';
import Menu from '../Menu';
import Pagination from '../Pagination';

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { useToast } from '@/hooks/useToast';
import useConfirmationDialog from '@/hooks/useConfirmationDialog';

import {
  addInstitute,
  advancedSearch,
  deleteInstitute,
  getInstitute,
  updateInstitute,
} from '@/api/institute';

const InstitutesPage = () => {
  const [searchData, setSearchData] = useState({ name: '', acronym: '' });
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);

  const [idToEdit, setIdToEdit] = useState();

  const { successToast, errorToast } = useToast();
  const { openConfirmationDialog } = useConfirmationDialog();

  const { data, isFetching, refetch } = useQuery('getInstitutes', () =>
    advancedSearch(searchData.name, searchData.acronym, selectedPage, 15),
  );

  useEffect(() => {
    refetch();
  }, [formModalOpen, selectedPage, refetch]);

  const handleSearch = () => {
    refetch();
  };

  const handleDeleteInstitute = useMutation(async (id) => {
    await deleteInstitute(id);
    successToast('Deletado com sucesso');
    refetch();
  });

  const tableColumns = [
    { heading: 'Nome', value: 'name' },
    { heading: 'Acrônimo', value: 'acronym' },
  ];

  const handleDeleteConfirmationDialog = (id) => {
    openConfirmationDialog(
      'Confirmar',
      'Tem certeza de que quer deletar o Instituto?',
      () => handleDeleteInstitute.mutate(id),
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
        setFormModalOpen(true);
      },
    },
  ];

  const searchParams = [
    {
      queryField: 'name',
      placeholder: 'Instituto',
      type: 'input',
    },
    {
      queryField: 'acronym',
      placeholder: 'Acrônimo',
      type: 'input',
    },
  ];

  const menuData = [
    {
      option: 'Adicionar',
      icon: <AddIcon fontSize="small" />,
      fn: () => {
        setIdToEdit();
        setFormModalOpen(true);
      },
      active: formModalOpen ? true : false,
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
      {formModalOpen && (
        <InstituteForm
          isOpen={formModalOpen}
          setOpen={setFormModalOpen}
          refetch={refetch}
          defaultValue={idToEdit}
          id={idToEdit}
        />
      )}
    </>
  );
};

const InstituteForm = ({ isOpen, setOpen, id }) => {
  const { openConfirmationDialog } = useConfirmationDialog();
  const { successToast, errorToast } = useToast();

  const handleSaveInstitute = async (name, acronym) => {
    await addInstitute(name, acronym);
    successToast('Salvo com sucesso');
  };

  const handleUpdateInstitute = async (id, name, acronym) => {
    await updateInstitute(id, name, acronym).then(() => {
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
      const fetchInstitute = async () => {
        const data = await getInstitute(id);
        setValue('name', data.name);
        setValue('acronym', data.acronym);
      };
      fetchInstitute();
    }
  }, [id, setValue]);

  const onSubmit = async (data) => {
    if (id) {
      handleUpdateInstitute(id, data.name, data.acronym).then(() => {
        setOpen(false);
      });
    } else {
      handleSaveInstitute(data.name, data.acronym).then(() => {
        setOpen(false);
      });
    }
  };

  const handleOpen = (data) => {
    openConfirmationDialog(
      'Confirmar',
      'Tem certeza de que quer salvar o Instituto?',
      () => onSubmit(data),
      () => {
        errorToast('Cancelado');
      },
    );
  };

  return (
    <Modal title={id ? 'Editar Instituto' : 'Novo Instituto'} open={isOpen} setOpen={setOpen}>
      <FormModalContainer onSubmit={handleSubmit(handleOpen)}>
        <FormInput
          register={{ ...register('name', { required: true }) }}
          field={'Nome'}
          required={errors.name}
        />

        <FormInput
          register={{ ...register('acronym', { required: true }) }}
          field={'Acrônimo'}
          required={errors.acronym}
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

export default InstitutesPage;
