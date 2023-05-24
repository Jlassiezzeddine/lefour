import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const Reviews: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="Reviews">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          Reviews Page
        </Typography>
      </Layout>
    </>
  );
};

export default Reviews;
