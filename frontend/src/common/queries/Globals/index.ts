import { ISocialMedia } from 'src/common/types/SocialMedia';

export const getContactInfo = () => ({
  phone: '+1 437-788-5130',
  address: '1 Sumach Street, M5A 4P6 Toronto, Ontario',
  email: 'contact.lefourstudio@gmail.com',
  gMapLocation:
    'https://www.google.com/maps/place/1+Sumach+St,+Toronto,+ON+M5A+4P6,+Canada/@43.6546258,-79.3576221,17z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb156324a015:0x3ec09ea9d2cc8365!8m2!3d43.6546258!4d-79.3576221!16s%2Fg%2F11bw3z6x6_',
  embeddedMapUrl:
    'https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=1%20Sumach%20Street,%20M5A%204P6%20Toronto,%20Ontario%20Toronto+(s)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed',
});

export const getSocialMedia: () => ISocialMedia[] = () => [
  { name: 'instagram', link: 'https://www.instagram.com/le_four_studio/' },
  { name: 'youtube', link: '/' },
  // { name: 'spotify', link: '/' },
  // { name: 'soundcloud', link: '/' },
];
