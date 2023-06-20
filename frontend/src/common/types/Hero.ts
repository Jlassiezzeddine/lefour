import { IMedia } from './Media';
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
  background: IMedia ;
  backgroundMobile: IMedia ;
  cta: CTA[];
}
export interface IHero {
  items: IHeroItem[];
}
