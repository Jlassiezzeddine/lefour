import Layout from '@components/Layout';
import FaqAccordion from '@components/faq/FaqAccordion';
import FaqContact from '@components/faq/FaqContact';
import FaqHeader from '@components/faq/FaqHeader';
import Spacer from '@components/shared/Atoms/Spacer';
import SeoHeader from '@components/shared/SeoHeader';
import Container from '@mui/material/Container';
import Fuse from 'fuse.js';
import type { NextPage } from 'next';
import { useState } from 'react';
import { useFrequentlyAskedQuestions } from 'src/common/hooks/api/faq';
import { FAQContext, IFaq } from 'src/common/types/FAQ';

const FAQ: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<FAQContext | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const faqList = useFrequentlyAskedQuestions() || [];
  const fuse = new Fuse(faqList, {
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
  });

  const getFaqItems = (faqList: IFaq[]) => {
    let result = faqList || [];
    if (searchQuery) {
      result = fuse
        .search({
          $or: searchQuery.split(',').map((el) => ({ question: el.trim() })),
        })
        .map((e) => e.item);
    }
    if(selectedCategory){
      result = result.filter(e => e.context === selectedCategory)
    }
    return result
  };

  return (
    <>
      <SeoHeader />
      <Layout title="FAQ">
        <Container>
          <Spacer size={8} />
          <FaqHeader
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Spacer size={8} />
          <FaqAccordion
            faqItems={getFaqItems(faqList)}
          />
          <Spacer size={16} />
          <FaqContact />
          <Spacer size={8} />
        </Container>
      </Layout>
    </>
  );
};

export default FAQ;
