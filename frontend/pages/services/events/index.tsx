import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const Events: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="Events">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          Events Page
        </Typography>
      </Layout>
    </>
  );
};

export default Events;
