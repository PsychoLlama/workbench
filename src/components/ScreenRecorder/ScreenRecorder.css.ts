import { keyframes, style } from '@vanilla-extract/css';
import { palette, spacing, breakpoints } from '../../theme';

// Animations
const fadeIn = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const pulse = keyframes({
  '0%': { opacity: 1, transform: 'scale(1)' },
  '50%': { opacity: 0.6, transform: 'scale(1.05)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

const slideUp = keyframes({
  '0%': { transform: 'translateY(20px)', opacity: 0 },
  '100%': { transform: 'translateY(0)', opacity: 1 },
});

// Main container
export const container = style({
  padding: spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: spacing(3),
  width: '100%',
  maxWidth: '95%',
  margin: '0 auto',
  alignItems: 'center',
  animation: `${fadeIn} 0.5s ease-in-out`,
  boxSizing: 'border-box',
  '@media': {
    [breakpoints.sm]: {
      padding: spacing(3),
      maxWidth: '85%',
    },
    [breakpoints.md]: {
      padding: spacing(4),
      maxWidth: '800px',
    },
    [breakpoints.lg]: {
      maxWidth: '1000px',
    },
  },
});

// Header styles
export const header = style({
  margin: `${spacing(2)} 0 ${spacing(3)}`,
  fontSize: '1.8rem',
  color: palette.primary.main,
  textAlign: 'center',
  fontWeight: 700,
  position: 'relative',
  paddingBottom: spacing(1.5),
  width: '100%',
  '@media': {
    [breakpoints.sm]: {
      fontSize: '2.2rem',
      '::after': {
        width: '120px',
      },
    },
    [breakpoints.md]: {
      fontSize: '2.5rem',
      '::after': {
        width: '160px',
      },
    },
  },
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '3px',
    background: `linear-gradient(90deg, ${palette.primary.light}, ${palette.primary.main})`,
    borderRadius: '2px',
  },
});

// Card container for content
export const card = style({
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  padding: spacing(1.5),
  width: '100%',
  maxWidth: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: spacing(2),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  animation: `${slideUp} 0.5s ease-out`,
  overflow: 'hidden',
  boxSizing: 'border-box',
  margin: '0 auto',
  '@media': {
    [breakpoints.sm]: {
      padding: spacing(3),
    },
    [breakpoints.md]: {
      padding: spacing(4),
    },
  },
});

// Button styles
export const button = style({
  appearance: 'none',
  color: palette.primary.main,
  padding: spacing(1.5, 2.5),
  background: 'rgba(255, 255, 255, 0.05)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing(1),
  width: '100%',
  maxWidth: '250px',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: palette.primary.main,
  borderRadius: '12px',
  fontSize: '1rem',
  fontWeight: 600,
  letterSpacing: '0.5px',
  transitionDuration: '250ms',
  transitionProperty: 'all',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  margin: '0 auto',
  '@media': {
    [breakpoints.sm]: {
      fontSize: '1.1rem',
      padding: spacing(1.5, 3),
    },
  },
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(45deg, ${palette.primary.main}, ${palette.primary.light})`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: -1,
  },
  ':hover': {
    color: palette.background.paper || '#fff',
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
    borderColor: 'transparent',
  },
  ':active': {
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  ':disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
    transform: 'none',
    boxShadow: 'none',
  },
  selectors: {
    '&:hover::before': {
      opacity: 1,
    },
  },
});

export const recordingButton = style({
  background: 'rgba(244, 67, 54, 0.1)',
  color: palette.error.main,
  borderColor: palette.error.main,
  '::before': {
    background: `linear-gradient(45deg, ${palette.error.main}, ${palette.error.light || '#ff7961'})`,
  },
  ':hover': {
    color: '#fff',
    borderColor: 'transparent',
  },
});

// Video container
export const videoContainer = style({
  width: '100%',
  marginTop: spacing(3),
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  animation: `${fadeIn} 0.5s ease-in-out`,
  aspectRatio: '16 / 9',
  background: 'rgba(0, 0, 0, 0.2)',
});

export const video = style({
  width: '100%',
  height: '100%',
  display: 'block',
  objectFit: 'contain',
});

// Download link
export const downloadLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing(1),
  marginTop: spacing(3),
  padding: spacing(1.5, 3),
  backgroundColor: 'rgba(76, 175, 80, 0.1)',
  color: palette.secondary?.main || '#4caf50',
  textDecoration: 'none',
  borderRadius: '12px',
  fontWeight: 600,
  fontSize: '1rem',
  letterSpacing: '0.5px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transitionDuration: '250ms',
  transitionProperty: 'all',
  border: `2px solid ${palette.secondary?.main || '#4caf50'}`,
  position: 'relative',
  overflow: 'hidden',
  '@media': {
    [breakpoints.sm]: {
      fontSize: '1.1rem',
    },
  },
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(45deg, ${palette.secondary?.main || '#4caf50'}, ${
      palette.secondary?.light || '#66bb6a'
    })`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: -1,
  },
  ':hover': {
    color: '#fff',
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
    borderColor: 'transparent',
  },
  ':active': {
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  selectors: {
    '&:hover::before': {
      opacity: 1,
    },
  },
});

// Status indicator
export const statusIndicator = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing(1),
  fontSize: '0.9rem',
  fontWeight: 500,
  color: palette.text.secondary,
  margin: spacing(1, 0),
  padding: spacing(0.75, 2),
  borderRadius: '20px',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  '@media': {
    [breakpoints.sm]: {
      fontSize: '1rem',
    },
  },
});

export const recordingDot = style({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: palette.error?.main || '#f44336',
  animation: `${pulse} 1.5s infinite`,
  boxShadow: '0 0 8px rgba(244, 67, 54, 0.6)',
});

// Unsupported browser message
export const unsupportedMessage = style({
  padding: spacing(3),
  margin: spacing(2, 0),
  backgroundColor: 'rgba(244, 67, 54, 0.08)',
  color: palette.error.dark,
  borderRadius: '16px',
  textAlign: 'center',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
  maxWidth: '600px',
  border: `1px solid rgba(244, 67, 54, 0.3)`,
  display: 'flex',
  flexDirection: 'column',
  gap: spacing(2),
  animation: `${fadeIn} 0.5s ease-in-out`,
});

export const unsupportedIcon = style({
  fontSize: '3rem',
  margin: '0 auto',
  color: palette.error.main,
});

export const unsupportedTitle = style({
  fontSize: '1.5rem',
  fontWeight: 700,
  margin: spacing(1, 0, 0, 0),
  color: palette.error.main,
});

export const unsupportedText = style({
  fontSize: '1rem',
  lineHeight: 1.6,
  margin: spacing(0, 0),
  maxWidth: '90%',
  marginLeft: 'auto',
  marginRight: 'auto',
});

// Instructions section
export const instructions = style({
  marginTop: spacing(2),
  padding: spacing(1.5),
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  width: '100%',
  maxWidth: '100%',
  textAlign: 'center',
  boxSizing: 'border-box',
  '@media': {
    [breakpoints.sm]: {
      padding: spacing(2.5),
      maxWidth: '500px',
    },
    [breakpoints.md]: {
      padding: spacing(3),
      maxWidth: '600px',
    },
  },
});

export const instructionsTitle = style({
  fontSize: '1.2rem',
  fontWeight: 600,
  color: palette.primary.main,
  marginBottom: spacing(1.5),
});

export const instructionsList = style({
  textAlign: 'left',
  paddingLeft: spacing(3),
  paddingRight: spacing(1),
  margin: 0,
  color: palette.text.primary,
  listStylePosition: 'outside',
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '100%',
});

export const instructionItem = style({
  marginBottom: spacing(1.5),
  lineHeight: 1.4,
  fontSize: '0.95rem',
  wordBreak: 'break-word',
  '@media': {
    [breakpoints.sm]: {
      fontSize: '1rem',
    },
  },
});
