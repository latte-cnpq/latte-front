import React from 'react';
import Button from '../Button';
import { Container } from './styles';
import { useRouter } from 'next/router';

export default function TopMenu({ data }) {
  const router = useRouter();

  const handleRedirect = (href) => {
    router.push(href);
  };

  const isActive = (pathname) => {
    return router.pathname === pathname ? true : false;
  };

  return (
    <Container>
      {data.map((elem, index) => {
        return (
          <Button
            key={index}
            icon={elem.icon}
            onClick={() => handleRedirect(elem.href)}
            selected={isActive(elem.href)}
          >
            {elem.option}
          </Button>
        );
      })}
    </Container>
  );
}
