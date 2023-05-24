import { keyframes } from '@emotion/react';
import Box from '@mui/material/Box';
import { colors } from '@styles/colors';

export default function SpinningMessage({ ...props }) {
  const rotate = keyframes({
    from: { transform: 'rotate(200deg)' },
    to: { transform: 'rotate(-160deg)' },
  });
  return (
    <Box
      sx={{
        width: '180px',
        height: '180px',
        textTransform: 'uppercase',
        fill: colors.light,
        fontWeight: 'bold',
        animation: `${rotate} 20s linear infinite`,
      }}
      {...props}
    >
      <svg viewBox="0 0 200 200">
        <path
          id="textPath"
          d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
          transform="translate(100,100)"
          fill="none"
          strokeWidth="0"
        ></path>
        <g fontSize="20px">
          <text textAnchor="start">
            <textPath xlinkHref="#textPath" startOffset="0%">
              {`INTERNATIONAL - CREATIVE - COLLABORATION - HUB -`}
            </textPath>
          </text>
        </g>
      </svg>
    </Box>
  );
}
