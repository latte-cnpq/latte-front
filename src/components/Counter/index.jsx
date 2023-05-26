import { Circle, Container, TextContainer, Title, CountContainer } from './styles';
import { CountUp } from 'use-count-up';

const Counter = ({ title, count }) => {
  return (
    <Container>
      <Circle>
        <CountContainer>
          <CountUp isCounting end={count} duration={2} start={0} />
        </CountContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Title>Cadastrados</Title>
        </TextContainer>
      </Circle>
    </Container>
  );
};

export default Counter;
