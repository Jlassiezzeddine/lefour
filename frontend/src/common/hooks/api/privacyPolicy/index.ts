import { useQuery } from '@tanstack/react-query';
import { getPrivacyPolicies } from 'src/common/queries/PrivacyPolicies';

export const usePrivacyPolicies = () => {
  const { data } = useQuery(['privacy-policies'], getPrivacyPolicies);

  //TODO Add error boundaries
  return data?.data.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    slug: item.attributes.slug,
    content: item.attributes.content,
  }));
};
