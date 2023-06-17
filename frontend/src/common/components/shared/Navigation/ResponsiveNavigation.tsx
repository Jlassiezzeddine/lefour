import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';
import { colors } from '@styles/colors';
import useLinksMap from 'src/common/hooks/useLinks';
import { useWindowSize } from 'usehooks-ts';
import Link from '../Atoms/Link';
import SocialMedia from '../SocialMedia';
import LinksMenu from './LinksMenu';
import { useSocialMedia } from 'src/common/hooks/api/socialMedia';

interface IProps {
  show: boolean;
}
const ResponsiveNavigation = ({ show }: IProps) => {
  const { navigation } = useLinksMap();
  const socialMediaList = useSocialMedia();
  const { height } = useWindowSize();
  const style: SxProps<Theme> = {
    backgroundColor: colors.light,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100vw',
    height: `calc(${height}px)`,
    padding: '124px 24px 24px 24px',
  };
  return (
    <>
      {show && (
        <Stack sx={style} justifyContent="space-between">
          <Stack spacing={4} alignItems="start">
            {navigation.map((item) =>
              item.children ? (
                <LinksMenu key={item.slug} menuLink={item} />
              ) : (
                <Box key={item.label} sx={{ width: '100%' }}>
                  <Link label={item.label} path={item.path} />
                </Box>
              )
            )}
          </Stack>
          <Stack direction="row" alignItems="start" spacing={2}>
            {socialMediaList?.map(
              ({ name, link }) =>
                link && (
                  <SocialMedia
                    key={name}
                    type={name}
                    path={link}
                    color={colors.dark}
                  />
                )
            )}
          </Stack>
        </Stack>
      )}
    </>
  );
};
export default ResponsiveNavigation;
