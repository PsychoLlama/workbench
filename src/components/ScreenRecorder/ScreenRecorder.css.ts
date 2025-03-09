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

// Layout containers
export const container = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  flex: 1,
  animation: `${fadeIn} 0.5s ease-in-out`,
  boxSizing: 'border-box',
  padding: spacing(1),
  '@media': {
    [breakpoints.md]: {
      gridTemplateColumns: 'auto max-content',
      gap: spacing(2),
      padding: spacing(1),
    },
  },
});

export const mainContent = style({
  flex: 1,
  width: '100%',
});

export const sidebar = style({
  marginTop: spacing(4),
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    [breakpoints.md]: {
      marginTop: 0,
      maxWidth: '350px',
    },
  },
});

export const sidebarHeader = style({
  fontSize: '1.5rem',
  fontWeight: 600,
  margin: 0,
  marginBottom: spacing(1),
  color: palette.text.primary,
  borderBottom: `1px solid ${palette.divider}`,
  textAlign: 'center',
});

export const sidebarContent = style({
  background: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '12px',
  padding: spacing(2),
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: palette.text.secondary,
  fontStyle: 'italic',
  border: `1px dashed ${palette.divider}`,
});

// Button styles
export const button = style({
  appearance: 'none',
  color: palette.primary.main,
  padding: spacing(1, 2),
  background: 'transparent',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing(1),
  width: '100%',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: palette.primary.main,
  borderRadius: '4px',
  fontSize: '0.9rem',
  fontWeight: 500,
  transition: 'background 0.2s ease',
  '@media': {
    [breakpoints.sm]: {
      fontSize: '1rem',
      padding: spacing(1, 2.5),
      maxWidth: 'max-content',
    },
  },
  ':hover': {
    background: 'rgba(255, 255, 255, 0.05)',
  },
  ':active': {
    background: 'rgba(255, 255, 255, 0.1)',
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

export const recordingButton = style({
  color: palette.error.main,
  borderColor: palette.error.main,
  ':hover': {
    background: 'rgba(244, 67, 54, 0.05)',
  },
  ':active': {
    background: 'rgba(244, 67, 54, 0.1)',
  },
});

// Video content
export const videoContainer = style({
  width: '100%',
  borderRadius: '4px',
  overflow: 'hidden',
  border: `1px solid ${palette.divider}`,
  animation: `${fadeIn} 0.5s ease-in-out`,
  background: 'rgba(0, 0, 0, 0.2)',
  margin: 0,
  marginBottom: spacing(2),
  display: 'flex',
  flexDirection: 'column',
  '@media': {
    [breakpoints.md]: {
      maxWidth: '75%',
    },
    [breakpoints.lg]: {
      maxWidth: '50%',
    },
  },
});

export const videoHeader = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: spacing(1),
  background: 'rgba(0, 0, 0, 0.3)',
  borderBottom: `1px solid ${palette.divider}`,
  color: palette.text.secondary,
  fontSize: '0.85rem',
});

export const videoTitle = style({
  fontWeight: 500,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  maxWidth: '80%',
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  color: 'inherit',
  ':hover': {
    color: palette.primary.main,
  },
});

export const downloadButton = style({
  fontSize: '0.9rem',
  color: 'inherit',
  transition: 'color 0.2s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ':hover': {
    color: palette.primary.main,
  },
});

export const downloadSuccess = style({
  color: palette.success?.main || '#4caf50',
});

export const video = style({
  width: '100%',
  display: 'block',
  objectFit: 'contain',
  background: 'rgba(0, 0, 0, 0.1)',
});

// Download link
export const downloadLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing(1),
  padding: spacing(1, 2),
  color: palette.secondary?.main,
  textDecoration: 'none',
  borderRadius: '4px',
  fontWeight: 500,
  fontSize: '0.9rem',
  background: 'transparent',
  border: `1px solid ${palette.secondary?.main}`,
  transition: 'background 0.2s ease',
  '@media': {
    [breakpoints.sm]: {
      fontSize: '1rem',
      padding: spacing(1, 2.5),
    },
  },
  ':hover': {
    background: 'rgba(76, 175, 80, 0.05)',
  },
  ':active': {
    background: 'rgba(76, 175, 80, 0.1)',
  },
});

// Status indicator
export const statusIndicator = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing(1),
  marginBottom: spacing(1),
  fontSize: '0.9rem',
  fontWeight: 500,
  color: palette.text.secondary,
  padding: spacing(0.75, 2),
  borderRadius: '0.5rem',
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
  backgroundColor: palette.error.main,
  animation: `${pulse} 1.5s infinite`,
  boxShadow: '0 0 8px rgba(244, 67, 54, 0.6)',
});

// Instructions section
export const instructionsTitle = style({
  fontSize: '1.2rem',
  fontWeight: 600,
  color: palette.text.primary,
  margin: 0,
  marginBottom: spacing(1.5),
});

export const instructionsList = style({
  color: palette.text.primary,
  margin: 0,
  marginBottom: spacing(2),
  padding: 0,
  listStylePosition: 'inside',
});

export const instructionItem = style({
  marginBottom: spacing(1),
  lineHeight: 1.5,
  fontSize: '1rem',
});
