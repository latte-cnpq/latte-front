import styled from 'styled-components';

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
  height: 20px;
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.colors.elementBackground};
  border: none;
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.highContrastText};
  padding: 5px 10px;
  min-width: 250px;
  font-size: 15px;

  :read-only {
    user-select: none;
    pointer-events: none;
    color: ${({ theme }) => theme.colors.lowContrastText};
  }
`;
