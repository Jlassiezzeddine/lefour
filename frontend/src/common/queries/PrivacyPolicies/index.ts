import axios from 'axios';
import { IPrivacyPolicy } from 'src/common/types/PrivacyPolicy';
import { IStrapiResponse } from 'src/common/types/StrapiResponse';

export const getPrivacyPolicies : () => Promise<IStrapiResponse<IPrivacyPolicy>> = async () => {

  const {data} = await axios.get('/strapi/api/privacy-policies?pagination[pageSize]=100')
  return data;
};
