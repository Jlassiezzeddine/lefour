import axios from 'axios';
import { IService } from 'src/common/types/Service';
import { IStrapiResponse } from 'src/common/types/StrapiResponse';

type ServiceCategoriesResponse = IStrapiResponse<{
  name: string;
  slug: string;
  description: string;
  content: string;
  pricing?: string;
  image: any;
  services?: IStrapiResponse<IService>;
}>;
// eslint-disable-next-line no-unused-vars
export const getServices: (
  // eslint-disable-next-line no-unused-vars
  slug?: string
) => Promise<ServiceCategoriesResponse> = async (slug?: string) => {
  const { data } = await axios.get(
    `/strapi/api/service-categories?${
      slug ? 'filters[slug][$eq]=' + slug : ''
    }&populate=services&populate=image&populate=services.image&sort=id`
  );
  return data;
};
