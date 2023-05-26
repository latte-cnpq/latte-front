import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 10px;
`;

const appear = keyframes`
  from{
    opacity: 0;
    transform: rotate(270deg);
    border: 5px solid transparent;
  }to{
    opacity: 1;
    transform: rotate(0deg);
    border: 5px solid #0090ff;
  }
`;
export const Circle = styled.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;

  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-weight: 400;
  font-size: 35px;
  border-radius: 50%;

  opacity: 0;
  transform: rotate(270deg);
  border: 5px solid transparent;

  animation: ${appear} 250ms 250ms ease-in-out forwards;
`;

export const CountContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.div`
  word-wrap: break-word;
  font-size: 15px;
`;
