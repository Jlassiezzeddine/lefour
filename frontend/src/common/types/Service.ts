export interface IService {
  name: string;
  slug: string;
  description: string;
  pricing?: string;
  children?: IService[];
}
