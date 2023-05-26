import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px;
  border-radius: 10px;
  width: auto;
  flex: 1;

  gap: 10px;

  background-color: ${({ theme }) => theme.colors.elementBackground};
`;
