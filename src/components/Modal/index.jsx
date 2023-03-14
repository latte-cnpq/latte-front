import { useRef } from 'react';
import { Container, Content } from './styles';

export default function Modal({ open, setOpen, children }) {
  const background = useRef();

  const handleClose = (e) => {
    if (e.target == background.current) {
      setOpen(false);
    }
  };

  if (open) {
    return (
      <Container ref={background} onClick={handleClose}>
        <Content>{children}</Content>
      </Container>
    );
  }

  return;
}
