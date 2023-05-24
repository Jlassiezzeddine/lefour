import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const Video: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="Video Services">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          Video Page
        </Typography>
      </Layout>
    </>
  );
};

export default Video;
