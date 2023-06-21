import Image from 'next/image';
import Layout from '@components/Layout';
import SectionHeader from '@components/shared/Molecules/SectionHeader';
import SeoHeader from '@components/shared/SeoHeader';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Spacer from '@components/shared/Atoms/Spacer';
import { useService } from 'src/common/hooks/api/service';
import { useRouter } from 'next/router';

const ServicePage = () => {
  const { query } = useRouter();
  const response = useService(query.slug as string);

  if (!response) return null;
  const { name, slogan, description, image, content } = response[0];
  return (
    <>
      <SeoHeader />
      <Layout title={name}>
        <Container>
          <Spacer size={8} />
          <SectionHeader
            slogan={slogan}
            description={description}
          />
          <Spacer size={8} />
          {image && (
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
          )}
          <Spacer size={8} />
          {content && <Typography fontSize={18} >{content}</Typography>}
          <Spacer size={8} />
        </Container>
      </Layout>
    </>
  );
};

export default ServicePage;
