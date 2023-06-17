import axios from 'axios';
import { ICancellationPolicy } from 'src/common/types/CancellationPolicy';
import { IStrapiResponse } from 'src/common/types/StrapiResponse';

export const getCancellationPolicies: () => Promise<IStrapiResponse<ICancellationPolicy>> = async () => {

  const {data} = await axios.get('/strapi/api/cancellation-policies?pagination[pageSize]=100')
  return data;}
