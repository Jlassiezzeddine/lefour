import axios from 'axios';
import { IStrapiResponse } from 'src/common/types/StrapiResponse';
import { ITermsOfUse } from 'src/common/types/TermOfUse';

export const getTermsOfUse:   () => Promise<IStrapiResponse<ITermsOfUse>> = async () => {

  const {data} = await axios.get('/strapi/api/terms-of-uses?pagination[pageSize]=100')
  return data;
};
