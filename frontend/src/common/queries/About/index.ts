import axios from 'axios';
import { IMediaRaw } from 'src/common/types/Media';
import { IStrapiResponseSingle } from 'src/common/types/StrapiResponseSingle';

// eslint-disable-next-line no-unused-vars
interface IAboutResponse {
  title: string;
  slogan: string;
  description: string;
  content: string;
  media: IMediaRaw;
}
export const getAbout: () => Promise<
  IStrapiResponseSingle<IAboutResponse>
> = async () => {
  const { data } = await axios.get('/strapi/api/about?populate=media');
  return data;
};
