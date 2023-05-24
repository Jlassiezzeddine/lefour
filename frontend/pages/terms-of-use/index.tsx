import Layout from '@components/Layout';
import Spacer from '@components/shared/Atoms/Spacer';
import PageHeader from '@components/shared/Molecules/PageHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import type { NextPage } from 'next';
import Head from 'next/head';
import TermsOfUseContent from './TermsOfUseContent';
import TermsOfUseTableOfContent from './TermsOfUseTableOfContent';

const TermsOfUse: NextPage = () => {
  return (
    <>
      <Head>
        <title>Le Four Studio | Terms Of Use</title>
        <meta name="description" content="Le Four Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Terms Of Use">
        <Container>
          <Spacer size={8} />
          <PageHeader title={'Terms Of Use'} subtitle={''} />
          <Spacer size={16} divider />
          <Grid container>
            <Grid item xs={12} md={8} order={{ xs: 2, md: 1 }}>
              <TermsOfUseContent />
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
              <TermsOfUseTableOfContent />
            </Grid>
          </Grid>
          <Spacer size={8} />
          <Spacer size={8} divider />
        </Container>
      </Layout>
    </>
  );
};

export default TermsOfUse;
