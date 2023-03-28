import Head from 'next/head';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { Input } from '@/components/Input';
import Menu from '@/components/Menu';
import Modal from '@/components/Modal';
import Select from '@/components/Select';
import Table from '@/components/Table';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import getInstitutes from '@/api/institute';
import {
  addResearcher,
  deleteResearcher,
  executeFilterResearcher,
  getResearcher,
  searchResearcher,
  updateResearcher,
} from '@/api/researcher';
import { EditModal } from '@/components/EditModal';
import SearchBar from '@/components/SearchBar';
import { customToast } from '@/utils/toast';
import { useTheme } from 'styled-components';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

export default function Pesquisadores() {
  const [searchData, setSearchData] = useState({ textSearch: '', field: { value: 'ALL' } });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataToEdit, setDataToEdit] = useState();

  const { data, isFetching, refetch } = useQuery('getResearchers', () =>
    executeFilterResearcher(searchData),
  );

  const theme = useTheme();

  const handleSearch = () => {
    refetch();
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
    refetch();
  };

  const handleDeleteResearcher = useMutation(async (id) => {
    await deleteResearcher(id);
    customToast('Deletado com sucesso', theme);
    refetch();
  });

  const handleGetResearcher = useMutation(async (id) => {
    const instituteData = await getResearcher(id);
    setDataToEdit(instituteData);
  });

  const handleUpdateResearcher = useMutation(async (inputStates) => {
    await updateResearcher(
      inputStates.id,
      inputStates.name,
      inputStates.email,
      inputStates.researcheridNumber,
      inputStates.resume,
      inputStates.instituteID,
    );
    customToast('Modificado com sucesso', theme);
    refetch();
  });

  const tableColumns = [
    { heading: 'Nome', value: 'name' },
    { heading: 'Instituto', value: 'instituteAcronym' },
  ];

  const editColumns = [
    { heading: 'Nome', value: 'name' },
    { heading: 'Email', value: 'email' },
    { heading: 'Resumo', value: 'resume' },
  ];

  const expandedData = [{ title: 'Resumo', content: 'resume' }];

  const tableRowOptions = [
    {
      icon: <DeleteIcon fontSize="small" />,
      fn: (id) => {
        handleDeleteResearcher(id);
      },
    },
    {
      icon: <EditIcon fontSize="small" />,
      fn: (id) => {
        handleGetResearcher.mutate(id);
        setIsModalOpen(true);
      },
    },
  ];

  const searchParams = [
    {
      queryField: 'textSearch',
      type: 'input',
    },
    {
      queryField: 'field',
      type: 'select',
      options: [
        { label: 'Todos', value: 'ALL', default: true },
        { label: 'Nome', value: 'NAME' },
        { label: 'ID', value: 'RESEARCHERIDNUMBER' },
      ],
    },
  ];

  const menuData = [
    {
      option: 'Adicionar',
      icon: <AddIcon fontSize="small" />,
      fn: () => {
        setIsAddModalOpen(true);
      },
      active: false,
    },
  ];

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Institutos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SearchBar
          params={searchParams}
          data={searchData}
          setData={setSearchData}
          onClick={handleSearch}
        />
        <Table
          columns={tableColumns}
          data={data}
          isFetching={isFetching}
          rowOptions={tableRowOptions}
          expandedData={expandedData}
          expandable={true}
        />
        <EditModal
          modalTitle={'Editar Instituto'}
          data={dataToEdit}
          columns={editColumns}
          open={isModalOpen}
          setOpen={setIsModalOpen}
          onSave={handleUpdateResearcher.mutate}
          onFetch={() => getResearcher(dataToEdit)}
        />
        <Menu data={menuData} justify={'flex-end'} />
        <AddModal isAddModalOpen={isAddModalOpen} handleCloseModal={handleCloseModal} />
      </main>
    </>
  );
}

const AddModal = ({ isAddModalOpen, handleCloseModal }) => {
  const theme = useTheme();

  const [codeExists, setCodeExists] = useState(false);
  const { data, isFetching } = useQuery('getInstitutes', getInstitutes);
  const [selected, setSelected] = useState();
  const [idInput, setIdInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    if (isAddModalOpen) {
      setCodeExists(false);
      setSelected();
      setIdInput('');
      setNameInput('');
    }
  }, [isAddModalOpen]);

  const handleGetResearcher = useMutation(async (id) => {
    await searchResearcher(id)
      .then((data) => {
        setCodeExists(true);
        setNameInput(data.name);
      })
      .catch(() => {
        customToast('ID de Pesquisador não encontrado.', theme);
      });
  });

  const handleSaveResearcher = useMutation(async ({ researcherIdNumber, instituteId }) => {
    await addResearcher(researcherIdNumber, instituteId)
      .then(() => {
        customToast('Salvo com sucesso.', theme);
        handleCloseModal();
      })
      .catch(() => {
        customToast('Ocorreu um erro ao salvar.', theme);
      });
  });

  const menuData = [
    {
      option: 'Pesquisar',
      icon: <SearchIcon fontSize="small" />,
      fn: () => {
        if (idInput != '') {
          handleGetResearcher.mutate(idInput);
        }
      },
      active: false,
    },
  ];

  const menuDataSave = [
    {
      option: 'Adicionar',
      icon: <AddIcon fontSize="small" />,
      fn: () => {
        if (idInput != '' && selected) {
          const id = selected.id;
          handleSaveResearcher.mutate({ researcherIdNumber: idInput, instituteId: id });
        }
      },
      active: false,
    },
  ];

  return (
    <Modal
      title={'Adicionar Pesquisador'}
      open={isAddModalOpen}
      handleCloseProp={handleCloseModal}
      options={codeExists ? menuDataSave : menuData}
      direction={'column'}
    >
      <Input
        type="number"
        label={'ID'}
        value={idInput}
        onChange={(e) => setIdInput(e.target.value)}
      />

      {codeExists && <Input label={'Nome'} value={nameInput} readOnly={true} />}

      {!isFetching && codeExists && (
        <Select
          mapper={{ label: 'acronym', value: 'id' }}
          label={'Instituto'}
          data={data}
          placeholder="Selecionar"
          selected={selected}
          setSelected={setSelected}
          disabled={!codeExists}
        />
      )}
    </Modal>
  );
};
