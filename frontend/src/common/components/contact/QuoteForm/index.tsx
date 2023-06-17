import Button from '@components/shared/Atoms/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import Spacer from '../../shared/Atoms/Spacer';
import QuoteStepOne from './QuoteStepOne';
import QuoteStepThree from './QuoteStepThree';
import QuoteStepTwo from './QuoteStepTwo';
import Stepper from './Stepper';
import useQuoteForm, { IQuoteForm } from './useQuoteForm';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { colors } from '@styles/colors';
export default function QuoteForm() {
  const initialState: IQuoteForm = {
    services: [],
    description: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };
  const { formState, handleChange, handleSubmit, isSuccess, isLoading, isError } =
    useQuoteForm(initialState);
  const labels = [
    'Choose your service(s)',
    "What's on your mind?",
    'Tell us a little more about yourself',
  ];
  const { push, query } = useRouter();
  const step = query.step;
  const handlePrevious = () =>
    Number(step) > 1 &&
    push({ query: { ...query, step: `${Number(query.step) - 1}` } });
  const handleNext = () =>
    Number(step) < 3 &&
    push({ query: { ...query, step: `${Number(query.step) + 1}` } });
  const isDisabled = () => {
    if (Number(step) === 1) {
      if (formState.services.length === 0) return true;
      return false;
    }
    if (Number(step) === 3) {
      if (
        !formState.firstName ||
        !formState.lastName ||
        !formState.email ||
        !formState.phone
      )
        return true;
      return false;
    }
    return false;
  };
  const renderStep = (step: number) => {
    switch (true) {
      case step === 1:
        return (
          <QuoteStepOne formState={formState} handleChange={handleChange} />
        );
      case step === 2:
        return (
          <QuoteStepTwo
            formState={formState}
            handleChange={handleChange}
          />
        );
      case step === 3:
        return (
          <QuoteStepThree
            formState={formState}
            handleChange={handleChange}
            handlePrevious={handlePrevious}
          />
        );

      default:
        return null;
    }
  };
  if (isError)
    return (
      <Stack justifyContent="center" alignItems="center" spacing={4}>
        <ReportProblemIcon sx={{color: colors.error, fontSize: 64}} />
        <Typography fontWeight={700}>
          Oops! Something went wrong, please try again later
        </Typography>
      </Stack>
    );
  if (isSuccess)
    return (
      <Stack justifyContent="center" alignItems="center" spacing={4}>
        <CheckCircleIcon sx={{color: colors.success, fontSize: 64}}  />
        <Typography fontWeight={700}>
          Thanks for reaching out, We will get back to you soon
        </Typography>
      </Stack>
    );
  return (
    <Stack
      width="100%"
      maxWidth="500px"
      height="100%"
      marginX="auto"
      sx={{ paddingY: { xs: 0, md: 4 } }}
    >
      <Box width="100%">
        <Typography
          fontSize={24}
          fontWeight={900}
          lineHeight={1}
          align="center"
          position="relative"
        >
          {Number(step) > 1 && (
            <IconButton
              sx={{
                position: 'absolute',
                top: '50%',
                left: '-40px',
                transform: 'translateY(-50%)',
              }}
              onClick={handlePrevious}
            >
              <ChevronLeftIcon />
            </IconButton>
          )}
          {labels[Number(step) - 1]}
        </Typography>
      </Box>
      <Spacer size={10} divider />
      <Box sx={{ width: '100%', height: '100%' }}>
        {renderStep(Number(step))}
      </Box>
      <Stack>
        <Spacer size={4} />
        <Stepper activeStep={Number(step)} />
        <Spacer size={4} />
        <Button
          disabled={isDisabled()}
          onClick={Number(step) < 3 ? handleNext : handleSubmit}
          label={Number(step) < 3 ? 'Continue' : 'Submit'}
          loading={isLoading}
        />
      </Stack>
    </Stack>
  );
}
