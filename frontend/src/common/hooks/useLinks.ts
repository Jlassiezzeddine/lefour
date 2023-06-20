import { ILink } from '../types/Link';
import { useService } from './api/service';
import { IServiceCategories } from '../types/ServiceCategories';
import { IMedia } from '../types/Media';

export default function useLinksMap(): {
  navigation: ILink[];
  footer: ILink[];
} {
  const services = useService();
  // eslint-disable-next-line no-unused-vars
  const getServicesRouting: (services: IServiceCategories[]) => ILink[] = (
    services: IServiceCategories[]
  ) =>
    services.map((item) => ({
      label: item.name,
      slug: item.slug,
      path: `/services/${item.slug}`,
      description: item.description,
      image:item.image as IMedia,
      children: item.services?.map((child) => ({
        label: child.name,
        slug: child.slug,
        path: `/services/${item.slug}/${child.slug}`,
        icon: child.slug,
        description: child.description,
        image:child.image as IMedia,
      })),
    }));
  // Export the getServerSideProps function with GetServerSideProps type

  return {
    navigation: [
      {
        label: 'Overview',
        slug: 'overview',
        path: '/',
      },
      // {
      //   label: 'About',
      //   slug: 'about',
      //   path: '/about',
      // },
      {
        label: 'Services',
        slug: 'services',
        path: '/services',
        children: services ? getServicesRouting(services as IServiceCategories[]) : [],
      },
      
      {
        label: 'Releases',
        slug: 'releases',
        path: '/releases',
      },
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
