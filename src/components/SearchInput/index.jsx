import React from 'react';
import { InputContainer, Input, IconButton, SearchIcon } from './styles';

export default function SearchInput({ value, onChange }) {
  return (
    <InputContainer>
      <Input value={value} onChange={onChange} />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </InputContainer>
  );
}
