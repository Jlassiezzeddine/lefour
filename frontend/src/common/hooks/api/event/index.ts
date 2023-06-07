import { useQuery } from '@tanstack/react-query';
import { getEvents } from 'src/common/queries/Events';

export const useEvent = (id?: string) => {
  return useQuery(['event', id], () => getEvents(id));
};
