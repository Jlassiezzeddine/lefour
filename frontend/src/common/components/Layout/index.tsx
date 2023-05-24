import CallToAction from '@components/shared/CallToAction';
import Footer from '@components/shared/Footer';
import PageHeader from '@components/shared/Molecules/PageHeader';
import Navigation from '@components/shared/Navigation';
import PageTransition from '@components/shared/PageTransition';

interface IProps {
  children: JSX.Element;
  title: string;
  subtitle?: string;
}
const Layout = ({ children, title, subtitle }: IProps) => {
  return (
    <>
      <PageTransition />
      <Navigation />
      <PageHeader title={title} subtitle={subtitle} />
      {children}
      <CallToAction />
      <Footer />
    </>
  );
};

export default Layout;
