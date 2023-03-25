import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;

  padding: 0px 10px;

  transition: background-color 100ms ease-in-out;

  :hover {
    background-color: ${({ theme, selected }) =>
      selected ? theme.colors.selectedEelementBackground : theme.colors.hoveredElementBackground};
  }

  ${({ selected }) => {
    if (selected) {
      return css`
        background-color: ${({ theme }) => theme.colors.selectedEelementBackground};
      `;
    }
  }}
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;
  padding: 10px 0px;
  cursor: pointer;
`;

export const Option = styled.div`
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.highContrastText};

    :hover {
      fill: ${({ theme }) => theme.colors.hoveredSolidBackground};
    }
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;
`;
