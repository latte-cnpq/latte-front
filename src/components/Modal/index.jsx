import { useRef } from 'react';
import { BackgroundContainer, Buttons, Container, Content, Header, TitleContainer } from './styles';

import CloseIcon from '@mui/icons-material/Close';
import Separator from '../Separator';
export default function Modal({ title, open, setOpen, children, direction, handleCloseProp }) {
  const background = useRef();

  const handleClose = () => {
    if (setOpen) {
      setOpen(false);
    } else if (handleCloseProp) {
      handleCloseProp();
    }
  };

  return (
    <>
      {open && (
        <BackgroundContainer ref={background}>
          <Container>
            <Header>
              <TitleContainer>{title}</TitleContainer>
              <Buttons>
                <CloseIcon fontSize="small" onClick={handleClose} />
              </Buttons>
            </Header>
            <Separator />
            <Content direction={direction}>{children}</Content>
          </Container>
        </BackgroundContainer>
      )}
    </>
  );
}
