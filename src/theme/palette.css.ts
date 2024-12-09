import { createTheme } from '@vanilla-extract/css';
import {
  blue,
  purple,
  red,
  orange,
  lightBlue,
  green,
  background,
} from './color';

/**
 * Material Design Palette. Scraped from their docs.
 *
 * @see https://mui.com/material-ui/customization/color/
 * @license MIT
 */

/** Dark theme. */
export const [themeClass, palette] = createTheme({
  primary: {
    light: blue[50],
    main: blue[200],
    dark: blue[400],
  },
  secondary: {
    light: purple[50],
    main: purple[200],
    dark: purple[400],
  },
  error: {
    light: red[300],
    main: red[500],
    dark: red[700],
  },
  warning: {
    light: orange[300],
    main: orange[400],
    dark: orange[700],
  },
  info: {
    light: lightBlue[300],
    main: lightBlue[400],
    dark: lightBlue[700],
  },
  success: {
    light: green[300],
    main: green[400],
    dark: green[700],
  },

  divider: 'rgba(0, 0, 0, 0.12)',

  text: {
    primary: 'white',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },

  background: {
    paper: background.dark,
    default: background.dark,
  },
});
