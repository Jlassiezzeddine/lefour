import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import { Container, Typography } from '@mui/material';
import axios from 'axios';
import { IService } from 'src/common/types/Service';

interface IProps {
  service: IService;
}

const Service = ({ service }: IProps) => {
  const { name, description } = service;
  return (
    <>
      <SeoHeader />
      <Layout title={name}>
        <Container>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
            }}
          >
            {description}
          </Typography>
        </Container>
      </Layout>
    </>
  );
};

export default Service;

export async function getServerSideProps(context: any) {
  const response = await axios.get(
    `http://backend:1337/api/services?filters[slug][$eq]=${context.query.slug}&populate=*`
  );
  const { attributes } = response.data.data[0];

  return {
    props: {
      service: {
        ...attributes,
      },
    },
  };
}
