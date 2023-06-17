import { useQuery } from '@tanstack/react-query';
import { getContact } from 'src/common/queries/Contact';

export const useContact = () => {
  const { data } = useQuery(['contact'], getContact);
  //TODO Add error boundaries
  return {
    phone: data?.data.attributes.phone,
    address: data?.data.attributes.address,
    email: data?.data.attributes.email,
    googleMapsLocation: data?.data.attributes.googleMapsLocation,
    embeddedGoogleMaps: data?.data.attributes.embeddedGoogleMaps,
  }
};
