export type FAQContext = 'audio' | 'video' | 'events' | 'generic';
export interface IFaq {
  context: FAQContext;
  question: string;
  answer: string;
}
