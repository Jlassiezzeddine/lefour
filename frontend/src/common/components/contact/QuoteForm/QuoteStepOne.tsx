import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import ServiceItem from './ServiceItem';
import { IQuoteForm } from './useQuoteForm';
import { useServiceCategories } from 'src/common/hooks/api/serviceCategories';
import { IServiceCategories } from 'src/common/types/ServiceCategories';

interface IProps {
  formState: IQuoteForm;
  // eslint-disable-next-line no-unused-vars
  handleChange: (name: string, value: string | IServiceCategories[]) => void;
}
export default function QuoteStepOne({ formState, handleChange }: IProps) {
  const services = useServiceCategories({all:true});
  const [selected, setSelected] = useState<IServiceCategories[]>(formState.services);
  const handleSelect = (service: IServiceCategories) => {
    let newSelected: IServiceCategories[];
    if (selected.some((el) => el.slug === service.slug)) {
      newSelected = selected.filter((el) => el.slug !== service.slug);
    } else {
      newSelected = [...selected, service];
    }
    setSelected(newSelected);
    handleChange('services', newSelected);
  };
  return (
    <Stack width="100%" height="100%" maxWidth="500px" marginX="auto">
      <Grid container spacing={2}>
        {services?.map((service) => (
          <Grid item xs={12} key={service.slug}>
            <ServiceItem
              service={service}
              selected={selected}
              handleSelect={handleSelect}
            />
          </Grid>
        ))}
        {/* <Grid item xs={12}>
          <ServiceItem
            service={{
              name: 'Something else',
              slug: 'other',
              description: "We're here to help.",
              content: ''
            }}
            selected={selected}
            handleSelect={handleSelect}
          />
        </Grid> */}
      </Grid>
    </Stack>
  );
}
