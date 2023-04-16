import GlobalStyle from '@/styles/global';
import theme from '@/styles/themes/dark';
import { ThemeProvider } from 'styled-components';
import { MainWrapper } from '@/components/MainWrapper';
import { QueryClientProvider } from 'react-query';
import queryCLient from '@/api/queryClient';
import { Toaster } from 'react-hot-toast';
import { ConfirmationDialogProvider } from '@/context/ConfirmationDialogContext';
import ConfirmationDialog from '@/components/ConfirmationDialog';

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryCLient}>
      <ThemeProvider theme={theme}>
        <ConfirmationDialogProvider>
          <GlobalStyle />
          <Toaster />
          <ConfirmationDialog />
          <MainWrapper>
            <Component {...pageProps} />
          </MainWrapper>
        </ConfirmationDialogProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
