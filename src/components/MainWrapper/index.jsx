import { Container, ContentContainer, SidebarContainer } from './styles';

import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import ArticleIcon from '@mui/icons-material/Article';

import { Dashboard } from '../Dashboard';
import Menu from '../Menu';

import { useRouter } from 'next/router';

export const MainWrapper = ({ children }) => {
  const router = useRouter();

  const topMenuData = [
    {
      option: 'Pesquisadores',
      icon: <PeopleOutlineIcon fontSize="small" />,
      fn: () => {
        router.push('/pesquisadores');
      },
      active: router.pathname === '/pesquisadores' ? true : false,
    },
    {
      option: 'Institutos',
      icon: <SchoolIcon fontSize="small" />,
      fn: () => {
        router.push('/institutos');
      },
      active: router.pathname === '/institutos' ? true : false,
    },
    {
      option: 'Produções',
      icon: <ArticleIcon fontSize="small" />,
      fn: () => {
        router.push('/producoes');
      },
      active: router.pathname === '/producoes' ? true : false,
    },
    {
      option: 'Grafos',
      icon: <AutoGraphIcon fontSize="small" />,
      fn: () => {
        router.push('/grafos');
      },
      active: router.pathname === '/grafos' ? true : false,
    },
    {
      option: 'Configurações',
      icon: <SettingsIcon fontSize="small" />,
      fn: () => {
        router.push('/config');
      },
      active: router.pathname === '/config' ? true : false,
    },
  ];

  return (
    <Container>
      <SidebarContainer>
        <Dashboard />
      </SidebarContainer>
      <ContentContainer>
        <Menu data={topMenuData} />
        {children}
      </ContentContainer>
    </Container>
  );
};
