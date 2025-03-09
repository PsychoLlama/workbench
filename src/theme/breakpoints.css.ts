/**
 * Media Query breakpoints. Recommended approach is to use mobile-first styles
 * as the default, then override with larger breakpoints.
 *
 * @example
 * const list = style({
 *   display: 'flex',
 *   flexDirection: 'column',
 *   '@media': {
 *     [breakpoints.md]: {
 *       flexDirection: 'row',
 *     },
 *   }
 * })
 */
export const breakpoints = {
  sm: 'screen and (min-width: 600px)',
  md: 'screen and (min-width: 960px)',
  lg: 'screen and (min-width: 1280px)',
  xl: 'screen and (min-width: 1920px)',
} as const;
