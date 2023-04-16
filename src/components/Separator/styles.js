import styled from 'styled-components';

export const Container = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bordersAndSeparator};
`;
