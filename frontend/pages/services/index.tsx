import Layout from '@components/Layout';
import ServicesSection from '@components/ServicesSection';
import SeoHeader from '@components/shared/SeoHeader';
import type { NextPage } from 'next';

const Services: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="Services">
        <>
          <ServicesSection />
        </>
      </Layout>
    </>
  );
};

export default Services;
