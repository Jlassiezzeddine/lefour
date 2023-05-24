export const bleedingBackground = (color: string) => ({
  boxShadow: `0 0 0 100vmax ${color}`,
  clipPath: `inset(0 -100vmax)`,
  backgroundColor: `${color}`,
});
