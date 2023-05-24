import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const LivePerformances: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="Live Performances">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          Live Performances Page
        </Typography>
      </Layout>
    </>
  );
};

export default LivePerformances;
