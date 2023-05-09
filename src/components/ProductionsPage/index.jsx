import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { Container } from './styles';

import Table from '../Table';

import * as productionApi from '@/api/production';
import SearchBar from '../SearchBar';
import Pagination from '../Pagination';

const ProductionsPage = () => {
  const [selectedPage, setSelectedPage] = useState(0);

  const [searchData, setSearchData] = useState({
    title: '',
    startDate: '',
    endDate: '',
    institute: '',
    researcher: '',
  });

  const { data, isFetching, refetch } = useQuery('getProductions', () =>
    productionApi.advancedSearch(
      searchData.title,
      searchData.startDate,
      searchData.endDate,
      searchData.institute,
      searchData.researcher,
      selectedPage,
      10,
    ),
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSearch = () => {
    refetch();
  };

  const searchParams = [
    {
      queryField: 'title',
      placeholder: 'Título',
      type: 'input',
    },
    {
      queryField: 'startDate',
      placeholder: 'Ano Início',
      type: 'input',
    },
    {
      queryField: 'endDate',
      placeholder: 'Ano Fim',
      type: 'input',
    },
    {
      queryField: 'institute',
      placeholder: 'Instituto',
      type: 'input',
    },
    {
      queryField: 'researcher',
      placeholder: 'Pesquisador',
      type: 'input',
    },
  ];

  const tableColumns = [
    { heading: 'Tipo', value: 'type' },
    { heading: 'Detalhamento', value: 'details' },
  ];

  return (
    <Container>
      <SearchBar
        params={searchParams}
        data={searchData}
        setData={setSearchData}
        onClick={handleSearch}
      />

      {data && <Table columns={tableColumns} data={data.productions} isFetching={isFetching} />}

      {data && (
        <Pagination
          pages={data.totalPage}
          selected={selectedPage}
          setSelected={setSelectedPage}
          refetch={refetch}
        />
      )}
    </Container>
  );
};

export default ProductionsPage;
