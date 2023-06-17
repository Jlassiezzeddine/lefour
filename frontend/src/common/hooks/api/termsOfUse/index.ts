import { useQuery } from '@tanstack/react-query';
import { getTermsOfUse } from 'src/common/queries/TermsOfUse';

export const useTermsOfUse = () => {
  const { data } = useQuery(['terms-of-use'], getTermsOfUse);

  //TODO Add error boundaries
  return data?.data.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    slug: item.attributes.slug,
    content: item.attributes.content,
  }));
};
