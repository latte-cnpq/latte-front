import React from 'react';
import { InputContainer, Input, IconButton, SearchIcon } from './styles';

export default function SearchInput({ value, onChange, onClick }) {
  return (
    <InputContainer>
      <Input value={value} onChange={onChange} />
      <IconButton onClick={onClick}>
        <SearchIcon />
      </IconButton>
    </InputContainer>
  );
}
