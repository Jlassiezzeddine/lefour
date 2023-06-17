export type SocialMediaType = 'youtube' | 'instagram';
export interface ISocialMedia {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  items: {
    id: number;
    name: SocialMediaType;
    link: string;
  }[];
}
