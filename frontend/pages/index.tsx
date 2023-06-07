import AboutSection from '@components/AboutSection';
import EventsList from '@components/Events/EventsList';
import Hero from '@components/Hero';
import Layout from '@components/Layout';
import ServicesSection from '@components/ServicesSection';
import Spacer from '@components/shared/Atoms/Spacer';
import SeoHeader from '@components/shared/SeoHeader';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="Home">
        <>
          <Hero />
          <Spacer size={16} />
          <AboutSection />
          <Spacer size={16} />
          <ServicesSection />
          <Spacer size={16} />
          <EventsList />
          <Spacer size={16} />
        </>
      </Layout>
    </>
  );
};

export default Home;
