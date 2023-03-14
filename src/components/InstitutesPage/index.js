import useAxios from '@/hooks/useFetch';
import { useCallback, useEffect, useState } from 'react';
import Button from '../Button';
import SearchBar from '../SearchBar';
import Separator from '../Separator';
import Table from '../Table';
import TopMenu from '../TopMenu';

import {
  BottomMenuContainer,
  CancelIcon,
  Container,
  ContentContainer,
  GhostContainer,
  Logo,
  LogoContainer,
  PlusIcon,
  SaveIcon,
  SidebarContainer,
  SidebarContent,
  TableContainer,
  TrashcanIcon,
} from './styles';
export default function InstitutesPage() {
  return (
    <Container>
      <SidebarContainer>
        <LogoContainer>
          <Logo />
          <Separator />
        </LogoContainer>
        <SidebarContent>
          <GhostContainer />
          <GhostContainer />
          <GhostContainer />
        </SidebarContent>
      </SidebarContainer>
      <ContentContainer>
        <TopMenu />
        <SearchBar />
        <HandleTable />
      </ContentContainer>
    </Container>
  );
}

const HandleTable = () => {
  const { fetchData } = useAxios();
  const [selected, setSelected] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const [including, setIncluding] = useState(false);

  const [value, setValue] = useState({
    name: '',
    acronym: '',
  });

  const startIncluding = () => {
    setIncluding(true);
  };

  const cancelIncluding = () => {
    setIncluding(false);
    setValue({
      name: '',
      acronym: '',
    });
  };
  const handleCreate = () => {
    fetchData({
      method: 'post',
      url: `/Institute/Create`,
      body: { ...value },
    })
      .then(() => {
        reFetch();
        setIncluding(false);
      })
      .catch(() => {
        alert('Ocorreu um erro ao salvar o Instituto, verifique os dados e tente novamente.');
      });
  };

  const handleDelete = async () => {
    if (selected) {
      await fetchData({
        method: 'delete',
        url: `/Institute/${selected}`,
      })
        .then(() => {
          reFetch();
        })
        .catch(() => {
          alert('Ocorreu um erro ao deletar o Instituto, tente novamente.');
        });
    }
  };

  const reFetch = useCallback(() => {
    fetchData({
      method: 'get',
      url: '/Institute/GetAll',
    })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert('Ocorreu um erro ao consultar os Institutos, por favor, atualize a página');
      });
  }, [fetchData]);

  useEffect(() => {
    reFetch();
  }, [reFetch]);

  const columns = [
    { heading: 'Nome', value: 'name' },
    { heading: 'Acrônimo', value: 'acronym' },
  ];

  return (
    <>
      {!loading && (
        <TableContainer>
          <Table
            data={data}
            columns={columns}
            selected={selected}
            setSelected={setSelected}
            inserting={including}
            inputValue={value}
            onChange={setValue}
            reFetch={reFetch}
          />
        </TableContainer>
      )}
      <BottomMenuContainer>
        {!including && (
          <Button icon={<PlusIcon />} onClick={startIncluding}>
            Incluir
          </Button>
        )}
        {including && (
          <>
            <Button icon={<CancelIcon />} onClick={cancelIncluding}>
              Cancelar
            </Button>
            <Button icon={<SaveIcon />} onClick={handleCreate}>
              Salvar
            </Button>
          </>
        )}
        <Button icon={<TrashcanIcon />} onClick={handleDelete}>
          Excluir
        </Button>
      </BottomMenuContainer>
    </>
  );
};
