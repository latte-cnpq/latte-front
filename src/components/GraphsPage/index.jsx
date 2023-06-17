import React from 'react';
import { Container, MenuContainer } from './styles';
import GraphMenu from '../GraphMenu';
import GraphRender from '../GraphRender';

const GraphsPage = () => {
  return (
    <Container>
      <GraphRender/>
      <MenuContainer style={{backgroundColor: 'RGB(0;0;0;0)'}}>
        <GraphMenu />
      </MenuContainer>
    </Container>
  );
};

export default GraphsPage;
