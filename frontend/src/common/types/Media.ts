export interface IMediaRaw {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      caption: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      provider_metadata: {
        public_id: string;
        resource_type: string;
      };
    };
  };
}
export interface IMedia {
  alt: string;
  caption: string;
  type: string;
  url: string;
  size: number;
}
