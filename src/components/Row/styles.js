import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  gap: 60px;
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

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  padding: 0px 10px;

  transition: background-color 100ms ease-in-out;

  background: ${({ selected, theme }) =>
    selected ? theme.colors.selectedEelementBackground : `none`};

  :hover {
    background-color: ${({ theme, selected }) =>
      selected ? theme.colors.selectedEelementBackground : theme.colors.hoveredElementBackground};
  }
`;

export const Cell = styled.p`
  flex: 1;
`;

export const Expansion = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.elementBackground};
  height: 100%;
  max-height: ${({ selected, height }) => (selected ? height : '0px')};
  transition: max-height 500ms ease-in-out;
  overflow: hidden;
`;

export const ExpandedContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: ${({ height }) => height};
  overflow: auto;
  user-select: text;
`;
