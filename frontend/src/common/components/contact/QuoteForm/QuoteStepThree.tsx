import Stack from '@mui/material/Stack';
import { IService } from 'src/common/types/Service';
import PhoneInput from '../../shared/Atoms/Form/PhoneInput';
import TextInput from '../../shared/Atoms/Form/TextInput';
import { IQuoteForm } from './useQuoteForm';

interface IProps {
  formState: IQuoteForm;
  // eslint-disable-next-line no-unused-vars
  handleChange: (name: string, value: string | IService[]) => void;
  handlePrevious: () => void;
}
export default function QuoteStepThree({ formState, handleChange }: IProps) {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} width="100%">
        <TextInput
          name="firstName"
          label="First Name"
          value={formState['firstName']}
          required
          helperText={''}
          autoFocus
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <TextInput
          name="lastName"
          label="Last Name"
          value={formState['lastName']}
          required
          helperText={''}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </Stack>
      <TextInput
        name="email"
        label="Email"
        required
        value={formState['email']}
        helperText={''}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
      <PhoneInput
        name="phone"
        label="Phone"
        type="phone"
        value={formState['phone']}
        required
        helperText={''}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
    </Stack>
  );
}
