import React from 'react';
import { Container, MenuContainer } from './styles';
import GraphMenu from '../GraphMenu';

const GraphsPage = () => {
  return (
    <Container>
      <MenuContainer>
        <GraphMenu />
      </MenuContainer>
    </Container>
  );
};

export default GraphsPage;
