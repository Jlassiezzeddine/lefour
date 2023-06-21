import Image from 'next/image';
import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import { Box, Container, Grid, Typography } from '@mui/material';
import Spacer from '@components/shared/Atoms/Spacer';
import { useRouter } from 'next/router';
import ServiceCard from '@components/shared/Molecules/ServiceCard';
import { useServiceCategories } from 'src/common/hooks/api/serviceCategories';

const Service = () => {
  const { query } = useRouter();
  const response = useServiceCategories({slug: query.serviceCategory as string, all: true});

  if (!response) return null;
  const { name, description, image, services } = response[0];
  return (
    <>
      <SeoHeader />
      <Layout title={name}>
        <Container>
          <Spacer size={8} />
          <Box
            sx={{
              width: '100%',
              height: 'fit-content',
              minHeight: '420px',
              position: 'relative',
            }}
          >
            <Image
              src={image.url}
              alt={image.alt}
              quality={100}
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Spacer size={6} />
          <Typography fontWeight={700}>Description</Typography>
          <Spacer size={2} />
          <Typography fontSize={18}>{description}</Typography>
          <Spacer size={6} />
          <Grid container spacing={4}>
            {services &&
              services.length > 0 &&
              services.map((el) => {
                const service = {
                  label: el.name,
                  path: `/services/${query.serviceCategory}/${el.slug}`,
                  slug: el.slug,
                  description: el.description,
                };
                return (
                  <Grid key={el.slug} item xs={12} md={6}>
                    <ServiceCard service={service} />
                  </Grid>
                );
              })}
          </Grid>
          <Spacer size={16} />
        </Container>
      </Layout>
    </>
  );
};

export default Service;
