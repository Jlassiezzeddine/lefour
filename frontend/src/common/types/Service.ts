import { IMedia, IMediaRaw } from "./Media";

export interface IService  {
  name: string;
  slug: string;
  description: string;
  content: string;
  pricing?: string;
  image? : IMediaRaw | IMedia
}
