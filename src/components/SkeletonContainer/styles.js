import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: .3;
  }
  100%{
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: ${({ width }) => (width ? `${width}` : '100%')};
  height: ${({ height }) => (height ? `${height}` : '200px')};
  border-radius: 10px;
`;

export const Skeleton = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.elementBackground};
  animation: ${blink} 1500ms infinite forwards ease-in-out;
`;
