import TextInput from '@components/shared/Atoms/Form/TextInput';
import Spacer from '@components/shared/Atoms/Spacer';
import EventIcon from '@mui/icons-material/Event';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VideocamIcon from '@mui/icons-material/Videocam';
import { capitalize } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';
import { useFrequentlyAskedQuestions } from 'src/common/hooks/api/faq';
import { FAQContext } from 'src/common/types/FAQ';
interface IProps {
  searchQuery: string;
  selectedCategory: FAQContext | null;
  setSelectedCategory: Dispatch<SetStateAction<FAQContext | null>>;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}
export default function FaqHeader({
  searchQuery,
  selectedCategory,
  setSelectedCategory,
  setSearchQuery,
}: IProps) {
  const handleSearchTextChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setSearchQuery(e.target.value);

  const handleCategorySelect = (context: FAQContext) => {
    if (context === selectedCategory) setSelectedCategory(null);
    else setSelectedCategory(context);
  };

  const FaqList = useFrequentlyAskedQuestions();
 
  const getIcons = (context: FAQContext) => {
    switch (true) {
      case context === 'generic':
        return <HelpOutlineIcon />;
      case context === 'audio':
        return <HeadphonesIcon />;
      case context === 'video':
        return <VideocamIcon />;
      case context === 'events':
        return <EventIcon />;

      default:
        break;
    }
  };
  return (
    <>
      <Typography fontSize={32} fontWeight={900} lineHeight={1} align="center">
        Hello, how can we help?
      </Typography>
      <Spacer size={6} />
      <TextInput
        name={'faq-search-text'}
        value={searchQuery}
        placeholder={
          'Search keywords separated by "," (ex: mixing, mastering, equipment ...)'
        }
        onChange={handleSearchTextChange}
      />
      <Spacer size={6} />
      <Typography
        fontSize={16}
        fontWeight={400}
        lineHeight={1}
        align="center"
        color={colors.dark}
      >
        Or choose a category to quickly find the help you need
      </Typography>
      <Spacer size={6} />
      <Grid container spacing={2}>
        {FaqList?.map((item) => item.context)
          .filter((x, i, a) => a.indexOf(x) === i)
          .map((context) => (
            <Grid item key={context} xs={12} md={3}>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  padding: 2,
                  cursor: 'pointer',
                  border: `1px solid ${
                    selectedCategory === context
                      ? colors.dark
                      : colors.lightGrey
                  }`,
                  borderRadius: 2,
                  '&:hover': {
                    borderColor:
                      selectedCategory === context ? colors.dark : colors.grey,
                  },
                }}
                onClick={() => handleCategorySelect(context)}
              >
                <Box>{getIcons(context)}</Box>
                <Typography fontSize={16} fontWeight={500}>
                  {capitalize(context)}
                </Typography>
              </Stack>
            </Grid>
          ))}
      </Grid>
    </>
  );
}
