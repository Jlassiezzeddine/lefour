import { useQuery } from '@tanstack/react-query';
import { getFrequentlyAskedQuestions } from 'src/common/queries/FAQ';

export const useFrequentlyAskedQuestions = () => {
  const { data } = useQuery(
    ['frequently-asked-questions'],
    getFrequentlyAskedQuestions
  );

  //TODO Add error boundaries
  return data?.data.map((item) => ({
    id: item.id,
    context: item.attributes.context,
    question: item.attributes.question,
    answer: item.attributes.answer,
  }));
};
