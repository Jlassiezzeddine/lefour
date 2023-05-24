import ContactTemplate from '@components/contact';
import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import type { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="Contact">
        <ContactTemplate />
      </Layout>
    </>
  );
};

export default Contact;
