import Link from '@components/shared/Atoms/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';
import { colors } from '@styles/colors';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useIsScrolledDown from 'src/common/hooks/useIsScrolledDown';
import useLinksMap from 'src/common/hooks/useLinks';
import { ILink } from 'src/common/types/Link';
import { useLockedBody, useToggle } from 'usehooks-ts';
import { BurgerButton } from './BurgerButton';
import FancyMegaMenu from './FancyMegaMenu';
import { Logo } from './Logo';
import MegaMenu from './MegaMenu';
import ResponsiveNavigation from './ResponsiveNavigation';

export const navbarHeight = '96px';

const Navigation = () => {
  const router = useRouter();
  const isScrolledDown = useIsScrolledDown();
  const [isMenuOpen, toggle, setIsMenuOpen] = useToggle();

  const [locked, setLocked] = useLockedBody(false, 'root');
  const toggleLocked = () => {
    setLocked(!locked);
  };
  const handleToggleMenu = () => {
    toggle();
    toggleLocked();
  };
  //Styles
  const navbarHero: SxProps<Theme> = {
    position: 'fixed',
    top: 0,
    width: '100%',
    color: colors.dark,
    backgroundColor: isScrolledDown ? colors.light : 'transparent',
    zIndex: 2,
    transition: 'all .3s ease',
  };
  const navbar: SxProps<Theme> = {
    position: 'sticky',
    top: 0,
    width: '100%',
    color: colors.dark,
    backgroundColor: isScrolledDown ? colors.light : 'transparent',
    zIndex: 2,
    transition: 'all .3s ease',
  };

  const { navigation } = useLinksMap();
  const showResponsiveNavigationItems =
    router.asPath === '/' && !isScrolledDown && !isMenuOpen;
  useEffect(() => {
    console.log('navigation', navigation);
  }, [navigation]);
  const renderNavigation = (navigation: ILink[]) => {
    if (showResponsiveNavigationItems) {
      return navigation.map((item) =>
        item.children ? (
          <FancyMegaMenu key={item.label} link={item} />
        ) : (
          <Link
            sx={{ color: colors.light }}
            key={item.label}
            label={item.label}
            path={item.path}
          />
        )
      );
    }
    return navigation.map((item) =>
      item.children ? (
        <MegaMenu key={item.label} link={item} />
      ) : (
        <Link
          sx={{ color: colors.dark }}
          key={item.label}
          label={item.label}
          path={item.path}
        />
      )
    );
  };

  const renderLogo = () => {
    if (showResponsiveNavigationItems) {
      return <Logo color={colors.light} />;
    }
    return <Logo color={colors.dark} />;
  };

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    router.events.on('routeChangeComplete', closeMenu);
    router.events.on('routeChangeError', closeMenu);

    return () => {
      router.events.off('routeChangeComplete', closeMenu);
      router.events.off('routeChangeError', closeMenu);
    };
  }, [router, setIsMenuOpen]);

  return (
    <Box sx={router.asPath === '/' ? navbarHero : navbar}>
      <Container>
        <Box
          sx={{
            position: 'relative',
            height: navbarHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 2,
            borderBottom: `1px solid ${
              isScrolledDown || isMenuOpen ? colors.lightGrey : 'transparent'
            }`,
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={showResponsiveNavigationItems ? 2 : 0}
            zIndex={2}
          >
            <Stack direction="row">
              <BurgerButton
                dark={showResponsiveNavigationItems}
                active={isMenuOpen}
                onClick={handleToggleMenu}
              />
            </Stack>
            {renderLogo()}
          </Stack>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block', md: 'block' },
            }}
          >
            <Stack direction="row" spacing={4} alignItems="center">
              {renderNavigation(navigation)}
            </Stack>
          </Box>

          {/* <RadioButton dark={showResponsiveNavigationItems} /> */}
        </Box>
      </Container>
      <ResponsiveNavigation show={isMenuOpen} />
    </Box>
  );
};

export default Navigation;
