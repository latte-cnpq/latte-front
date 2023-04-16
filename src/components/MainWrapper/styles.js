import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from{
    opacity: 0;
  }to{
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  opacity: 0;
  animation: ${appear} 250ms ease-in-out forwards;
`;

export const SidebarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.subtleBackground};
  height: 100%;
  width: 500px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  main {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
