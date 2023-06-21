import Layout from '@components/Layout';
import ReleasesSection from '@components/ReleasesSection';
import SeoHeader from '@components/shared/SeoHeader';
import type { NextPage } from 'next';

const Releases: NextPage = () => {


  return (
    <>
      <SeoHeader />
      <Layout title="Releases">
        <>
          <ReleasesSection />
        </>
      </Layout>
    </>
  );
};

export default Releases;
