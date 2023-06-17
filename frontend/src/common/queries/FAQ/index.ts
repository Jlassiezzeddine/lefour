import axios from 'axios';
import { IFaq } from 'src/common/types/FAQ';
import { IStrapiResponse } from 'src/common/types/StrapiResponse';

export const getFrequentlyAskedQuestions:  () => Promise<IStrapiResponse<IFaq>> = async () => {

  const {data} = await axios.get('/strapi/api/faqs?pagination[pageSize]=100')
  return data;
};
