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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.highContrastText};
  cursor: pointer;

  :hover {
    background: ${({ selected, theme }) =>
      selected ? theme.colors.bordersAndFocusRing : theme.colors.hoveredElementBackground};
  }
`;
