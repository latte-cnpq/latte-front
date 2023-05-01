import { useContext } from 'react';
import { ConfirmationDialogContext } from '@/context/ConfirmationDialogContext';

const useConfirmationDialog = () => useContext(ConfirmationDialogContext);

export default useConfirmationDialog;
