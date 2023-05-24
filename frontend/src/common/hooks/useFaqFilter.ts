import Fuse from 'fuse.js';
import { useEffect, useState } from 'react';
import { getFrequentlyAskedQuestions } from '../queries/FAQ';
import { FAQContext, IFaq } from '../types/FAQ';
interface IProps {
  searchQuery: string;
  selectedCategory: FAQContext | null;
}
export default function useFaqFilter({
  searchQuery,
  selectedCategory,
}: IProps) {
  const FaqList = getFrequentlyAskedQuestions();
  const [faqItems, setFaqItems] = useState<IFaq[]>(FaqList);

  useEffect(() => {
    const options = {
      // isCaseSensitive: false,
      includeScore: true,
      // shouldSort: true,
      includeMatches: false,
      // findAllMatches: true,
      //   minMatchCharLength: 1,
      // location: 0,
      threshold: 0.4,
      distance: 300,
      useExtendedSearch: true,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      // fieldNormWeight: 1,
      keys: ['question'],
    };

    const handleFilter = () => {
      let result: IFaq[] = FaqList;
      if (selectedCategory !== null) {
        result = FaqList.filter((e) => e.context === selectedCategory);
      }
      if (searchQuery) {
        const fuse = new Fuse(result, options);

        result = fuse
          .search({
            $or: searchQuery.split(',').map((el) => ({ question: el.trim() })),
          })
          .map((e) => e.item);
      }
      setFaqItems(result);
    };
    handleFilter();
  }, [FaqList, searchQuery, selectedCategory]);
  return {
    faqItems,
  };
}
