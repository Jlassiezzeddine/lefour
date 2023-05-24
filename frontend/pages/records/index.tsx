import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const Records: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="Records">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          Records Page
        </Typography>
      </Layout>
    </>
  );
};

export default Records;
