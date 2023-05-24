import { ITermsOfUse } from 'src/common/types/TermOfUse';

export const getTermsOfUse: () => ITermsOfUse[] = () => [
  {
    title: 'General Information',
    slug: 'general-information',
    content:
      'Le Four Studio is a music recording and production studio. Our website provides information about our services, including recording, mixing, and mastering music. We also offer the rental of our recording studios and equipment for professional and personal use.',
  },
  {
    title: 'Acceptable Use',
    slug: 'acceptable-use',
    content:
      'When using our website or services, you agree to use them only for lawful purposes and in a way that does not infringe on the rights of others or inhibit their use and enjoyment of our services. You agree not to use our website or services for any illegal activities, including but not limited to, uploading or transmitting any harmful, offensive, or illegal content.',
  },
  {
    title: 'User Accounts',
    slug: 'user-accounts',
    content:
      'In order to use some of our services, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to notify us immediately if you suspect any unauthorized use of your account.',
  },
  {
    title: 'Payment and Fees',
    slug: 'payments-&-fees',
    content:
      'While some of our rates are fixed, others can vary depending on the parties involved and the nature of those services. We reserve the right to change our fees at any time. Payment for services must be made in advance or at the time of service. We accept various payment methods, including cash, credit card, and PayPal. We do not offer refunds for services rendered.',
  },
  {
    title: 'Intellectual Property',
    slug: 'intellectual-property',
    content:
      'The content on our website, including text, graphics, logos, and images, is owned by Le Four Studio Inc. and is protected by copyright and intellectual property laws. You may not copy, reproduce, distribute, or use our content without our prior written consent.',
  },
  {
    title: 'Liability',
    slug: 'Liability',
    content:
      'Le Four Studio is not responsible for any loss or damage resulting from the use of our services or website. We are not liable for any damages resulting from the use of our equipment, including any injuries, loss of data, or other damages. We are also not responsible for any damages resulting from any delays, interruptions, or errors in the use of our services or website.',
  },
  {
    title: 'Termination',
    slug: 'termination',
    content:
      'We reserve the right to terminate your access to our website or services at any time, without notice or explanation. We also reserve the right to modify or discontinue our services or website at any time, without notice or explanation.',
  },
  {
    title: 'Governing Law',
    slug: 'governing-law',
    content:
      'These terms and conditions are governed by and construed in accordance with the laws of the Canada. Any disputes arising from the use of our website or services shall be resolved in accordance with these laws.',
  },
];
