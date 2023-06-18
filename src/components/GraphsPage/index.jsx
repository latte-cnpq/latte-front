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
    node: {}
  });

  const {data, refetch} = useQuery('getGraphData', () =>
    GraphApi.getGraph(searchData.researcher.label || '', searchData.institute.label || '', searchData.production.value || '', searchData.node.value || '')
  )

  useEffect(() => {
    console.log(searchData)
    refetch();
  }, [searchData, refetch]);

  const colors = {
    firstColor:  'red',
    secondColor: 'yellow',
    thirdColor: 'green'
  }

  return (
    <Container>
    <GraphRender graphData={data} lowerLimit={2} upperLimit={5} colors={colors}/>
      <MenuContainer style={{backgroundColor: 'RGB(0;0;0;0)'}}>
        <GraphMenu searchData={searchData} setSearchData={setSearchData} colors={colors}/>
      </MenuContainer>
    </Container>
  );
};

export default GraphsPage;
