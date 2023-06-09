import Box from '@mui/material/Box';
import TextInput from '../../shared/Atoms/Form/TextInput';
import { IQuoteForm } from './useQuoteForm';
import { IServiceCategories } from 'src/common/types/ServiceCategories';

interface IProps {
  formState: IQuoteForm;
  // eslint-disable-next-line no-unused-vars
  handleChange: (name: string, value: string | IServiceCategories[]) => void;
}

export default function QuoteStepTwo({ formState, handleChange }: IProps) {
  return (
    <Box>
      <TextInput
        name="description"
        label="Describe your project (Optional)"
        value={formState['description']}
        multiline
        minRows={16}
        autoFocus
        helperText={''}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
    </Box>
  );
}
