import { useRef } from 'react';
import { BackgroundContainer, Buttons, Container, Header, TitleContainer } from './styles';
import CloseIcon from '@mui/icons-material/Close';
import Separator from '../Separator';
export default function Modal({ title, open, setOpen, children }) {
  const background = useRef();

  const handleClose = () => {
    setOpen(false);
  };

  if (open) {
    return (
      <BackgroundContainer ref={background}>
        <Container>
          <Header>
            <TitleContainer>{title}</TitleContainer>
            <Buttons>
              <CloseIcon fontSize="small" onClick={handleClose} />
            </Buttons>
          </Header>
          <Separator />
          {children}
        </Container>
      </BackgroundContainer>
    );
  }

  return;
}
