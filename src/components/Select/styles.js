import styled, { css } from 'styled-components';
import ExpandSvg from './expand.svg';

export const SelectContainer = styled.div`
  position: relative;
  min-width: 150px;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.elementBackground};
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ExpandIcon = styled(ExpandSvg)`
  width: 25px;
  height: auto;
`;

export const SelectButton = styled.button`
  background: none;
  border: none;
  text-decoration: none;
  outline: none;
  margin: 0px;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.highContrastText};
  font-size: 0.9em;
  padding: 2px 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.hoveredElementBackground};
  }
`;

export const DropdownStyle = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.elementBackground};
  border: 1.5px solid ${({ theme }) => theme.colors.bordersAndSeparator};

  transition: max-height 0.2s ease;
  overflow: auto;

  ${({ isVisible }) =>
    isVisible !== true &&
    css`
      max-height: 40px;
      visibility: hidden;
    `}
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
