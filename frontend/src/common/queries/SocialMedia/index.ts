import axios from 'axios';
import { ISocialMedia } from 'src/common/types/SocialMedia';
import { IStrapiResponse } from 'src/common/types/StrapiResponse';

// eslint-disable-next-line no-unused-vars
export const getSocialMedia: () => Promise<IStrapiResponse<ISocialMedia>> = async () => {
  const { data } = await axios.get('/strapi/api/social-media?populate=*');
  return data
};
