import { useQuery } from '@tanstack/react-query';
import { getAbout } from 'src/common/queries/About';
import { getMedia } from 'src/common/utils/getMedia';

export const useAbout = () => {
  const { data } = useQuery(['About'], getAbout);
  return {
    title: data?.data.attributes.title,
    slogan: data?.data.attributes.slogan,
    description: data?.data.attributes.description,
    content: data?.data.attributes.content,
    media: data?.data.attributes.media
      ? getMedia(data?.data.attributes.media)
      : null,
  };
};
