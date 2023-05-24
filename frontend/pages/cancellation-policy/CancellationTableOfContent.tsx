import Link from '@components/shared/Atoms/Link';
import Spacer from '@components/shared/Atoms/Spacer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import { getCancellationPolicies } from 'src/common/queries/CancellationPolicies';

export default function CancellationTableOfContent() {
  const cancellationPolicies = getCancellationPolicies();
  return (
    <List
      dense
      disablePadding
      sx={{
        position: 'sticky',
        top: 128,
      }}
    >
      <Typography
        fontSize={18}
        fontWeight={700}
        lineHeight={1}
        color={colors.dark}
      >
        Table Of Contents
      </Typography>
      <Spacer size={2} />
      {cancellationPolicies.map((item, index) => (
        <ListItem key={item.slug}>
          <Link
            label={item.slug}
            path={`#${item.slug}`}
            fontSize={14}
            sx={{ maxWidth: '25ch' }}
          >
            <>{`${index + 1}. ${item.title}`}</>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
