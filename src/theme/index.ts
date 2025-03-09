/**
 * Material Design Palette. Scraped from their docs.
 *
 * @see https://mui.com/material-ui/customization/default-theme/
 * @license MIT
 */

import { unit } from './spacing.css';
import { radius } from './shape.css';

export const spacing = (...factors: [number, ...Array<number>]) =>
  factors.map((factor) => `calc(${factor} * ${unit})`).join(' ');

export const shape = { radius };

export { palette } from './palette.css';
export { transition } from './transition.css';
export { typography } from './typography.css';
export { breakpoints } from './breakpoints.css';
export { grey } from './color';
