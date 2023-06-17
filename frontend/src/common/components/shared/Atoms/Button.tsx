import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { CircularProgress, Link } from '@mui/material';
import MUIButton from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import { darken } from '@mui/material/styles';
import { SxProps, Theme } from '@mui/system';
import { colors } from '@styles/colors';
import { MouseEventHandler } from 'react';
type ButtonVariation = 'primary' | 'secondary' | 'tertiary';
interface IProps {
  label: string;
  fullWidth?: boolean;
  variant?: ButtonVariation;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  href?: string;
  dark?: boolean;
  external?: boolean;
  loading?: boolean;
}

// eslint-disable-next-line no-unused-vars

export default function Button({
  label,
  variant = 'primary',
  onClick,
  href,
  disabled = false,
  fullWidth = false,
  dark = false,
  external = false,
  loading = false,
}: IProps) {
  const getVariationStyle: () => SxProps<Theme> = () => {
    switch (true) {
      case variant === 'primary':
        return {
          backgroundColor: dark ? colors.light : colors.dark,
          color: dark ? colors.dark : colors.light,
          border: `1px solid ${dark ? colors.light : colors.dark}`,
          '&:hover': {
            backgroundColor: darken(
              dark ? colors.light : colors.dark,
              dark ? 0.2 : 0.5
            ),
            color: dark ? colors.dark : colors.light,
          },
        };
      case variant === 'secondary':
        return {
          backgroundColor: 'transparent',
          border: `1px solid ${dark ? colors.light : colors.dark}`,
          color: dark ? colors.light : colors.dark,
          '&:hover': {
            backgroundColor: `${colors.light}20`,
          },
        };
      case variant === 'tertiary':
        return {
          backgroundColor: 'transparent',
          color: dark ? colors.light : colors.dark,
          padding: 0,
          position: 'relative',

          '& svg': {
            opacity: 0,
            maxWidth: 0,
            transition: 'all .3s ease',
            transform: 'translateX(-8px)',
          },
          '&:hover': {
            '& svg': {
              marginLeft: 2,
              maxWidth: 'fit-content',
              opacity: 1,
              transform: 'translateX(0)',
            },
          },
        };

      default:
        return {
          backgroundColor: colors.light,
          color: colors.grey,
          '&:hover': {
            backgroundColor: `${colors.light}20`,
          },
        };
    }
  };
  const commonStyle: SxProps<Theme> = {
    paddingX: 4,
    paddingY: 1.5,
    borderRadius: 0.5,
    textTransform: 'uppercase',
    fontSize: '14px',
    fontWeight: '600',
    opacity: disabled ? 0.5 : 1,
    transition: 'all .3s ease',
    width: fullWidth ? '100%' : 'unset',
  };

  const buttonStyle = {
    ...commonStyle,
    ...getVariationStyle(),
  };

  if (href)
    return (
      <MUIButton
        disabled={disabled}
        LinkComponent={Link}
        href={href}
        target={external ? '_blank' : undefined}
        sx={buttonStyle}
        disableRipple={variant === 'tertiary'}
      >
        {label}
        {variant === 'tertiary' && <ArrowRightAltIcon />}
      </MUIButton>
    );
  return (
    <ButtonBase
      disabled={disabled}
      onClick={onClick}
      sx={buttonStyle}
      disableRipple={variant === 'tertiary'}
    >
      {loading ? <CircularProgress color="inherit"  size={16}/> : <>
        {label}
        {variant === 'tertiary' && <ArrowRightAltIcon />}
      </>}
    </ButtonBase>
  );
}
