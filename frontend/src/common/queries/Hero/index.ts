import axios from 'axios';
import { CTA } from 'src/common/types/Hero';
import { IMediaRaw } from 'src/common/types/Media';
import { IStrapiResponseSingle } from 'src/common/types/StrapiResponseSingle';

interface IHeroResponse {
  items: {
    title: string;
  description: string;
  location: string | null;
  locationURL: string | null;
  background: IMediaRaw ;
  backgroundMobile: IMediaRaw ;
  cta: CTA[];
  }[]
}
// eslint-disable-next-line no-unused-vars
export const getHero: () => Promise<IStrapiResponseSingle<IHeroResponse>> = async () => {
  const { data } = await axios.get('/strapi/api/hero?populate=items&populate=items.background&populate=items.backgroundMobile&populate=items.cta');
  return data
};
