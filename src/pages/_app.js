import GlobalStyle from '@/styles/global';
import theme from '@/styles/themes/dark';
import { ThemeProvider } from 'styled-components';
import { MainWrapper } from '@/components/MainWrapper';
import { QueryClientProvider } from 'react-query';
import queryCLient from '@/api/queryClient';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryCLient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Toaster />
        <MainWrapper>
          <Component {...pageProps} />
        </MainWrapper>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
