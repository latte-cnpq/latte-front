import styled from 'styled-components';
import LogoSvg from '../../../public/logo.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  gap: 10px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  gap: 30px;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const Logo = styled(LogoSvg)`
  width: 170px;
  height: auto;
  cursor: pointer;
`;

export const GhostContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.elementBackground};
  width: 100%;
  padding: 10px;
  border-radius: 10px;

  display: flex;
`;
