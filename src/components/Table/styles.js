import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0px;
  gap: 5px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.elementBackground};
  border-radius: 10px;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lowContrastText};
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 100%;
  cursor: pointer;

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

export const THeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.p`
  flex: 1;
  font-weight: 700;
`;

export const Cell = styled.p`
  flex: 1;
`;

export const TBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 10px;
  gap: 5px;
  width: 100%;
`;

export const InputRow = styled(Row)`
  padding: 0px 10px;

  :hover {
    background: none;
  }
`;

export const InputField = styled.input`
  padding: 5px 0px;
  height: 100%;
  font-size: 15px;
  flex: 1;
  background: none;
  outline: none;
  border: none;
  color: ${({ theme }) => theme.colors.highContrastText};
  border: 1px solid ${({ theme }) => theme.colors.bordersAndSeparator};
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.elementBackground};
  border: none;
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.highContrastText};
  padding: 10px 5px;
`;
export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;
