import { useQuery } from '@tanstack/react-query';
import { getCancellationPolicies } from 'src/common/queries/CancellationPolicies';

export const useCancellationPolicies = () => {
  const { data } = useQuery(['cancellation-policies'], getCancellationPolicies);

  //TODO Add error boundaries
  return data?.data.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    slug: item.attributes.slug,
    content: item.attributes.content,
  }));
};
