import Head from 'next/head';

import ProductionPage from '@/components/ProductionPage';

export default function Producoes() {
  return (
    <>
      <Head>
        <title>Produções</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProductionPage />
      </main>
    </>
  );
}
