import Head from 'next/head';
import ProductionsPage from '@/components/ProductionsPage';

export const getServerSideProps = async (context) => {
  const year = context.query.year || '';
  const researcher = context.query.researcher || '';
  const institute = context.query.institute || '';

  return {
    props: {
      year,
      researcher,
      institute,
    },
  };
};

export default function Producoes({ year, researcher, institute }) {
  return (
    <>
      <Head>
        <title>Produções</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ProductionsPage year={year} researcher={researcher} institute={institute} />
      </main>
    </>
  );
}
