import { ICancellationPolicy } from 'src/common/types/CancellationPolicy';
import { getContactInfo } from '../Globals';

export const getCancellationPolicies: () => ICancellationPolicy[] = () => {
  const contacts = getContactInfo();
  const data = [
    {
      title: 'Introduction',
      slug: 'introduction',
      content:
        'At [Music Production Studio Name], we understand that sometimes circumstances arise that require our clients to cancel or reschedule their recording sessions. We want to ensure that the process is clear and fair for everyone involved. This policy outlines our cancellation and rescheduling procedures.',
    },
    {
      title: 'Cancellation by Client',
      slug: 'cancellation-by-client',
      content:
        "Clients may cancel their recording session at any time. However, we require at least 48 hours' notice to cancel a session without incurring any fees. If a client cancels a session with less than 48 hours' notice, they will be charged for the full session fee.",
    },
    {
      title: 'Rescheduling by Client',
      slug: 'rescheduling-by-client',
      content:
        "Clients may reschedule their recording session at any time, subject to availability. We require at least 48 hours' notice to reschedule a session without incurring any fees. If a client reschedules a session with less than 48 hours' notice, they will be charged a $50 rescheduling fee.",
    },
    {
      title: 'Cancellation by Le Four Studio',
      slug: 'cancellation-by-le-four-studio',
      content:
        'In the unlikely event that we need to cancel a recording session, we will provide the client with as much notice as possible. We will make every effort to reschedule the session at a time that is convenient for the client, subject to availability. If we are unable to reschedule the session, we will provide a full refund of any fees paid.',
    },
    {
      title: 'Late Arrival',
      slug: 'late-arrival',
      content:
        'We understand that unexpected delays can happen, and we will make every effort to accommodate late arrivals. However, if a client arrives more than 15 minutes late for a scheduled recording session, we may need to reschedule the session or reduce the session time to ensure that other clients are not impacted.',
    },
    {
      title: 'No Show',
      slug: 'no-show',
      content:
        'If a client fails to show up for a scheduled recording session without any notice, they will be charged for the full session fee.',
    },
    {
      title: 'Payment',
      slug: 'payment',
      content:
        'All fees for cancelled or rescheduled sessions must be paid in full before a new session can be scheduled. We accept payment by credit card or bank transfer.',
    },
    {
      title: 'Applicable Law',
      slug: 'applicable-law',
      content:
        'This cancellation policy is governed by the laws of Ontario, Canada. Any disputes arising from this policy will be resolved in accordance with the laws of Ontario.',
    },
    {
      title: 'Contact Us',
      slug: 'contact-us',
      content:
        'If you have any questions or concerns about our cancellation policy, please do not hesitate to contact us at [email]. We are always here to help.',
    },
  ];

  return data.map((element) => ({
    ...element,
    content: element.content.replace('[email]', contacts['email']),
  }));
};
