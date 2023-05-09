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
  overflow: hidden;
`;

export const SidebarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.subtleBackground};
  height: 100%;
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: auto;
  padding: 10px;
  padding-bottom: 100px;

  main {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
