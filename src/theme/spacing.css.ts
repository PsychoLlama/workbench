import { createVar, style } from '@vanilla-extract/css';

export const unit = createVar();
export const themeClass = style({
  vars: {
    [unit]: '1rem',
  },
});
