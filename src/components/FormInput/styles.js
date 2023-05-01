import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from{
    opacity: 0;
    transform: translateY(-100%);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;

  span {
    font-size: 0.8em;
    color: ${({ theme }) => theme.colors.error};
    opacity: 0;
    transform-origin: left;
    animation: ${appear} 200ms ease-in-out forwards;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;
