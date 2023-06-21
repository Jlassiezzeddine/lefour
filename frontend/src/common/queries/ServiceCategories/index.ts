import axios from 'axios';
import { IMediaRaw } from 'src/common/types/Media';
import { IStrapiResponse } from 'src/common/types/StrapiResponse';
interface IServiceResponse {
  name: string;
  slug: string;
  slogan: string;
  description: string;
  content: string;
  pricing?: string;
  image: IMediaRaw;
}
type ServiceCategoriesResponse = IStrapiResponse<{
  id: number;
  name: string;
  slug: string;
  description: string;
  content: string;
  pricing?: string;
  image: any;
  services?: IStrapiResponse<IServiceResponse>;
  hidden: boolean;
}>;
// eslint-disable-next-line no-unused-vars
export const getServiceCategories: ({
  // eslint-disable-next-line no-unused-vars
  slug,
  // eslint-disable-next-line no-unused-vars
  all,
}: {
  slug?: string;
  all?: boolean;
}) => Promise<ServiceCategoriesResponse> = async ({ slug, all = false }) => {
  const { data } = await axios.get(
    `/strapi/api/service-categories?${
      slug ? 'filters[slug][$eq]=' + slug : ''
    }${
      all ? '' : '&filters[hidden][$eq]=false'
    }&populate=services&populate=image&populate=services.image&sort=id`
  );
  return data;
};
