import axios from 'axios';
import { IHero } from 'src/common/types/Hero';
import { IStrapiResponseSingle } from 'src/common/types/StrapiResponseSingle';

// eslint-disable-next-line no-unused-vars
export const getHero: () => Promise<IStrapiResponseSingle<IHero>> = async () => {
  const { data } = await axios.get('/strapi/api/hero?populate=items&populate=items.background&populate=items.cta');
  return data
};
