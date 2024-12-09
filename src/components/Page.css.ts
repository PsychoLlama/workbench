import { style, globalStyle } from '@vanilla-extract/css';
import { typography, palette } from '../theme';

globalStyle('body', {
  margin: 0,
  touchAction: 'manipulation',
});

export const page = style({
  fontSize: typography.htmlFontSize,
  fontFamily: typography.fontFamily,
  color: palette.text.primary,
  backgroundColor: palette.background.default,
  minHeight: '100vh',
});
