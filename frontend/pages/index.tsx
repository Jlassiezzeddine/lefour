import AboutSection from '@components/AboutSection';
import EventsList from '@components/Events/EventsList';
import Hero from '@components/Hero';
import Layout from '@components/Layout';
import ReleasesSection from '@components/ReleasesSection';
import ServicesSection from '@components/ServicesSection';
import SeoHeader from '@components/shared/SeoHeader';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="Home">
        <>
          <Hero />
          <AboutSection />
          <ReleasesSection limit={3} />
          
          <ServicesSection  />
          <EventsList />
        </>
      </Layout>
    </>
  );
};

export default Home;
