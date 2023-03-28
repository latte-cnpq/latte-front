import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  gap: 10px;

  height: 30px;

  background: ${({ selected, theme }) =>
    selected ? theme.colors.selectedEelementBackground : theme.colors.elementBackground};

  border-radius: 15px;
  border: none;
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.highContrastText};

  :not(:disabled) {
    :hover {
      cursor: pointer;
      background: ${({ selected, theme }) =>
        selected ? theme.colors.bordersAndFocusRing : theme.colors.hoveredElementBackground};
    }
  }

  :disabled {
    background: ${({ theme }) => theme.colors.elementBackground};
    border: 1px solid ${({ theme }) => theme.colors.bordersAndSeparator};
  }
`;
