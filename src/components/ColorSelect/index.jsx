import { useState } from 'react';
import {
  ColorLabel,
  Container,
  DropDownContent,
  DropdownItem,
  DropdownStyle,
  Label,
  SelectButton,
  SelectContainer,
  StyledLabel,
} from './styles';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from 'styled-components';

export default function ColorSelect({ label, placeholder = 'Selecione uma cor', value, onChange }) {
  const theme = useTheme();

  const options = [
    {
      value: theme.colors.blue,
      label: 'Azul',
    },
    {
      value: theme.colors.red,
      label: 'Vermelho',
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };
  const handleClose = () => setIsOpen(false);

  const handleSelection = (selectedValue) => {
    onChange(selectedValue);
    handleClose();
  };

  return (
    <Container>
      {label && <StyledLabel>{label}</StyledLabel>}
      <SelectContainer>
        <SelectButton onClick={handleOpen} disabled={!options.length}>
          <Label>
            {value.label ? (
              <>
                <ColorLabel color={value.value} />
                {value.label}
              </>
            ) : (
              placeholder
            )}
          </Label>
          <ExpandMoreIcon fontSize="small" />
        </SelectButton>
        {isOpen && (
          <DropdownStyle visible={isOpen}>
            <DropDownContent>
              {options.map((option) => {
                return (
                  <DropdownItem key={option.value} onClick={() => handleSelection(option)}>
                    <ColorLabel color={option.value} />
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
