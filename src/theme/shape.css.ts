import { createVar, style } from '@vanilla-extract/css';

export const radius = createVar();
export const themeClass = style({
  vars: {
    [radius]: '4px',
  },
});
