import axios from 'axios';
import { IService } from 'src/common/types/Service';
import { IStrapiResponse } from 'src/common/types/StrapiResponse';

type ServiceCategoriesResponse = IStrapiResponse<{
  id: number;
  name: string;
  slug: string;
  description: string;
  content: string;
  pricing?: string;
  image: any;
  services?: IStrapiResponse<IService>;
  hidden: boolean;
}>;
// eslint-disable-next-line no-unused-vars
export const getServiceCategories: (
  // eslint-disable-next-line no-unused-vars
  all?: boolean
) => Promise<ServiceCategoriesResponse> = async (all = false) => {
  const { data } = await axios.get(
    `/strapi/api/service-categories?${
      all ? '' : 'filters[hidden][$eq]=false'
    }&populate=services&populate=image&populate=services.image&sort=id`
  );
  return data;
};
