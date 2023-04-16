import ResearchersPage from '@/components/ResearchersPage';
import Head from 'next/head';

const Pesquisadores = () => {
  return (
    <>
      <Head>
        <title>Pesquisadores</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ResearchersPage />
      </main>
    </>
  );
};

export default Pesquisadores;
