import Layout from '@components/Layout';
import FaqAccordion from '@components/faq/FaqAccordion';
import FaqContact from '@components/faq/FaqContact';
import FaqHeader from '@components/faq/FaqHeader';
import Spacer from '@components/shared/Atoms/Spacer';
import SeoHeader from '@components/shared/SeoHeader';
import Container from '@mui/material/Container';
import type { NextPage } from 'next';
import { useState } from 'react';
import useFaqFilter from 'src/common/hooks/useFaqFilter';
import { FAQContext } from 'src/common/types/FAQ';

const FAQ: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<FAQContext | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { faqItems } = useFaqFilter({ searchQuery, selectedCategory });

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
          <FaqAccordion faqItems={faqItems} />
          <Spacer size={16} />
          <FaqContact />
          <Spacer size={8} />
        </Container>
      </Layout>
    </>
  );
};

export default FAQ;
