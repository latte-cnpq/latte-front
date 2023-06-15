import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 15px;
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 200px;
  border: 1px solid ${({ theme }) => theme.colors.highContrastText};
  background: none;
  padding: 5px 10px;
  gap: 10px;
`;

export const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100px;
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
  cursor: pointer;

  svg {
    fill: ${({ theme, disabled }) =>
      disabled ? theme.colors.lowContrastText : theme.colors.highContrastText};
  }

  :enabled > :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.hoveredElementBackground};
  }
`;

export const Label = styled.div`
  width: 100%;
  text-align: start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  margin-top: 30px;
  top: 0px;
  left: 0;
  width: 100%;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 0px;
  background: ${({ theme }) => theme.colors.elementBackground};
  border: 1.5px solid ${({ theme }) => theme.colors.highContrastText};
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
  border: 1px solid transparent;
  cursor: pointer;

  &:hover,
  :focus,
  :focus:hover {
    border: 1px solid ${({ theme }) => theme.colors.highContrastText};
    outline: none;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.highContrastText};
      font-weight: 500;

      :hover {
        background-color: ${({ theme }) => theme.colors.highContrastText};
      }
    `}
`;

export const StyledInput = styled.input`
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.highContrastText};
  outline: none;
  padding: 5px 10px;
  background: none;
  color: ${({ theme }) => theme.colors.highContrastText};
  font-size: 15px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.highContrastText};
  }
`;

export const StyledButton = styled.button`
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.highContrastText};
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
