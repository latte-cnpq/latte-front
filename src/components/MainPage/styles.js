import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  width: 100%;
  height: 100%;
`;

export const SidebarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.subtleBackground};
  height: 100%;
  width: 500px;
`;

export const ContentContainer = styled.div`
  height: 100%;
  flex: 1;
`;
