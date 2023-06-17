import { IMedia, IMediaRaw } from "../types/Media";


// eslint-disable-next-line no-unused-vars
export const getMedia : (image: IMediaRaw) => IMedia = (image: IMediaRaw) => {
    return {
        alt : image?.data?.attributes?.alternativeText,
        caption: image?.data?.attributes?.caption,
        type: image?.data?.attributes?.provider_metadata?.resource_type,
        url: image?.data?.attributes?.url,
        size: image?.data?.attributes?.size,
    }
};
