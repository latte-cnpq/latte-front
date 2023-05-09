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
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0px;
  gap: 5px;
  width: 100%;
  min-height: 100px;

  background-color: ${({ theme }) => theme.colors.elementBackground};
  border-radius: 10px;
  opacity: 0;

  animation: ${appear} 250ms ease-in-out forwards;
`;

export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 100%;
`;

export const HeaderTitle = styled.p`
  flex: 1;
  font-weight: 700;
`;

export const TBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 10px;
  gap: 5px;
  width: 100%;
  overflow: auto;
`;
