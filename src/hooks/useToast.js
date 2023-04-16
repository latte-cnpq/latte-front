import { toast } from 'react-hot-toast';
import { useTheme } from 'styled-components';

export const useToast = () => {
  const theme = useTheme();

  const successToast = (message) => {
    toast(message, {
      duration: 2000,
      position: 'bottom-right',

      style: {
        background: theme.colors.success,
        color: theme.colors.highContrastText,
        padding: '5px',
      },
    });
  };

  const errorToast = (message) => {
    toast(message, {
      duration: 2000,
      position: 'bottom-right',

      style: {
        background: theme.colors.error,
        color: theme.colors.highContrastText,
        padding: '5px',
      },
    });
  };

  return { successToast, errorToast };
};
