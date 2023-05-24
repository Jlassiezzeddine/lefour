import axios from 'axios';
import { IService } from 'src/common/types/Service';

// eslint-disable-next-line no-unused-vars
export const getServices: (id?: string) => Promise<IService[]> = async (
  id?: string
) => {
  const { data } = await axios.get(
    '/strapi/api/service-categories/' + (id || '') + '?populate=*'
  ).then(res => res.data);
  return data?.map(
    (e: {
      id: string;
      attributes: {
        name: string;
        slug: string;
        description: string;
        content: string;
        services?: {
          data: {
            id: string;
            attributes: {
              name: string;
              slug: string;
              description: string;
              content: string;
            };
          }[];
        };
      };
    }) => ({
      id: e.id,
      name: e.attributes.name,
      slug: e.attributes.slug,
      description: e.attributes.description,
      content: e.attributes.content,
      children: e.attributes.services?.data.map((item) => ({
        id: item.id,
        name: item.attributes.name,
        slug: item.attributes.slug,
        description: item.attributes.description,
        content: item.attributes.content,
      })),
    })
  );
};
