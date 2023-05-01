import InstitutesPage from '@/components/InstitutesPage';
import Head from 'next/head';

const Institutos = () => {
  return (
    <>
      <Head>
        <title>Institutos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <InstitutesPage />
      </main>
    </>
  );
};

export default Institutos;
