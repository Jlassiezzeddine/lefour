import Spacer from '@components/shared/Atoms/Spacer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';
import React, { useState } from 'react';
import { ILink } from 'src/common/types/Link';
import { colors } from '../../../../styles/colors';
import Link from '../../Atoms/Link';
interface IProps {
  link: ILink;
}

const style: SxProps<Theme> = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
};

const menuStyle: React.CSSProperties = {
  position: 'absolute',
  top: '150%',
  border: `1px solid ${colors.lightGrey}`,
  borderRadius: 2,
  boxShadow:
    '0 50px 100px -20px rgba(0,0,0,.12), 0 30px 60px -30px rgba(0,0,0,.15)',
};

export default function IconDropdown({ link }: IProps) {
  // for maintaining open and close state
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLInputElement) | null
  >(null);
  const handleHover = (event: React.MouseEvent<HTMLInputElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={style} onMouseEnter={handleHover}>
      <Stack
        direction="row"
        sx={{
          transition: 'opacity .15s ease',
          '&:hover': {
            opacity: 0.7,
          },
        }}
      >
        <Link key={link.label} label={link.label} path={link.path} />
        <Spacer size={4} vertical />
        <KeyboardArrowDownIcon />
      </Stack>
      <Popper
        disablePortal
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        role={undefined}
        transition
        style={menuStyle}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper
            sx={{ padding: 1, boxShadow: 0, backgroundColor: colors.light }}
          >
            <MenuList>
              {link.children?.map((item) => (
                <MenuItem disableRipple key={item.label}>
                  <Link
                    label={item.label}
                    path={item.path}
                    sx={{ width: '100%' }}
                  />
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
}
