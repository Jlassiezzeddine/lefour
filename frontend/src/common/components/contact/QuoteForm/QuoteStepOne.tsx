import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { IService } from 'src/common/types/Service';
import ServiceItem from './ServiceItem';
import { IQuoteForm } from './useQuoteForm';
import { useService } from 'src/common/hooks/api/service';

interface IProps {
  formState: IQuoteForm;
  // eslint-disable-next-line no-unused-vars
  handleChange: (name: string, value: string | IService[]) => void;
}
export default function QuoteStepOne({ formState, handleChange }: IProps) {
  const services = useService();
  const [selected, setSelected] = useState<IService[]>(formState.services);
  const handleSelect = (service: IService) => {
    let newSelected: IService[];
    if (selected.some((el) => el.slug === service.slug)) {
      newSelected = selected.filter(
        (el) => el.slug !== service.slug
      );
    } else {
      newSelected = [...selected, service];
    }
    setSelected(newSelected);
    handleChange('services', newSelected);
  };
  return (
    <Stack width="100%" height="100%" maxWidth="500px" marginX="auto">
      <Grid container spacing={2}>
        {services?.data?.map((service) => (
          <Grid item xs={12} key={service.slug}>
            <ServiceItem
              service={service}
              selected={selected}
              handleSelect={handleSelect}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <ServiceItem
            service={{
              name: 'Something else',
              slug: 'other',
              description: "We're here to help.",
            }}
            selected={selected}
            handleSelect={handleSelect}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
