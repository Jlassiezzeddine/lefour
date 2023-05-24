import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';
import { colors } from '@styles/colors';
import { useEffect, useState } from 'react';
import { ILink } from 'src/common/types/Link';
import Link from '../Atoms/Link';
import ServiceCard from '../Molecules/ServiceCard';

interface IProps {
  link: ILink;
}

const style: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
};

const menuStyle: SxProps<Theme> = {
  color: colors.light,
  position: 'absolute',
  top: '100%',
  width: '100%',
  border: `1px solid ${colors.light}`,
  borderRadius: 2,
  overflow: 'hidden',
  boxShadow:
    '0 0px 100px -20px rgba(0,0,0,.12), 0 30px 60px -30px rgba(0,0,0,.15)',
};
export default function FancyMegaMenu({ link }: IProps) {
  const [subMenuItems, setSubMenuItems] = useState(link.children?.[0]);
  // for maintaining open and close state
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLInputElement) | null
  >(null);
  const handleHover = (event: React.MouseEvent<HTMLInputElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSubMenuItems(link.children?.[0]);
  };

  useEffect(() => {
    if (link.children && link.children.length > 0)
      setSubMenuItems(link.children?.[0]);
  }, [link]);

  return (
    <Box sx={style} onMouseEnter={handleHover}>
      <Stack
        direction="row"
        sx={{
          color: colors.light,
          transition: 'opacity .15s ease',
          '&:hover': {
            opacity: 0.7,
          },
        }}
      >
        <Link
          key={link.label}
          label={link.label}
          path={link.path}
          sx={{
            color: colors.light,
            '&:hover': {
              opacity: 1,
            },
          }}
        />
        <KeyboardArrowDownIcon />
      </Stack>

      <Popper
        disablePortal
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        role={undefined}
        transition
        sx={menuStyle}
        style={{
          position: 'absolute',
          top: '100%',
        }}
        onMouseLeave={handleClose}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Stack
            direction="row"
            sx={{
              webkitBackdropFilter: 'blur(30px)',
              backdropFilter: 'blur(30px)',
            }}
          >
            <MenuList
              sx={{
                minWidth: '150px',
                padding: 2,
              }}
            >
              {link.children?.map((item, i) => (
                <MenuItem
                  sx={{
                    paddingY: 2,
                    backgroundColor: 'transparent',
                    '& svg': {
                      opacity: subMenuItems?.label === item.label ? 1 : 0,
                      translate: subMenuItems?.label === item.label ? 0 : -16,
                      transition: 'all.3s ease',
                    },
                    '&:hover': {
                      backgroundColor: 'transparent',

                      '& svg': {
                        opacity: 1,
                        translate: 0,
                      },
                    },
                  }}
                  disableRipple
                  key={item.label}
                  onMouseOver={() => setSubMenuItems(link.children?.[i])}
                >
                  <Link
                    label={item.label}
                    path={item.path}
                    sx={{
                      width: '100%',
                      color: colors.light,

                      '&:hover': {
                        color: colors.light,
                      },
                    }}
                  >
                    <Stack direction="row" spacing={4}>
                      <Box>{item.label}</Box>
                      <ArrowRightAltIcon />
                    </Stack>
                  </Link>
                </MenuItem>
              ))}
            </MenuList>
            <Grid container spacing={2} p={2}>
              {subMenuItems?.children?.map((item) => (
                <Grid
                  item
                  key={item.label}
                  xs={
                    subMenuItems?.children?.length &&
                    12 / subMenuItems?.children?.length
                  }
                >
                  <Link
                    label="Learn more"
                    path={item.path}
                    sx={{
                      borderRadius: 2,
                      transition: 'all .15s ease',
                      '&:hover': {
                        opacity: 1,
                      },
                    }}
                  >
                    <ServiceCard dark service={item} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
}
