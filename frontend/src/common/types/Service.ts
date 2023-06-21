import { IMedia } from "./Media";

export interface IService  {
  name: string;
  slug: string;
  slogan: string;
  description: string;
  content: string;
  pricing?: string;
  image : IMedia
}
