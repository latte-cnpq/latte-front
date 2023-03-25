import React from 'react';
import { Container, Content, Option, Options } from './styles';

export const Row = ({ selected, children, options, id }) => {
  return (
    <Container selected={selected}>
      <Content>{children}</Content>
      <Options>
        {options.map((option, index) => [
          <Option
            key={index}
            onClick={() => {
              option.fn(id);
            }}
          >
            {option.icon}
          </Option>,
        ])}
      </Options>
    </Container>
  );
};
