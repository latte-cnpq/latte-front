import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  gap: 10px;

  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 10px;
  padding: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const InputLabel = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.elementBackground};
  border: none;
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.highContrastText};
  padding: 10px 5px;
  min-width: 250px;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;
