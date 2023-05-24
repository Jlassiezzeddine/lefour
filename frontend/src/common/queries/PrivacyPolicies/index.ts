import { IPrivacyPolicy } from 'src/common/types/PrivacyPolicy';
import { getContactInfo } from '../Globals';

export const getPrivacyPolicies: () => IPrivacyPolicy[] = () => {
  const contacts = getContactInfo();
  const data = [
    {
      title: 'Introduction',
      slug: 'introduction',
      content:
        'At Le Four Studio, we are committed to protecting the privacy and security of our website users. This Privacy Policy explains how we collect, use, and disclose personal information and other data when you use our website www.lefourstudio.com. By using the Site, you consent to the terms of this Privacy Policy.',
    },
    {
      title: 'Personal Information',
      slug: 'personal-information',
      content:
        'We collect personal information such as billing information, age, gender, musical preferences, and feedback. We use this information to communicate with customers, process payments, personalize user experience, and improve our services. The legal basis for collecting this information may be consent or contract. We will retain this information until the account is closed or as required by law. We may share this information with payment processors, email marketing services, and other third-party service providers as necessary to perform these functions.',
    },
    {
      title: 'Usage Information',
      slug: 'usage-information',
      content:
        'We may also collect non-personal information such as your IP address, browser type, device type, pages visited, time spent on website, search queries, and other usage information. We use this information to improve website functionality, analyze user behavior, and prevent fraud. The legal basis for collecting this information is our legitimate interest in improving our services. We will retain this information for up to 26 months. We may share this information with our web hosting provider and Google Analytics.',
    },
    {
      title: 'Disclosure of Personal Information',
      slug: 'disclosure-of-personal-information',
      content:
        'We may disclose your personal information without your knowledge or consent in certain circumstances as required by law, including but not limited to complying with a subpoena, warrant, or other court order, or responding to a lawful request by a government or law enforcement agency.',
    },
    {
      title: 'Transfer of Personal Information',
      slug: 'transfer-of-personal-information',
      content:
        'We may transfer your personal information to service providers or other third parties located outside of Canada for processing or storage. If we do so, we will ensure that appropriate safeguards are in place to protect the privacy of your personal information, including entering into contractual arrangements that require the third party to protect your personal information in a manner that is consistent with this Privacy Policy and Canadian privacy laws.',
    },
    {
      title: 'Retention and Disposal of Personal Information',
      slug: 'retention-&-disposal-of-personal-information',
      content:
        'We will only retain your personal information for as long as necessary to fulfill the purposes for which it was collected or as required by law. When we no longer need your personal information, we will securely dispose of it in a manner that ensures the protection of your privacy.',
    },
    {
      title: 'Compliance and Accountability',
      slug: 'compliance-&-accountability',
      content:
        'We are responsible for ensuring that our privacy practices comply with Canadian privacy laws. If you have any questions or concerns about our privacy practices, please contact our support team.',
    },
    {
      title: 'Cookies',
      slug: 'cookies',
      content:
        'We use cookies and similar technologies to remember user preferences, provide personalized content, and analyze website usage. You can choose to disable cookies through your browser settings, but this may affect your ability to use some features of the Site. The legal basis for collecting this information may be consent or legitimate interest. We will retain this information for up to 12 months. We may share this information with third-party tracking and advertising companies.',
    },
    {
      title: 'Marketing',
      slug: 'marketing',
      content:
        'We may collect personal information such as your name, email address, musical preferences, and feedback for marketing purposes. We use this information to send promotional emails, newsletters, and updates. The legal basis for collecting this information is consent. We will retain this information until you unsubscribe or opt-out of receiving marketing communications. We may share this information with email marketing services.',
    },
    {
      title: "Children's Information (necessary?)",
      slug: 'children-information',
      content:
        "We may collect personal information such as the name, email address, age of children, and musical preferences for children's music education programs. We will only collect this information with parental consent. We will retain this information until the account is closed or as required by law. We may share this information with third-party music education partners.",
    },
    {
      title: 'Security',
      slug: 'security',
      content:
        'We take reasonable measures to protect the personal information we collect from unauthorized access, disclosure, or destruction. However, no data transmission over the internet or stored on a server can be guaranteed to be 100% secure. Therefore, we cannot guarantee the security of any information you transmit to us and you do so at your own risk.',
    },
    {
      title: 'Consent and Withdrawal',
      slug: 'consent-&-withdrawal',
      content:
        'We will obtain your consent before collecting, using, or disclosing your personal information, unless such collection, use, or disclosure is required by law. You may withdraw your consent at any time, subject to legal or contractual restrictions and reasonable notice. We will inform you of the implications of withdrawing your consent.',
    },
    {
      title: 'Access and Correction',
      slug: 'access-&-correction',
      content:
        'You have the right to access and correct your personal information that we hold. We may require you to provide certain information to verify your identity before providing you with access to your personal information. We will respond to your request for access or correction within a reasonable time and no later than 30 days after receiving your request.',
    },
    {
      title: 'Complaints and Inquiries',
      slug: 'complaints-&-inquiries',
      content:
        'If you have any questions or concerns about this Privacy Policy or our data practices, please contact us by email : [email]',
    },
    {
      title: 'Updates to Privacy Policy',
      slug: 'updates-to-privacy-policy',
      content:
        'We may update this Privacy Policy from time to time by posting a revised version on the Site. If we make any material changes to this Privacy Policy, we will provide notice on the Site or by other means as required by law. Your continued use of the Site following the posting of a revised Privacy Policy means that you accept and agree to the changes and give your consent to abide and be bound by the modified Privacy Policy.. We encourage you to review this Privacy Policy periodically to stay informed about our privacy practices',
    },
  ];

  return data.map((element) => ({
    ...element,
    content: element.content.replace('[email]', contacts['email']),
  }));
};
