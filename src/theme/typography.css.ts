import { createTheme } from '@vanilla-extract/css';

export const [themeClass, typography] = createTheme({
  htmlFontSize: '16px',
  fontFamily: "'Inter Variable', sans-serif",
  emojiFontFamily: "'Noto Color Emoji', sans-serif",
});
