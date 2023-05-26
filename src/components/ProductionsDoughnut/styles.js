import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const Container = styled.div`
  flex: 1 1;
  height: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 10px;
  padding: 10px;

  /* opacity: 0;
  animation: ${appear} 250ms ease-in-out forwards; */
`;

export const TitleText = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.highContrastText};
  font-size: 20px;
`;
