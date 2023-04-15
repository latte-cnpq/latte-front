import { useEffect, useState } from 'react';
import {
  Container,
  DropdownItem,
  DropdownStyle,
  ExpandIcon,
  SelectButton,
  SelectContainer,
} from './styles';

export default function Select({
  mapper,
  label,
  data,
  placeholder,
  selected,
  setSelected,
  defaultOption,
  disabled = false,
}) {
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
    if (defaultOption) {
      handleSelection(defaultOption);
    }
  }, []);

  if (mapper) {
    return (
      <Container>
        {label}
        <SelectContainer>
          <SelectButton onClick={() => handleOpen()} disabled={disabled}>
            {selected ? selected[mapper.label] : placeholder}
            <ExpandIcon />
          </SelectButton>
          <DropdownStyle isVisible={open}>
            {data.map((value, index) => {
              return (
                <DropdownItem key={index} value={value} onClick={() => handleSelection(value)}>
                  {value[mapper.label]}
                </DropdownItem>
              );
            })}
          </DropdownStyle>
        </SelectContainer>
      </Container>
    );
  }

  return (
    <Container>
      {label}
      <SelectContainer>
        <SelectButton onClick={() => handleOpen()} disabled={disabled}>
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
    </Container>
  );
}
