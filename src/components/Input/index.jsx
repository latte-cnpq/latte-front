import React from 'react';
import { InputContainer, InputLabel, StyledInput } from './styles';

export const Input = ({ type = 'text', label, value, onChange, readOnly = false }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <StyledInput type={type} value={value} onChange={onChange} readOnly={readOnly} />
    </InputContainer>
  );
};
