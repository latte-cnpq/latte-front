import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
  font-size: 15px;
  padding-left: 43px;
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.elementBackground};
  padding: 5px 10px;
  gap: 10px;
`;

export const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
  text-decoration: none;
  outline: none;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.lowContrastText : theme.colors.highContrastText};
  font-size: 15px;
  gap: 10px;

  svg {
    fill: ${({ theme, disabled }) =>
      disabled ? theme.colors.lowContrastText : theme.colors.highContrastText};
  }

  :enabled > :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.hoveredElementBackground};
  }
`;

const expand = keyframes`
  from{
    opacity: 0;
    transform: scaleY(0);
  }
  to{
    opacity: 1;
    transform: scaleY(1);
  }
`;

export const DropdownStyle = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.elementBackground};
  border: 1.5px solid ${({ theme }) => theme.colors.bordersAndSeparator};
  z-index: 12;

  transform-origin: top center;
  opacity: 0;
  transform: scaleY(0);
  animation: ${expand} 200ms ease-in-out forwards;
  transition: max-height 250ms ease;
  gap: 10px;
`;

export const DropdownItem = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  font-size: 0.9em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.highContrastText};
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover,
  :focus,
  :focus:hover {
    background-color: ${({ theme }) => theme.colors.hoveredElementBackground};
    outline: none;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.selectedEelementBackground};
      font-weight: 500;

      :hover {
        background-color: ${({ theme }) => theme.colors.selectedEelementBackground};
      }
    `}
`;

export const StyledInput = styled.input`
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.bordersAndSeparator};
  outline: none;
  padding: 5px 10px;
  background: none;
  color: ${({ theme }) => theme.colors.highContrastText};
  font-size: 15px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.lowContrastText};
  }
`;

export const StyledButton = styled.button`
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.bordersAndSeparator};
  outline: none;
  padding: 5px 10px;
  background: none;
  color: ${({ theme }) => theme.colors.highContrastText};
  cursor: pointer;
`;

export const DropDownContent = styled.div`
  overflow: auto;
  max-height: 200px;
`;
