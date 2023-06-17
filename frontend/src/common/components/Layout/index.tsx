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
    {/* <Box sx={{
      position: 'fixed',
      pointerEvents: 'none',
      top: 0,
      left: 0,
      zIndex: 2,
      height: "100%",
      width:'100%',
      border: `16px solid ${colors.light}`
    }} /> */}
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
