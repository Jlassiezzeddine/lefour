import { useEffect } from 'react';
import { ILink } from '../types/Link';
import { IService } from '../types/Service';
import { useService } from './api/service';

export default function useLinksMap(): {
  navigation: ILink[];
  footer: ILink[];
} {
  const services = useService();
  // eslint-disable-next-line no-unused-vars
  const getServicesRouting: (services: IService[]) => ILink[] = (
    services: IService[]
  ) =>
    services.map((item) => ({
      label: item.name,
      slug: item.slug,
      path: `/services/${item.slug}`,
      description: item.description,
      children: item.children?.map((child) => ({
        label: child.name,
        slug: child.slug,
        path: `/services/${item.slug}/${child.slug}`,
        icon: child.slug,
        description: child.description,
      })),
    }));
  // Export the getServerSideProps function with GetServerSideProps type
  useEffect(() => {
    console.log('services', services);
  }, [services]);
  return {
    navigation: [
      {
        label: 'Overview',
        slug: 'overview',
        path: '/',
      },
      {
        label: 'Services',
        slug: 'services',
        path: '/services',
        children: services.data ? getServicesRouting(services.data) : [],
      },
      // {
      //   label: 'Records',
      //   slug: 'records',
      //   path: '/records',
      // },
      // {
      //   label: "Reviews",
      //   path: "/reviews",
      // },
      // {
      //   label: "News",
      //   path: "/news",
      // },
      {
        label: 'Contact',
        slug: 'contact',
        path: '/contact',
      },
    ],
    footer: [
      {
        label: 'FAQ',
        slug: 'faq',
        path: '/faq',
      },
      {
        label: 'Terms Of Use',
        slug: 'terms-of-use',
        path: '/terms-of-use',
      },
      {
        label: 'Cancellation Policy',
        slug: 'cancellation-policy',
        path: '/cancellation-policy',
      },
      {
        label: 'Privacy Policy',
        slug: 'privacy-policy',
        path: '/privacy-policy',
      },
    ],
  };
}
