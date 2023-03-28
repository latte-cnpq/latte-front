import { useRef } from 'react';
import {
  BackgroundContainer,
  Buttons,
  Container,
  Content,
  Header,
  Options,
  TitleContainer,
} from './styles';

import Button from '../Button';

import CloseIcon from '@mui/icons-material/Close';
import Separator from '../Separator';
export default function Modal({
  title,
  open,
  setOpen,
  handleCloseProp,
  children,
  options,
  direction = 'column',
}) {
  const background = useRef();

  const handleClose = () => {
    if (setOpen) {
      setOpen(false);
    } else if (handleCloseProp) {
      handleCloseProp();
    }
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
          <Content direction={direction}>
            {children}
            {options && (
              <Options>
                {options.map((option, index) => {
                  return (
                    <Button
                      key={index}
                      icon={option.icon}
                      onClick={option.fn}
                      selected={option.active}
                      disabled={option.disabled || false}
                    >
                      {option.option}
                    </Button>
                  );
                })}
              </Options>
            )}
          </Content>
        </Container>
      </BackgroundContainer>
    );
  }

  return;
}
