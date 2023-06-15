import GraphsPage from '@/components/GraphsPage';
import Head from 'next/head';

export default function Grafos() {
  return (
    <>
      <Head>
        <title>Grafos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <GraphsPage />
      </main>
    </>
  );
}
