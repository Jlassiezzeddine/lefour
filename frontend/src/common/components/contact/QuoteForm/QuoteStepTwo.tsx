import Spacer from '@components/shared/Atoms/Spacer';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import { ChangeEvent } from 'react';
import { IService } from 'src/common/types/Service';
import TextInput from '../../shared/Atoms/Form/TextInput';
import { IQuoteForm } from './useQuoteForm';
import { useService } from 'src/common/hooks/api/service';

interface IProps {
  formState: IQuoteForm;
  // eslint-disable-next-line no-unused-vars
  handleChange: (name: string, value: string | IService[]) => void;
  toggleChildService: (
    // eslint-disable-next-line no-unused-vars
    parentSlug: string,
    // eslint-disable-next-line no-unused-vars
    event: ChangeEvent<HTMLInputElement>,
    // eslint-disable-next-line no-unused-vars
    checked: boolean
  ) => void;
}

export default function QuoteStepTwo({
  formState,
  handleChange,
  toggleChildService,
}: IProps) {
  const allServices = useService();
  const { services } = formState;

  return (
    <Box>
      <Typography fontSize={14} fontWeight={600} color={colors.grey}>
        Please uncheck unwanted services
      </Typography>
      <Spacer size={2} />
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        {services.map((item) => (
          <FormGroup key={item.slug}>
            <Typography fontWeight={600}>{item.name}</Typography>
            <Spacer size={1} />
            {allServices?.data
              ?.find((parent) => parent.slug === item.slug)
              ?.children?.map((child) => (
                <FormControlLabel
                  key={child.slug}
                  control={
                    <Checkbox
                      name={child.slug}
                      checked={
                        item.children?.findIndex(
                          (obj) => obj.slug === child.slug
                        ) !== -1
                      }
                      onChange={(event, checked) =>
                        toggleChildService(item.slug, event, checked)
                      }
                      size="small"
                    />
                  }
                  label={child.name}
                />
              ))}
          </FormGroup>
        ))}
      </Stack>
      <Spacer size={4} />
      <TextInput
        name="description"
        label="Describe your project (Optional)"
        value={formState['description']}
        multiline
        minRows={6}
        autoFocus
        helperText={''}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      />
    </Box>
  );
}
