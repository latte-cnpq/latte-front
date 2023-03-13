import React from 'react';
import Button from '../Button';
import { Container, UserIcon, InstituteIcon, GraphIcon, ConfigIcon } from './styles';

export default function TopMenu() {
  const data = [
    {
      option: 'Pesquisadores',
      icon: <UserIcon />,
    },
    {
      option: 'Institutos',
      icon: <InstituteIcon />,
    },
    {
      option: 'Grafos',
      icon: <GraphIcon />,
    },
    {
      option: 'Configurações',
      icon: <ConfigIcon />,
    },
  ];

  return (
    <Container>
      {data.map((elem, index) => {
        return (
          <Button key={index} icon={elem.icon}>
            {elem.option}
          </Button>
        );
      })}
    </Container>
  );
}
