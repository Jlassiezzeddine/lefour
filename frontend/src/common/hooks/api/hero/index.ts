import { useQuery } from '@tanstack/react-query';
import { getHero } from 'src/common/queries/Hero';
import { getMedia } from 'src/common/utils/getMedia';

export const useHero = () => {
    const {data} = useQuery(['hero'], getHero);
  return data?.data.attributes.items.map((el) => ({
    title: el.title,
    description: el.description,
    location: el.location,
    locationURL:el.locationURL,
    background: getMedia(el.background),
    backgroundMobile: getMedia(el.backgroundMobile),
    cta: el.cta
  }))
};
