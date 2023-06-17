import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import { IFaq } from 'src/common/types/FAQ';
interface IProps {
  faqItems?: IFaq[];
}
export default function FaqAccordion({ faqItems }: IProps) {
  return (
    <>
      {faqItems?.map((item) => (
        <MuiAccordion
          key={item.question}
          sx={{
            border: `1px solid ${colors.lightGrey}`,
            borderRadius: 2,
            backgroundColor: colors.light,
            boxShadow: 'none',
            '&:not(:last-child)': {
              marginBottom: 2,
            },
            '&:before': {
              display: 'none',
            },
            '&.Mui-expanded': {
              marginTop: 0,
            },
          }}
        >
          <MuiAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ border: 0 }}
          >
            <Typography fontSize={16} fontWeight={600}>
              {item.question}
            </Typography>
          </MuiAccordionSummary>
          <MuiAccordionDetails>
            <Typography fontSize={14} fontWeight={400}>
              {item.answer}
            </Typography>
          </MuiAccordionDetails>
        </MuiAccordion>
      ))}
    </>
  );
}
