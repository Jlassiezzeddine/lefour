import { capitalize } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SeoHeader() {
  const router = useRouter();
  const title = capitalize(
    router.asPath.split('/').at(-1)?.split('-').join(' ')!
  );
  return (
    <Head>
      <title>
        {`Le Four Studio ${router.asPath !== '/' ? `| ${title}` : ''}`}{' '}
      </title>
      <meta name="description" content="Le Four Studio" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
