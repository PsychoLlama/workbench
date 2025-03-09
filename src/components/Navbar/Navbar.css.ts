import { style } from '@vanilla-extract/css';
import { spacing, palette, breakpoints } from '../../theme';

export const navbar = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: spacing(0.5, 1),
  boxSizing: 'border-box',
  width: '100%',
  borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
  background: 'rgba(0, 0, 0, 0.2)',
  fontSize: '1.2rem',
  '@media': {
    [breakpoints.md]: {
      fontSize: '1.5rem',
    },
  },
});

export const header = style({
  margin: 0,
  fontSize: 'inherit',
  fontWeight: 700,
  color: palette.text.secondary,
});

export const githubLink = style({
  color: palette.text.secondary,
  fontSize: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing(0.5),
  borderRadius: '50%',
  transition: 'all 0.2s ease',
  ':hover': {
    color: palette.primary.main,
    transform: 'scale(1.1)',
  },
});
