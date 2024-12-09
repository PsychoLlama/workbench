import { style } from '@vanilla-extract/css';
import { spacing } from '../theme';

export const header = style({
  margin: 0,
  padding: spacing(1),
});

export const launchers = style({
  padding: spacing(1, 2),
  margin: 0,
});

export const launcher = style({
  color: 'inherit',
});
