import { createTheme } from '@vanilla-extract/css';

export const [themeClass, transition] = createTheme({
  duration: {
    shortest: '100ms',
    short: '200ms',
    standard: '250ms',
  },
});
