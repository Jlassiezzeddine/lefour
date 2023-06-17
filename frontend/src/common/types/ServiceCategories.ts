import { IMedia, IMediaRaw } from "./Media";
import { IService } from "./Service";

export interface IServiceCategories  {
  name: string;
  slug: string;
  description: string;
  content: string;
  pricing?: string;
  image?: IMedia | IMediaRaw;
  services?: IService[];
}
