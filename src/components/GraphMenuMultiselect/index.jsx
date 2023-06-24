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
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

export default function GraphMenuMultiselect({
  label,
  options,
  placeholder = 'Selecione',
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

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSelection = (selectedOption) => {
    console.log(selectedOption);

    const currentSelected = [...value];

    const selectedIndex = currentSelected.findIndex(
      (option) => option.value === selectedOption.value,
    );

    if (selectedIndex > -1) {
      currentSelected.splice(selectedIndex, 1); // Remove a opção selecionada se já estiver selecionada
    } else {
      currentSelected.push(selectedOption); // Adiciona a opção selecionada se ainda não estiver selecionada
    }

    onChange(currentSelected);
  };

  const handleClearSelection = () => {
    handleClose();
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  const handleSort = () => {
    setIsAscending(!isAscending);
  };

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

  const isOptionSelected = (option) => {
    if (!value.length) {
      return false;
    }

    return value.some((selectedOption) => selectedOption.value === option.value);
  };

  return (
    <Container>
      <StyledLabel>{label}</StyledLabel>
      <SelectContainer>
        <SelectButton onClick={handleOpen} disabled={!options.length}>
          <Label>
            {value.length > 0 ? value.map((option) => option.label).join(', ') : placeholder}
          </Label>
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
            {allowClear && value.length > 0 && (
              <DropdownItem key="clear" onClick={handleClearSelection}>
                Todos
              </DropdownItem>
            )}
            <DropDownContent>
              {filteredOptions.map((option) => {
                const isSelected = isOptionSelected(option);
                return (
                  <DropdownItem
                    key={option.value}
                    onClick={() => handleSelection(option)}
                    selected={isSelected}
                  >
                    {option.label}
                    {isSelected ? (
                      <CheckBoxIcon fontSize="small" />
                    ) : (
                      <CheckBoxOutlineBlankIcon fontSize="small" />
                    )}
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
