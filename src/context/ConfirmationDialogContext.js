import { createContext, useState } from 'react';

export const ConfirmationDialogContext = createContext();

export const ConfirmationDialogProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [onConfirm, setOnConfirm] = useState(() => () => {});
  const [onCancel, setOnCancel] = useState(() => () => {});

  const openConfirmationDialog = (newTitle, newMessage, newOnConfirm, newOnCancel) => {
    setIsOpen(true);
    setTitle(newTitle);
    setMessage(newMessage);
    setOnConfirm(() => newOnConfirm);
    setOnCancel(() => newOnCancel);
  };

  const closeConfirmationDialog = () => {
    setIsOpen(false);
    setTitle('');
    setMessage('');
    setOnConfirm(() => () => {});
    setOnCancel(() => () => {});
  };

  const value = {
    isOpen,
    setIsOpen,
    title,
    message,
    onConfirm,
    onCancel,
    openConfirmationDialog,
    closeConfirmationDialog,
  };

  return (
    <ConfirmationDialogContext.Provider value={value}>
      {children}
    </ConfirmationDialogContext.Provider>
  );
};
