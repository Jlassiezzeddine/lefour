import Layout from '@components/Layout';
import Spacer from '@components/shared/Atoms/Spacer';
import SeoHeader from '@components/shared/SeoHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import type { NextPage } from 'next';
import CancellationContent from './CancellationContent';
import CancellationTableOfContent from './CancellationTableOfContent';

const Cancellation: NextPage = () => {
  return (
    <>
      <SeoHeader />
      <Layout title="Cancellation Policy">
        <Container>
          <Spacer size={8} />
          <Grid container>
            <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
              <CancellationContent />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              order={{ xs: 1, md: 2 }}
              container
              direction="row"
              alignItems="flex-start"
              justifyContent="flex-end"
            >
              <CancellationTableOfContent />
            </Grid>
          </Grid>
          <Spacer size={8} />
        </Container>
      </Layout>
    </>
  );
};

export default Cancellation;
