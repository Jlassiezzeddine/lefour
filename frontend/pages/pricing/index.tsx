import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const Pricing: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="Pricing">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          Pricing Page
        </Typography>
      </Layout>
    </>
  );
};

export default Pricing;
