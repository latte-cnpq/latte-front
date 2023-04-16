import Modal from '../Modal';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import useConfirmationDialog from '@/hooks/useConfirmationDialog';
import { Container, MessageContent, Options, StyledButton, VerticalSeparator } from './styles';

const ConfirmationDialog = () => {
  const { isOpen, setIsOpen, title, message, onConfirm, onCancel, closeConfirmationDialog } =
    useConfirmationDialog();

  const handleOnConfirm = async () => {
    if (onConfirm) {
      await onConfirm();
    }
    closeConfirmationDialog();
  };

  const handleOnCancel = async () => {
    if (onCancel) {
      await onCancel();
    }
    closeConfirmationDialog();
  };

  return (
    <>
      {isOpen && (
        <Modal title={title} open={isOpen} setOpen={setIsOpen}>
          <Container>
            <HelpOutlineIcon
              sx={{
                width: 100,
                height: 100,
              }}
            />
            <MessageContent>{message}</MessageContent>
          </Container>
          <Options>
            <StyledButton confirm onClick={handleOnConfirm}>
              Sim
            </StyledButton>
            <VerticalSeparator />
            <StyledButton onClick={handleOnCancel}>Cancelar</StyledButton>
          </Options>
        </Modal>
      )}
    </>
  );
};

export default ConfirmationDialog;
