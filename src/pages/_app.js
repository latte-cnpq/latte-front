import GlobalStyle from '@/styles/global';
import theme from '@/styles/themes/dark';
import { ThemeProvider } from 'styled-components';
import { MainWrapper } from '@/components/MainWrapper';
import { QueryClientProvider } from 'react-query';
import queryCLient from '@/api/queryClient';
import { Toaster } from 'react-hot-toast';
import { ConfirmationDialogProvider } from '@/context/ConfirmationDialogContext';
import ConfirmationDialog from '@/components/ConfirmationDialog';
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname == '/') {
    return (
      <>
        <QueryClientProvider client={queryCLient}>
          <ThemeProvider theme={theme}>
            <ConfirmationDialogProvider>
              <GlobalStyle />
              <Toaster />
              <ConfirmationDialog />
              <Component {...pageProps} />
            </ConfirmationDialogProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </>
    );
  }

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
