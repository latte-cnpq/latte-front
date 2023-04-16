import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.elementBackground};
  border-radius: 10px;
`;

export const StyledButton = styled.button`
  text-decoration: none;
  box-shadow: none;
  height: 100%;
  outline: 0;
  margin: 0;

  padding: 5px;

  color: ${({ theme }) => theme.colors.highContrastText};
  font-size: 15px;
  padding: 5px 15px;
  border: none;

  background: ${({ selected, theme }) =>
    selected ? theme.colors.selectedEelementBackground : 'none'};

  :enabled:hover {
    background-color: ${({ theme }) => theme.colors.selectedEelementBackground};
    cursor: pointer;
  }

  :disabled {
    color: ${({ theme }) => theme.colors.lowContrastText};
  }
`;

export const VerticalSeparator = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bordersAndSeparator};
`;
