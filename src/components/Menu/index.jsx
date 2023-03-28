import Button from '../Button';
import { Container } from './styles';

export default function Menu({ data, justify = 'flex-start' }) {
  return (
    <Container justify={justify}>
      {data.map((elem, index) => {
        return (
          <Button
            key={index}
            icon={elem.icon}
            onClick={() => elem.fn()}
            selected={elem.active || false}
          >
            {elem.option}
          </Button>
        );
      })}
    </Container>
  );
}
