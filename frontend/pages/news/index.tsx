import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const News: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="News">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          News Page
        </Typography>
      </Layout>
    </>
  );
};

export default News;
