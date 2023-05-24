import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const VideoEditing: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="Video Editing">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          Editing Page
        </Typography>
      </Layout>
    </>
  );
};

export default VideoEditing;
