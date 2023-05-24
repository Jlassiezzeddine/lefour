import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import { Typography } from '@mui/material';
import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="About">
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          About Page
        </Typography>
      </Layout>
    </>
  );
};

export default About;
