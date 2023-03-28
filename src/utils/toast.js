import { toast } from 'react-hot-toast';

export const customToast = (title, theme) => {
  toast(title, {
    duration: 1000,
    position: 'top-right',

    style: {
      background: theme.colors.solidBackground,
      color: theme.colors.highContrastText,
      padding: '0px',
    },
  });
};
