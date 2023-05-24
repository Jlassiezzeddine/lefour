import Button from '@components/shared/Atoms/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PhoneInput from '../../shared/Atoms/Form/PhoneInput';
import TextInput from '../../shared/Atoms/Form/TextInput';
import Spacer from '../../shared/Atoms/Spacer';
import useContactForm from './useContactForm';
export interface IContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
const initialState: IContactForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};
const ContactForm = () => {
  const { formState, handleChange, handleSubmit } =
    useContactForm<IContactForm>(initialState);

  return (
    <Stack
      width="100%"
      height="100%"
      maxWidth="500px"
      marginX="auto"
      justifyContent="space-between"
      sx={{ paddingY: { xs: 0, md: 4 } }}
    >
      <Box>
        <Typography
          fontSize={24}
          fontWeight={900}
          lineHeight={1}
          align="center"
        >
          {"Let's talk."}
        </Typography>

        <Spacer size={10} divider />
        <Stack spacing={2} alignItems="center">
          <Stack direction="row" spacing={2} width="100%">
            <TextInput
              name="firstName"
              label="First Name"
              value={formState.firstName}
              helperText={''}
              onChange={handleChange}
            />
            <TextInput
              name="lastName"
              label="Last Name"
              value={formState['lastName']}
              helperText={''}
              onChange={handleChange}
            />
          </Stack>
          <TextInput
            name="email"
            label="Email"
            type="email"
            value={formState['email']}
            helperText={''}
            onChange={handleChange}
          />
          <PhoneInput
            name="phone"
            label="Phone"
            type="phone"
            value={formState['phone']}
            helperText={''}
            onChange={handleChange}
          />
          <TextInput
            name="message"
            label="How can we help ?"
            value={formState['message']}
            multiline
            minRows={6}
            helperText={''}
            onChange={handleChange}
          />
        </Stack>
      </Box>

      <Button label={'Send'} onClick={handleSubmit} />
    </Stack>
  );
};

export default ContactForm;
