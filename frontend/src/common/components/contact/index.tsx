import Spacer from '@components/shared/Atoms/Spacer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import { colors } from '../../styles/colors';
import ContactForm from './ContactForm';
import ContactSidebar from './ContactSidebar';
import MapView from './MapView';
import QuoteForm from './QuoteForm';
export type ContactView = 'quote' | 'contact' | 'map' | 'phone';
const ContactTemplate = () => {
  const router = useRouter();
  const renderView = () => {
    switch (true) {
      case (router.query.view as ContactView) === 'contact':
        return <ContactForm />;
      case (router.query.view as ContactView) === 'quote':
        return <QuoteForm />;
      case (router.query.view as ContactView) === 'map':
        return <MapView />;
      default:
        return <ContactForm />;
    }
  };

  return (
    <Container
      sx={{ height: '100%' }}
    >
      <Grid
        container
        spacing={4}
        pt={8}
        sx={{
          height: '100%',
          display: { xs: 'none', md: 'flex' },
        }}
      >
        <Grid item xs={12} md={4}>
          <ContactSidebar />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              height: '100%',
              border: `1px solid ${colors.lightGrey}`,
              borderRadius: 2,
              padding: 2,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {renderView()}
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          height: '100%',
          position: 'relative',
          display: { xs: 'block', md: 'none' },
        }}
      >
        <ContactSidebar />
        {router.query.view && (
          <Box
            py={4}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              backgroundColor: colors.light,
            }}
          >
            {renderView()}
          </Box>
        )}
      </Box>
      <Spacer size={16} />
    </Container>
  );
};

export default ContactTemplate;
