import axios from 'axios';
import { ISocialMedia } from 'src/common/types/SocialMedia';
import { IStrapiResponseSingle } from 'src/common/types/StrapiResponseSingle';

// eslint-disable-next-line no-unused-vars
export const getSocialMedia: () => Promise<IStrapiResponseSingle<ISocialMedia>> = async () => {
  const { data } = await axios.get('/strapi/api/social-media?populate=items');
  return data
};
