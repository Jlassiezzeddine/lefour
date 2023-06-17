import { IMedia } from './Media';

export type ChannelType = 'Apple Music' | 'Spotify' | 'Youtube';

export type Artist = {
  id: number;
  name: string;
  instagramUrl: string;
};

export type Channel = {
  id: number;
  name: ChannelType;
  url: string;
};

export type ReleaseDate = {
  id: number;
  date: Date;
  yearOnly: boolean;
};

export interface IRelease {
  title: string;
  album: string;
  label: string;
  slug: string;
  genre: string;
  cover: IMedia;
  preview: IMedia;
  artist: Artist;
  channels: Channel[];
  releaseDate: ReleaseDate;
}
