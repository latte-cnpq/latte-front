import styled from 'styled-components';
import LogoSvg from './logo.svg';
import PlusSvg from './icons/Plus.svg';
import TrashcanSvg from './icons/Trashcan.svg';
import SaveSvg from './icons/Save.svg';
import CancelSvg from './icons/Cancel.svg';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 30px;
  gap: 10px;
  width: 100%;
`;

export const Logo = styled(LogoSvg)`
  width: 170px;
  height: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const GhostContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.elementBackground};
  width: 100%;
  min-height: 200px;
  border-radius: 10px;
`;

export const SidebarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.subtleBackground};
  height: 100%;
  width: 500px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  gap: 30px;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
  padding: 10px;
`;

export const BottomMenuContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const PlusIcon = styled(PlusSvg)`
  width: 13px;
  height: auto;
`;

export const TrashcanIcon = styled(TrashcanSvg)`
  width: 13px;
  height: auto;
`;

export const CancelIcon = styled(CancelSvg)`
  width: 13px;
  height: auto;
`;

export const SaveIcon = styled(SaveSvg)`
  width: 13px;
  height: auto;
`;

export const TableContainer = styled.div`
  width: 100%;
  padding: 5px;
  overflow: auto;
  border-radius: 10px;
`;
