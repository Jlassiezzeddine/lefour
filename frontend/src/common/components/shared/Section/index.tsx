import Container from '@mui/material/Container';

import SectionHeader from '../Molecules/SectionHeader';
import Spacer from '../Atoms/Spacer';

interface IProps {
  children: JSX.Element;
  title?: string;
  slogan?: string;
  description?: string;
}
export default function Section({
  title,
  slogan,
  description,
  children,
}: IProps) {
  return (
    <Container>
      <Spacer size={8} />
      <SectionHeader slogan={slogan} title={title} description={description} />
      <Spacer size={8} />
      {children}
      <Spacer size={8} />
    </Container>
  );
}
