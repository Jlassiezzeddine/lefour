import { useQuery } from '@tanstack/react-query';
import { getServiceCategories } from 'src/common/queries/ServiceCategories';
import { getMedia } from 'src/common/utils/getMedia';

export const useServiceCategories = ({slug, all= false}: {all: boolean , slug?: string}) => {
  const { data } = useQuery(['Service', {slug, all}], () => getServiceCategories({slug, all}));

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
      slogan: item.attributes.slogan,
      description: item.attributes.description,
      content: item.attributes.content,
      image: getMedia(item.attributes.image),
    })),
  }));
};
