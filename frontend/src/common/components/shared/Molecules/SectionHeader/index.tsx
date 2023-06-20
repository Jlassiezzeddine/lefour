import Spacer from '@components/shared/Atoms/Spacer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { colors } from '@styles/colors';
import React from 'react';
interface IProps {
  slogan?: string;
  title?: string;
  description?: string;
}
function SectionHeader({ title, slogan, description }: IProps) {
  return (
    <>
      <Box
        sx={{
          height: '2px',
          width: '64px',
          backgroundColor: colors.dark,
          marginBottom: 2,
        }}
      />
      {slogan && <Typography textTransform="uppercase" fontSize={22} fontWeight={700}>
        {slogan}
      </Typography>}
      <Spacer size={1} />
      <Grid container spacing={2} alignItems="start">
        {title && <Grid item color={colors.dark} xs={12} md={4}>
          <Typography
            maxWidth="15ch"
            textTransform="uppercase"
            fontSize={40}
            fontWeight={900}
            lineHeight={1.1}
            color={colors.dark}
          >
            {title}
          </Typography>
        </Grid>}
        {description && <Grid item xs={12} md={8}>
          <Spacer size={0.5} />

          <Typography fontSize={18} fontWeight={500}>
            {description}
          </Typography>
        </Grid>}
      </Grid>
    </>
  );
}

export default SectionHeader;
