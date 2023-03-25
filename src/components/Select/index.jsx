import { useEffect, useState } from 'react';
import { DropdownItem, DropdownStyle, ExpandIcon, SelectButton, SelectContainer } from './styles';

export default function Select({ data, placeholder, selected, setSelected, defaultOption }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((current) => !current);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelection = (value) => {
    setSelected(value);
    handleClose();
  };

  useEffect(() => {
    handleSelection(defaultOption);
  }, []);

  return (
    <SelectContainer>
      <SelectButton onClick={() => handleOpen()}>
        {selected ? selected.label : placeholder}
        <ExpandIcon />
      </SelectButton>
      <DropdownStyle isVisible={open}>
        {data.map((value, index) => {
          return (
            <DropdownItem key={index} value={value} onClick={() => handleSelection(value)}>
              {value.label}
            </DropdownItem>
          );
        })}
      </DropdownStyle>
    </SelectContainer>
  );
}
