import { Container, ContentContainer, SidebarContainer } from './styles';

import SettingsIcon from '@mui/icons-material/Settings';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SchoolIcon from '@mui/icons-material/School';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

import { Dashboard } from '../Dashboard';
import TopMenu from '../TopMenu';

const topMenuData = [
  {
    option: 'Pesquisadores',
    icon: <PeopleOutlineIcon fontSize="small" />,
    href: '/pesquisadores',
  },
  {
    option: 'Institutos',
    icon: <SchoolIcon fontSize="small" />,
    href: '/institutos',
  },
  {
    option: 'Grafos',
    icon: <AutoGraphIcon fontSize="small" />,
    href: '/grafos',
  },
  {
    option: 'Configurações',
    icon: <SettingsIcon fontSize="small" />,
    href: '/config',
  },
];

export const MainWrapper = ({ children }) => {
  return (
    <Container>
      <SidebarContainer>
        <Dashboard />
      </SidebarContainer>
      <ContentContainer>
        <TopMenu data={topMenuData} />
        {children}
      </ContentContainer>
    </Container>
  );
};
