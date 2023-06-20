import axios from 'axios';
import { IMediaRaw } from 'src/common/types/Media';
import { Artist, Channel, ReleaseDate } from 'src/common/types/Release';
import { IStrapiResponse } from 'src/common/types/StrapiResponse';

type ReleasesResponse = IStrapiResponse<{
  title: string;
  album: string;
  label: string;
  genre: string;
  slug: string;
  cover: IMediaRaw;
  preview: IMediaRaw;
  artist: Artist[];
  channels: Channel[];
  releaseDate: ReleaseDate;
}>;
// eslint-disable-next-line no-unused-vars
export const getReleases: (
  // eslint-disable-next-line no-unused-vars
  slug?: string
) => Promise<ReleasesResponse> = async (slug?: string) => {
  const { data } = await axios.get(
    `/strapi/api/releases?${
      slug ? 'filters[slug][$eq]=' + slug : ''
    }populate=*&sort=releaseDate.date:desc`
  );
  return data;
};
