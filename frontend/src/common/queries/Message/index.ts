import axios from 'axios';
import { IMessage } from 'src/common/types/Message';
// eslint-disable-next-line no-unused-vars

export const postMessage = async (payload: IMessage) => {
  try {
    const { data: response } = await axios.post('/strapi/api/messages/', {
      data: payload,
    });
    return response;
  } catch (error) {
    console.log('ERROR FROM FNQUERY: ', error);
  }
};
