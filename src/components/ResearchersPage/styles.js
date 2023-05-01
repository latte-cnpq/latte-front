import styled, { keyframes } from 'styled-components';

const contentAppear = keyframes`
  from{
    opacity: 0;
    transform: scale(0);
  }to{
    opacity: 1;
    transform: scale(100%);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 10px;

  opacity: 0;
  transform: scale(0);

  animation: ${contentAppear} 250ms 100ms ease-in-out forwards;
`;

export const TableContainer = styled.div`
  width: 100%;
  padding: 5px;
  overflow: auto;
  border-radius: 10px;
`;

export const FormModalContainer = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormModalButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
