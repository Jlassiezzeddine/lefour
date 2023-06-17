import { useQuery } from '@tanstack/react-query';
import { getReleases } from 'src/common/queries/Releases';
import { IRelease } from 'src/common/types/Release';
import { getMedia } from 'src/common/utils/getMedia';

// eslint-disable-next-line no-unused-vars
export const useRelease: (slug?: string) => IRelease[] = (slug?: string) => {
  const { data } = useQuery(['Release', slug], () => getReleases(slug));

  return (
    data?.data.map((e) => ({
      title: e.attributes.title,
      album: e.attributes.album,
      label: e.attributes.label,
      slug: e.attributes.slug,
      genre: e.attributes.genre,
      cover: getMedia(e.attributes.cover),
      artist: e.attributes.artist,
      channels: e.attributes.channels,
      releaseDate: e.attributes.releaseDate,
      preview: getMedia(e.attributes.preview),
    })) || []
  );
};
