import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { Container } from './styles';

import Table from '../Table';

import * as productionApi from '@/api/production';
import Pagination from '../Pagination';
import SearchBar from '../SearchBar';

const ProductionsPage = ({ year, researcher, institute }) => {
  const [selectedPage, setSelectedPage] = useState(0);

  const [searchData, setSearchData] = useState({
    title: '',
    startDate: year || '',
    endDate: year || '',
    institute: institute || '',
    researcher: researcher || '',
  });

  useEffect(() => {
    console.log(year);
  }, [year]);

  const { data, isFetching, refetch } = useQuery('getProductions', () => {
    return productionApi.advancedSearch(
      searchData.title,
      searchData.startDate,
      searchData.endDate,
      searchData.institute,
      searchData.researcher,
      selectedPage,
      10,
    );
  });

  useEffect(() => {
    refetch();
  }, [selectedPage, refetch]);

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
        <Pagination pages={data.totalPage} selected={selectedPage} setSelected={setSelectedPage} />
      )}
    </Container>
  );
};

export default ProductionsPage;
