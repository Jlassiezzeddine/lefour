import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import shortText from 'src/common/utils/shortText';
import { colors } from '../../../styles/colors';
import { renderServiceIcon } from '../../shared/Molecules/ServiceCard';
import { IServiceCategories } from 'src/common/types/ServiceCategories';

interface IProps {
  service: IServiceCategories;
  selected: IServiceCategories[];
  // eslint-disable-next-line no-unused-vars
  handleSelect: (service: IServiceCategories) => void;
}
export default function ServiceItem({
  service,
  selected,
  handleSelect,
}: IProps) {
  const { name, slug, services } = service;
  const isActive = selected.some((el) => el.slug === slug);
  return (
    <Stack
      direction="row"
      sx={{
        height: '100%',
        borderRadius: 2,
        padding: 2,
        cursor: 'pointer',
        transition: 'all .3s ease',
        position: 'relative',
        border: `1px solid ${isActive ? colors.dark : colors.lightGrey}`,
        '&:hover': {
          border: `1px solid ${isActive ? colors.dark : colors.grey}`,
        },
      }}
      alignItems="center"
      justifyContent="space-between"
      onClick={() => handleSelect(service)}
    >
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="start"
      >
        {renderServiceIcon(slug)}
        <Stack>
          <Typography fontSize={14} fontWeight={700}>
            {name}
          </Typography>
          <Typography
            fontSize={14}
            fontWeight={400}
            color={colors.grey}
            sx={{ display: { xs: 'none', md: 'block' }, ...shortText('40ch') }}
          >
            {slug !== 'something-else' 
              ? services?.map((el) => el.name).join(', ')
              : 'We are here to help! '}
          </Typography>
        </Stack>
      </Stack>
      {isActive && (
        <Box sx={{ color: colors.dark }}>
          <CheckCircleIcon />
        </Box>
      )}
    </Stack>
  );
}
