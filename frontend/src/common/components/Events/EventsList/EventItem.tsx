import Button from '@components/shared/Atoms/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SxProps, Theme, lighten } from '@mui/material/styles';
import { colors } from '@styles/colors';
import { IEvent } from 'src/common/types/Event';
import { IPerformer } from 'src/common/types/Performer';
import { IPrice } from 'src/common/types/Price';
import formatDate from 'src/common/utils/formatDate';
import shortText from 'src/common/utils/shortText';

interface IProps {
  event: IEvent;
  index: number;
}
export function EventItem({ event, index }: IProps) {
  const {
    id,
    slug,
    label,
    description,
    startDate,
    endDate,
    pricing,
    performers,
    ticketsExternal,
  } = event;

  // eslint-disable-next-line no-unused-vars
  const eventItemStyle: (index: number) => SxProps<Theme> = (index) => ({
    borderBottom: `1px solid ${colors.lightGrey}`,
    borderTop: index === 0 ? `1px solid ${colors.lightGrey}` : 'unset',
    transition: 'all .3s ease',
    '&:hover': {
      backgroundColor: lighten(colors.lightGrey, 0.8),
    },
  });

  const getDates = (start: Date, end: Date) => {
    const sameMonth = new Date(start).getMonth() === new Date(end).getMonth();
    if (!sameMonth)
      return `${formatDate(startDate.toString(), 'en-US', {
        month: 'short',
        day: 'numeric',
      })} - ${formatDate(endDate.toString(), 'en-US', {
        day: 'numeric',
        month: 'short',
      })}`;

    return `${formatDate(startDate.toString(), 'en-US', {
      day: 'numeric',
      month: 'short',
    })}-${formatDate(endDate.toString(), 'en-US', {
      day: 'numeric',
    })}`;
  };

  const getPerformers = (performers: IPerformer[]) => {
    return performers
      .map((performer) => performer.name)
      .join(', ')
      .trim();
  };
  const getStartingPrice = (pricing: IPrice[]) => {
    const startingPrice = pricing.sort((a, b) => a.value - b.value)[0];
    return `${startingPrice?.value} ${startingPrice?.currency}`;
  };

  return (
    <Stack key={id} spacing={2} py={4} sx={eventItemStyle(index)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography
                color={colors.dark}
                sx={{ whiteSpace: 'nowrap' }}
                fontWeight={500}
              >
                {label}
              </Typography>
              <Typography color={colors.grey}>
                {getDates(startDate, endDate)}
              </Typography>
            </Stack>
            <Stack sx={{ display: { xs: 'block', md: 'none' } }}>
              <Typography color={colors.grey}>Starting at</Typography>
              <Typography color={colors.dark} fontWeight={600}>
                {getStartingPrice(pricing)}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography color={colors.grey} sx={{ ...shortText('70ch') }}>
            {description}
          </Typography>
          <Typography color={colors.grey} sx={{ ...shortText('70ch') }}>
            {`Line up: ${getPerformers(performers)}`}
          </Typography>
        </Grid>
        <Grid item xs={12} md={2} display="flex" justifyContent="center">
          <Stack sx={{ display: { xs: 'none', md: 'block' } }}>
            <Typography color={colors.grey}>Starting at</Typography>
            <Typography color={colors.dark}>
              {getStartingPrice(pricing)}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3} display="flex" justifyContent="end">
          <Stack direction="row" width="100%" spacing={2}>
            <Button
              href={`/events/${slug}`}
              fullWidth
              label={'Details'}
              variant="secondary"
            />
            <Button
              href={ticketsExternal}
              external
              fullWidth
              label={'Tickets'}
            />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
