import styled from 'styled-components';
import UserSvg from './icons/User.svg';
import ConfigSvg from './icons/Config.svg';
import GraphSvg from './icons/Graph.svg';
import InstituteSvg from './icons/Institute.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
`;

export const UserIcon = styled(UserSvg)`
  width: 20px;
  height: auto;
`;

export const ConfigIcon = styled(ConfigSvg)`
  width: 20px;
  height: auto;
`;

export const GraphIcon = styled(GraphSvg)`
  width: 20px;
  height: auto;
`;

export const InstituteIcon = styled(InstituteSvg)`
  width: 20px;
  height: auto;
`;
