import { useQuery } from '@tanstack/react-query';
import { getSocialMedia } from 'src/common/queries/SocialMedia';

export const useSocialMedia = () => {
  const { data } = useQuery(['social-media'], getSocialMedia);
  //TODO Add error boundaries
  return data?.data.attributes.items
};
