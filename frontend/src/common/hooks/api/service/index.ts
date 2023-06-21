import { useQuery } from '@tanstack/react-query';
import { getServices } from 'src/common/queries/Services';
import { getMedia } from 'src/common/utils/getMedia';

export const useService = (slug?: string) => {
  const { data } = useQuery(['Service', slug], () => getServices(slug));
  console.log('[SERVICE FROM HOOK]', data)

  return data?.data.map((e) => ({
    id: e.id,
    name: e.attributes.name,
    slug: e.attributes.slug,
    description: e.attributes.description,
    content: e.attributes.content,
    slogan: e.attributes.slogan,
    image: getMedia(e.attributes.image),
  })) ;
};
