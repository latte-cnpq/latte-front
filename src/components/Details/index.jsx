import Separator from '../Separator';
import { Container } from './styles';

export const Details = ({ title, content }) => {
  return (
    <Container>
      {title}
      <Separator />
      {content}
    </Container>
  );
};
