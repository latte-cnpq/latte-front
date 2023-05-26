import styled, { keyframes } from 'styled-components';
import LogoSvg from '../../../public/logo.svg';

const appear = keyframes`
  from {
    opacity: 0;
  }to{
    opacity: 1;
  }
`;

export const Logo = styled(LogoSvg)`
  width: 170px;
  height: auto;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 10px;

  align-items: center;
  justify-content: flex-start;

  opacity: 0;
  animation: ${appear} 250ms ease-in-out forwards;
`;

export const TopMenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-bottom: 100px;
`;

export const SearchContainer = styled.div``;

export const InnerContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  border-radius: 10px;
`;

export const SecondContainer = styled.div`
  display: flex;

  height: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 10px;
  border-radius: 10px;
  flex-direction: column;
`;

export const FirstDashboard = styled.div`
  border-radius: 10px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SecondDashboard = styled.div`
  width: 1000px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.elementBackground};
  border-radius: 10px;
  padding: 10px;
`;

export const ThirdDashboard = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.elementBackground};
  border-radius: 10px;
  padding: 20px;
`;

export const FourthDashboard = styled.div`
  width: 400px;
  background-color: ${({ theme }) => theme.colors.elementBackground};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;
`;
