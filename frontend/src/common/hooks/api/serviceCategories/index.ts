import { useQuery } from '@tanstack/react-query';
import { getServiceCategories } from 'src/common/queries/ServiceCategories';
import { IMediaRaw } from 'src/common/types/Media';
import { getMedia } from 'src/common/utils/getMedia';

export const useServiceCategories = (all= false) => {
  const { data } = useQuery(['Service', all], () => getServiceCategories(all));

  return data?.data.map((e) => ({
    id: e.id,
    name: e.attributes.name,
    slug: e.attributes.slug,
    description: e.attributes.description,
    content: e.attributes.content,
    image: getMedia(e.attributes.image),
    hidden: e.attributes.hidden,
    services: e.attributes.services?.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      slug: item.attributes.slug,
      description: item.attributes.description,
      content: item.attributes.content,
      image: getMedia(item.attributes.image as IMediaRaw),
    })),
  }));
};
