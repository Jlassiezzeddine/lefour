import axios from 'axios';
import { IContact } from 'src/common/types/Contact';
import { IStrapiResponseSingle } from 'src/common/types/StrapiResponseSingle';

// eslint-disable-next-line no-unused-vars
export const getContact: () => Promise<IStrapiResponseSingle<IContact>> = async () => {
  const { data } = await axios.get('/strapi/api/contact');
  return data
};
