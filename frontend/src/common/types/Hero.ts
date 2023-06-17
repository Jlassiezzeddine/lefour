import { IMedia, IMediaRaw } from './Media';
export type CTA = {
  id: number;
  label: string;
  url: string;
};
export interface IHeroItem {
  title: string;
  description: string;
  location: string | null;
  locationURL: string | null;
  background: IMedia | IMediaRaw;
  cta: CTA[];
}
export interface IHero {
  items: IHeroItem[];
}
