import axios from 'axios';
import { IExternal } from 'src/common/types/External';
import { IStrapiResponse } from 'src/common/types/StrapiResponse';

// eslint-disable-next-line no-unused-vars
export const getGlobalSettings: () => Promise<IStrapiResponse<IExternal>> = async () => {
  const { data } = await axios.get('/strapi/api/global');
  return data
};
