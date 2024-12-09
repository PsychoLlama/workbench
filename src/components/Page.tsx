import type {
  WrapPageElementBrowserArgs,
  WrapPageElementNodeArgs,
} from 'gatsby';
import React from 'react';
import cx from 'classnames';
import { themeClass as paletteClass } from '../theme/palette.css';
import { themeClass as shapeClass } from '../theme/shape.css';
import { themeClass as spacingClass } from '../theme/spacing.css';
import { themeClass as transitionClass } from '../theme/transition.css';
import { themeClass as typographyClass } from '../theme/typography.css';
import * as styles from './Page.css';

export const Page = ({
  element,
}: WrapPageElementBrowserArgs | WrapPageElementNodeArgs) => {
  return (
    <div
      className={cx(
        styles.page,
        paletteClass,
        shapeClass,
        spacingClass,
        transitionClass,
        typographyClass,
      )}
    >
      {element}
    </div>
  );
};
