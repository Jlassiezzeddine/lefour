import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const VideoShooting: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="Video Shooting">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          Shooting Page
        </Typography>
      </Layout>
    </>
  );
};

export default VideoShooting;
