import { style } from '@vanilla-extract/css';
import { palette, spacing } from '../theme';

export const container = style({
  padding: spacing(1),
  display: 'flex',
  flexDirection: 'column',
  gap: spacing(1),
});

export const header = style({
  margin: 0,
});

export const button = style({
  appearance: 'none',
  color: 'inherit',
  padding: spacing(0.5, 1),
  background: 'none',
  cursor: 'pointer',
  display: 'block',
  width: 'max-content',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: palette.primary.main,
  borderRadius: '4px',
  transitionDuration: '200ms',
  transitionProperty: 'background, color',
  ':hover': {
    background: palette.primary.main,
    color: palette.background.default,
  },
});
