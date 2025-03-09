import { style } from '@vanilla-extract/css';
import { palette, spacing, typography } from '../../theme';

export const container = style({
  padding: spacing(2),
  margin: `${spacing(2)} auto`,
  boxSizing: 'border-box',
  backgroundColor: 'rgba(244, 67, 54, 0.08)',
  color: palette.error.dark,
  borderRadius: '16px',
  textAlign: 'center',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  border: `1px solid rgba(244, 67, 54, 0.3)`,
  display: 'flex',
  flexDirection: 'column',
  gap: spacing(1),
});

export const icon = style({
  fontSize: '3rem',
  margin: '0 auto',
  color: palette.error.main,
  fontFamily: typography.emojiFontFamily,
});

export const title = style({
  fontSize: '1.5rem',
  fontWeight: 700,
  margin: spacing(1, 0, 0, 0),
  color: palette.error.main,
});

export const text = style({
  fontSize: '1rem',
  lineHeight: 1.6,
  margin: 0,
  padding: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
});
