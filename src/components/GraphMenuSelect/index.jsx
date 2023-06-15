import { useMemo, useState } from 'react';
import {
  Container,
  DropdownItem,
  DropdownStyle,
  SelectButton,
  SelectContainer,
  StyledButton,
  StyledInput,
  DropDownContent,
  StyledLabel,
  Label,
} from './styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function GraphMenuSelect({
  label,
  options,
  placeholder = 'Selecione uma opção',
  value,
  onChange,
  allowClear = false,
  allowSearch = false,
  allowSort = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isAscending, setIsAscending] = useState(true);

  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleClose = () => setIsOpen(false);

  const handleSelection = (selectedValue) => {
    onChange(selectedValue);
    handleClose();
  };

  const handleClearSelection = () => {
    onChange(null);
    handleClose();
  };

  const handleSearch = (event) => setSearchText(event.target.value);
  const handleSort = () => setIsAscending(!isAscending);

  const sortedOptions = useMemo(
    () =>
      allowSort
        ? [...options].sort((a, b) =>
            isAscending ? a.label.localeCompare(b.label) : b.label.localeCompare(a.label),
          )
        : options,
    [allowSort, isAscending, options],
  );

  const filteredOptions = useMemo(
    () =>
      allowSearch
        ? sortedOptions.filter((option) =>
            option.label.toLowerCase().includes(searchText.toLowerCase()),
          )
        : sortedOptions,
    [allowSearch, sortedOptions, searchText],
  );

  return (
    <Container>
      <StyledLabel>{label}</StyledLabel>
      <SelectContainer>
        <SelectButton onClick={handleOpen} disabled={!options.length}>
          <Label>{value?.label ?? placeholder}</Label>
          <ExpandMoreIcon fontSize="small" />
        </SelectButton>
        {isOpen && (
          <DropdownStyle visible={isOpen}>
            {allowSearch && (
              <StyledInput
                type="text"
                placeholder="Pesquisar"
                value={searchText}
                onChange={handleSearch}
              />
            )}
            {allowSort && (
              <StyledButton type="button" onClick={handleSort}>
                Ordenar {isAscending ? 'A-Z' : 'Z-A'}
              </StyledButton>
            )}
            {allowClear && value && (
              <DropdownItem key="clear" onClick={handleClearSelection}>
                Todos
              </DropdownItem>
            )}
            <DropDownContent>
              {filteredOptions.map((option) => {
                return (
                  <DropdownItem key={option.value} onClick={() => handleSelection(option)}>
                    {option.label}
                  </DropdownItem>
                );
              })}
            </DropDownContent>
          </DropdownStyle>
        )}
      </SelectContainer>
    </Container>
  );
}
