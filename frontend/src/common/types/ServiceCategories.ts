import { IMedia, IMediaRaw } from "./Media";
import { IService } from "./Service";

export interface IServiceCategories  {
  id: number;
  name: string;
  slug: string;
  description: string;
  content: string;
  pricing?: string;
  image?: IMedia | IMediaRaw;
  services?: IService[];
  hidden: boolean
}
