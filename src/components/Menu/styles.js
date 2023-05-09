import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: center;
  padding: 10px;
  gap: 10px;
`;
