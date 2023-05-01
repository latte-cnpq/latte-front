import styled, { keyframes } from 'styled-components';

const appear = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

export const BackgroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: ${appear} 200ms forwards ease-in-out;
  z-index: 1;
`;

const appearFromAbove = keyframes`
  from{
    opacity: 0;
    transform: scale(0);
  }
  to{
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.subtleBackground};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transform: scale(0);
  opacity: 0;
  animation: ${appearFromAbove} 250ms forwards ease-in-out;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  gap: 10px;
`;

export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.highContrastText};

    :hover {
      fill: ${({ theme }) => theme.colors.hoveredSolidBackground};
    }
  }
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;
