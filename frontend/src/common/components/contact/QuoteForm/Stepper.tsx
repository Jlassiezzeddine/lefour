import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';
import { colors } from '@styles/colors';

const StepItem = ({
  activeStep,
  index,
}: {
  activeStep: number;
  index: number;
}) => {
  const isActive = activeStep === index;
  const stepStyle: SxProps<Theme> = {
    height: 4,
    width: 40,
    backgroundColor: isActive ? colors.dark : colors.grey,
  };
  return <Box sx={stepStyle} />;
};
interface IProps {
  activeStep: number;
}
export default function Stepper({ activeStep }: IProps) {
  const steps = [1, 2, 3];
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      {steps.map((item, index) => (
        <StepItem key={index} index={index + 1} activeStep={activeStep} />
      ))}
    </Stack>
  );
}
