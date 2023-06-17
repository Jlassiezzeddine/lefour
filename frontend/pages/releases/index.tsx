import Layout from '@components/Layout';
import ReleasesSection from '@components/ReleasesSection';
import Spacer from '@components/shared/Atoms/Spacer';
import SeoHeader from '@components/shared/SeoHeader';
import type { NextPage } from 'next';

const Releases: NextPage = () => {


  return (
    <>
      <SeoHeader />
      <Layout title="Releases">
        <>
          <Spacer size={8} />
          <ReleasesSection />
        </>
      </Layout>
    </>
  );
};

export default Releases;
