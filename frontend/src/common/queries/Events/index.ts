import axios from 'axios';
import { IEvent } from 'src/common/types/Event';

// eslint-disable-next-line no-unused-vars
export const getEvents: (id?: string) => Promise<IEvent[]> = async (
  id?: string
) => {
  const { data } = await axios.get(
    '/strapi/api/events/' + (id || '') + '?populate=*'
  );
  return data.data.map(
    (el: {
      id: string;

      attributes: {
        label: string;
        slug: string;
        description: string;
        venue: string;
        startDate: Date;
        endDate: Date;
        performers: {
          name: string;
          genre: string;
        }[];
        pricing: {
          type: string;
          value: number;
          currency: string;
        }[];
        ticketsExternal: string;
      };
    }) => ({
      id: el.id,
      slug: el.attributes.slug,
      label: el.attributes.label,
      description: el.attributes.description,
      venue: el.attributes.venue,
      startDate: el.attributes.startDate,
      endDate: el.attributes.endDate,
      performers: el.attributes.performers,
      pricing: el.attributes.pricing,
      ticketsExternal: el.attributes.ticketsExternal,
    })
  );
};
