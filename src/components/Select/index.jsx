import React, { useState } from 'react';
import { SelectContainer, SelectButton, DropdownStyle, DropdownItem, ExpandIcon } from './styles';

export default function Select({ label, data, selected, setSelected }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((current) => !current);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValueChange = (value) => {
    setSelected(value);
  };

  const handleChange = (value) => {
    handleValueChange(value);
    handleClose();
  };

  return (
    <SelectContainer>
      <SelectButton onClick={() => handleOpen()}>
        {selected ? selected.name : label}
        <ExpandIcon />
      </SelectButton>
      <DropdownStyle isVisible={open}>
        {data.map((value, index) => (
          <DropdownItem onClick={() => handleChange(value)} active={value === selected} key={index}>
            {value.name}
          </DropdownItem>
        ))}
      </DropdownStyle>
    </SelectContainer>
  );
}
