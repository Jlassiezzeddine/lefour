import Link from '@components/shared/Atoms/Link';

interface IProps {
  color: string;
}
export const Logo = ({ color }: IProps) => (
  <Link
    fontSize={20}
    fontWeight={700}
    path={'/'}
    label="Le Four Studio"
    sx={{ color: color, width: 'fit-content' }}
  />
);
