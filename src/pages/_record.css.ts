import { keyframes, style } from '@vanilla-extract/css';
import { palette, spacing } from '../theme';

export const container = style({
  padding: spacing(3),
  display: 'flex',
  flexDirection: 'column',
  gap: spacing(2),
  maxWidth: '1000px',
  margin: '0 auto',
  alignItems: 'center',
});

export const header = style({
  margin: `${spacing(2)} 0`,
  fontSize: '2.5rem',
  color: palette.primary.main,
  textAlign: 'center',
  fontWeight: 600,
  borderBottom: `2px solid ${palette.primary.light}`,
  paddingBottom: spacing(1),
});

export const button = style({
  appearance: 'none',
  color: palette.primary.main,
  padding: spacing(1, 2),
  background: 'none',
  cursor: 'pointer',
  display: 'block',
  width: 'max-content',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: palette.primary.main,
  borderRadius: '8px',
  fontSize: '1.1rem',
  fontWeight: 500,
  transitionDuration: '200ms',
  transitionProperty: 'background, color, transform, box-shadow',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  ':hover': {
    background: palette.primary.main,
    color: palette.background.default,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
  },
  ':active': {
    transform: 'translateY(0)',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
});

export const recordingButton = style({
  background: palette.error?.main || '#f44336',
  color: palette.background.default,
  borderColor: palette.error?.main || '#f44336',
  ':hover': {
    background: palette.error?.dark || '#d32f2f',
    borderColor: palette.error?.dark || '#d32f2f',
  },
});

export const videoContainer = style({
  width: '100%',
  marginTop: spacing(2),
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
});

export const video = style({
  width: '100%',
  display: 'block',
});

export const downloadLink = style({
  display: 'inline-block',
  marginTop: spacing(2),
  padding: spacing(1, 2),
  backgroundColor: palette.secondary?.main || '#4caf50',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '8px',
  fontWeight: 500,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transitionDuration: '200ms',
  transitionProperty: 'background, transform, box-shadow',
  ':hover': {
    backgroundColor: palette.secondary?.dark || '#388e3c',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
  },
});

export const statusIndicator = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing(0.5),
  fontSize: '0.9rem',
  color: palette.text.secondary,
  margin: spacing(1, 0),
});

const pulse = keyframes({
  '0%': { opacity: 1 },
  '50%': { opacity: 0.4 },
  '100%': { opacity: 1 },
});

export const recordingDot = style({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: palette.error?.main || '#f44336',
  animation: `${pulse} 1.5s infinite`,
});
