import axios from 'axios';
import { IExternal } from 'src/common/types/External';
import { IStrapiResponseSingle } from 'src/common/types/StrapiResponseSingle';

// eslint-disable-next-line no-unused-vars
export const getGlobalSettings: () => Promise<IStrapiResponseSingle<IExternal>> = async () => {
  const { data } = await axios.get('/strapi/api/global');
  return data
};
