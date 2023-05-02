import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { Container } from './styles';

import Pagination from '../Pagination';
import SearchBar from '../SearchBar';
import Table from '../Table';

import * as researcherApi from '@/api/researcher';

const ProductionsPage = () => {
  const [searchData, setSearchData] = useState({ name: '', acronym: '' });

  const [selectedPage, setSelectedPage] = useState(0);

  const { data, isFetching, refetch } = useQuery('getResearchers', () =>
    researcherApi.advancedSearch(searchData.name, searchData.acronym, selectedPage, 15),
  );

  useEffect(() => {
    refetch();
  }, [selectedPage, refetch]);

  const handleSearch = () => {
    refetch();
  };

  const tableColumns = [
    { heading: 'Nome', value: 'name' },
    { heading: 'Instituto', value: 'institute.acronym' },
  ];

  const expandedData = [{ title: 'Resumo', content: 'resume' }];

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

  return (
    <>
      <Container>
        <SearchBar params={searchParams} data={[]} setData={setSearchData} onClick={handleSearch} />
        {data && (
          <Table
            columns={tableColumns}
            data={data.content}
            isFetching={isFetching}
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
      </Container>
    </>
  );
};

export default ProductionsPage;
