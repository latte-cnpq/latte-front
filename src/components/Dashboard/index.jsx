import React from 'react';

import { Container, Header, Content, Logo, GhostContainer } from './styles';
import Separator from '../Separator';

import Link from 'next/link';

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Logo />
        </Link>
        <Separator />
      </Header>
      <Content>
        <GhostContainer />
        <GhostContainer />
        <GhostContainer />
      </Content>
    </Container>
  );
};
