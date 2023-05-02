import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { Container } from './styles';

import Table from '../Table';

import * as productionApi from '@/api/production';
import SearchBar from '../SearchBar';

const ProductionsPage = () => {
  const { data, isFetching, refetch } = useQuery('getProductions', productionApi.getProductions);
  const [searchData, setSearchData] = useState({ name: '', acronym: '' });

  useEffect(() => {
    refetch();
  }, [refetch]);

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
    <>
      <Container>
        <SearchBar params={searchParams} data={[]} setData={setSearchData} onClick={handleSearch} />

        {data && <Table columns={tableColumns} data={data} isFetching={isFetching} />}

        {/* {data && (
          <Pagination
            pages={data.totalPages}
            selected={selectedPage}
            setSelected={setSelectedPage}
            refetch={refetch}
          />
        )} */}
      </Container>
    </>
  );
};

export default ProductionsPage;
