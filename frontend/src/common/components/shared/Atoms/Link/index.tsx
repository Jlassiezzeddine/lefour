import Box from '@mui/material/Box';
import MUILink from '@mui/material/Link';
import { SxProps, Theme } from '@mui/material/styles';
import { colors } from '@styles/colors';
import NextLink from 'next/link';
import React from 'react';

interface INavigationItem {
  path: string;
  label: string;
  fontSize?: number;
  fontWeight?: number;
  external?: boolean;
  sx?: SxProps<Theme>;
  children?: JSX.Element;
}

const Link = (
  {
    label,
    path,
    sx,
    fontSize = 16,
    fontWeight = 700,
    children,
    external = false,
    ...props
  }: INavigationItem,
  ref: React.Ref<HTMLAnchorElement> | undefined
) => {
  const linkStyle: SxProps<Theme> | React.CSSProperties = {
    color: colors.dark,
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize,
    fontWeight,
    transition: 'opacity .15s ease',
    '&:hover': {
      opacity: 0.7,
    },
  };
  if (external)
    return (
      <MUILink href={path} target="_blank" sx={{ ...linkStyle, ...sx }}>
        <Box sx={{ ...linkStyle, ...sx }}>{children || label}</Box>
      </MUILink>
    );
  return (
    <NextLink
      key={path}
      href={path}
      ref={ref}
      {...props}
      passHref
      style={linkStyle}
    >
      <Box sx={{ ...linkStyle, ...sx }}>{children || label}</Box>
    </NextLink>
  );
};
export default React.forwardRef(Link);
