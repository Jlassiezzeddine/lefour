import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { ILink } from 'src/common/types/Link';
import { useToggle } from 'usehooks-ts';
import Link from '../Atoms/Link';

interface IProps {
  menuLink: ILink;
}
export default function LinksMenu({ menuLink }: IProps) {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <Stack spacing={4} alignItems="start" width="100%">
      <Stack direction="row" alignItems="center" width="100%">
        <Box sx={{ width: '100%', flexGrow: 1 }}>
          <Link label={menuLink.label} path={menuLink.path} />
        </Box>
        <IconButton onClick={toggleIsOpen}>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Stack>
      {isOpen && (
        <Stack spacing={4}>
          {menuLink.children?.map((item) => (
            <Link
              key={item.label}
              label={item.label}
              path={item.path}
              sx={{ width: '100%' }}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
