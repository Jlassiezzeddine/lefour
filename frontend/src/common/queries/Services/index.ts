import axios from 'axios';
import { IMediaRaw } from 'src/common/types/Media';
import { IStrapiResponse } from 'src/common/types/StrapiResponse';
interface IServiceResponse {
  id: number;
  name: string;
  slug: string;
  slogan: string;
  description: string;
  content: string;
  pricing?: string;
  image: IMediaRaw;
}

// eslint-disable-next-line no-unused-vars
export const getServices: (
  // eslint-disable-next-line no-unused-vars
  slug?: string
) => Promise<IStrapiResponse<IServiceResponse>> = async (slug?: string) => {
  const { data } = await axios.get(
    `/strapi/api/services?${
      slug ? 'filters[slug][$eq]=' + slug + '&' : ''
    }populate=image&sort=id`
  );
  return data;
};
