import { useRouter } from 'next/router';
import ProductionsChart from '../ProductionsChart';
import {
  Container,
  ContentContainer,
  FourthDashboard,
  InnerContainer,
  Logo,
  SearchContainer,
  SecondContainer,
  SecondDashboard,
  ThirdDashboard,
  TopMenuContainer,
} from './styles';

import ArticleIcon from '@mui/icons-material/Article';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';

import Counter from '../Counter';
import Menu from '../Menu';
import ProductionsDoughnut from '../ProductionsDoughnut';

import { useState } from 'react';
import { useQuery } from 'react-query';
import * as dataApi from '../../api/data';
import SearchBar from '../SearchBar';
import { getElementAtEvent } from 'react-chartjs-2';

const DashboardPage = () => {
  const router = useRouter();

  const [searchData, setSearchData] = useState({
    startYear: '',
    endYear: '',
    instituteName: '',
    researcherName: '',
  });

  const { data: productionsData, refetch: refetchCountByYear } = useQuery('getCountByYear', () =>
    dataApi.getCountByFilter(
      searchData.startYear,
      searchData.endYear,
      searchData.researcherName,
      searchData.instituteName,
    ),
  );

  const { data: prodRecords } = useQuery('getProdRecords', dataApi.getProductionRecords);

  const { data: records } = useQuery('getRecords', dataApi.getRecords);

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

  const searchParams = [
    {
      queryField: 'startYear',
      placeholder: 'Data Inícial',
      type: 'input',
    },
    {
      queryField: 'endYear',
      placeholder: 'Data Final',
      type: 'input',
    },
    {
      queryField: 'instituteName',
      placeholder: 'Instituto',
      type: 'input',
    },
    {
      queryField: 'researcherName',
      placeholder: 'Pesquisador',
      type: 'input',
    },
  ];

  const onProductionChartClick = (event, chartRef, data) => {
    const element = getElementAtEvent(chartRef.current, event);
    if (element.length) {
      router.push(
        `/producoes` +
          `?year=${data.labels[element[0].index]}` +
          `&researcher=${searchData.researcherName}` +
          `&institute=${searchData.instituteName}`,
      );
    }
  };

  return (
    <Container>
      <TopMenuContainer>
        <Logo />
        <Menu data={topMenuData} justify="flex-end" />
      </TopMenuContainer>
      {productionsData && prodRecords && records && (
        <ContentContainer>
          <SearchContainer>
            <SearchBar
              params={searchParams}
              data={searchData}
              setData={setSearchData}
              onClick={() => refetchCountByYear()}
            />
          </SearchContainer>
          <InnerContainer>
            <SecondDashboard>
              {productionsData && (
                <ProductionsChart rawData={productionsData} onClick={onProductionChartClick} />
              )}
            </SecondDashboard>
            <SecondContainer>
              <ThirdDashboard>
                {prodRecords && <ProductionsDoughnut rawData={prodRecords} />}
              </ThirdDashboard>
              <FourthDashboard>
                {records && (
                  <>
                    <Counter title={'Pesquisadores'} count={records.totalResearchers} />
                    <Counter title={'Institutos'} count={records.totalInstitutes} />
                  </>
                )}
              </FourthDashboard>
            </SecondContainer>
          </InnerContainer>
        </ContentContainer>
      )}
    </Container>
  );
};

export default DashboardPage;
