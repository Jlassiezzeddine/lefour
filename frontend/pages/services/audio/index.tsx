import Layout from '@components/Layout';
import SeoHeader from '@components/shared/SeoHeader';
import { Typography } from '@mui/material';
import axios from 'axios';
import { IService } from 'src/common/types/Service';

interface IProps {
  service: IService;
}

const Audio = ({ service }: IProps) => {
    const {name, description} = service
  return (
    <>
      <SeoHeader />
      <Layout title={name}>
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
      </Layout>
    </>
  );
};

export default Audio;

export async function getServerSideProps() {
  const service = await axios
    .get(
      `http://backend:1337/api/service-categories?filters[slug][$eq]=audio&populate=*`
    )
    .then((res) => res.data.data[0])
    .then((res) => ({
      id: res.id,
      ...res.attributes,
    }));
  return {
    props: { service },
  };
}
