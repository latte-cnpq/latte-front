import Separator from '../Separator';
import { Container, Content, GhostContainer, Header, Logo } from './styles';

import Link from 'next/link';
import { useQuery } from 'react-query';
import { getCountByYear, getProductionRecords, getRecords } from '../../api/data';
import Counter from '../Counter';
import ProductionsChart from '../ProductionsChart';
import ProductionsDoughnut from '../ProductionsDoughnut';

export const Dashboard = () => {
  const { data: productionsData } = useQuery('getCountByYear', getCountByYear);

  const { data: prodRecords } = useQuery('getProdRecords', getProductionRecords);

  const { data: records } = useQuery('getRecords', getRecords);

  return (
    <Container>
      <Header>
        <Link href="/">
          <Logo />
        </Link>
        <Separator />
      </Header>
      <Content>
        <GhostContainer>
          {records && (
            <>
              <Counter title={'Pesquisadores'} count={records.totalResearchers} />
              <Counter title={'Institutos'} count={records.totalInstitutes} />
            </>
          )}
        </GhostContainer>
        <GhostContainer>
          {productionsData && <ProductionsChart rawData={productionsData} onClick={() => {}} />}
        </GhostContainer>
        <GhostContainer>
          {prodRecords && <ProductionsDoughnut rawData={prodRecords} />}
        </GhostContainer>
      </Content>
    </Container>
  );
};
