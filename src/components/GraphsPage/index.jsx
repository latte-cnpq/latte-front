import React, { useEffect, useState } from 'react';
import { Container, MenuContainer } from './styles';
import GraphMenu from '../GraphMenu';
import GraphRender from '../GraphRender';
import { useQuery } from 'react-query';
import * as GraphApi from '../../api/graphs'

const GraphsPage = () => {

  const [searchData, setSearchData] = useState({
    researcher: {},
    institute: {},
    production: {
      value: 'BOOK',
      label: 'Livros',
    },
    node: {
      value: 'researcher',
      label: 'Pesquisador',
    },
  });

  const [thresholds, setThresholds] = useState({
    lowerLimit: 2,
    upperLimit: 5
  })

  const {data, refetch, isFetching} = useQuery('getGraphData', () =>
    GraphApi.getGraph(searchData.researcher.label || '', searchData.institute.value || '', searchData.production.value || '', searchData.node.value || '')
  )

  useEffect(() => {
    refetch();
  }, [searchData, refetch]);

  const colors = {
    firstColor:  'red',
    secondColor: 'yellow',
    thirdColor: 'green'
  }

  return (
    <Container>
    <GraphRender graphData={data} lowerLimit={thresholds.lowerLimit} upperLimit={thresholds.upperLimit} colors={colors} isLoading={isFetching}/>
      <MenuContainer>
        <GraphMenu searchData={searchData} setSearchData={setSearchData} colors={colors} thresholds={thresholds} setThresholds={setThresholds}/>
      </MenuContainer>
    </Container>
  );
};

export default GraphsPage;
