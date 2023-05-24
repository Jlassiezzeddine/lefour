import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const Services: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="Services">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          Services Page
        </Typography>
      </Layout>
    </>
  );
};

export default Services;
