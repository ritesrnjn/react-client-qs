/**
 * Overrides the material theme object globally.
 * Returns custom theme object
 *
 * Full list of keys: https://material-ui-next.com/customization/theme-default/
 *
 */

import { createMuiTheme } from '@material-ui/core/styles';

import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import palette from 'client/styles/base/palette';
import { family, size, weight } from 'client/styles/base/font';

const secondaryColor = indigo;
const errorColor = red;

// All the following keys are optional.
export default createMuiTheme({
  palette: {
    primary: {
      light: palette.primary.light,
      main: palette.primary.lightest,
      dark: palette.primary.dark,
    },
    secondary: {
      light: secondaryColor.A200,
      main: secondaryColor.A400,
      dark: secondaryColor.A700,
    },
    error: {
      light: errorColor[300],
      main: errorColor[500],
      dark: errorColor[700],
    },
  },

  typography: {
    fontFamily: `"${family.primary}", ${family.fallback}`,
    headline: {
      fontSize: size.headline,
      fontWeight: weight.bold,
      fontFamily: `"${family.primary}", ${family.fallback}`,
    },
    title: {
      fontSize: size.title,
      fontWeight: weight.regular,
      fontFamily: `"${family.primary}", ${family.fallback}`,
    },
    display4: {
      fontSize: size.display4,
      fontWeight: weight.bold,
      fontFamily: `"${family.primary}", ${family.fallback}`,
    },
    display3: {
      fontSize: size.display3,
      fontWeight: weight.medium,
      fontFamily: `"${family.primary}", ${family.fallback}`,
    },
    display2: {
      fontSize: size.display2,
      fontWeight: weight.medium,
      fontFamily: `"${family.primary}", ${family.fallback}`,
    },
    display1: {
      fontSize: size.display1,
      fontWeight: weight.regular,
      fontFamily: `"${family.primary}", ${family.fallback}`,
    },
    body2: {
      fontSize: size.body2,
      fontWeight: weight.regular,
      fontFamily: `"${family.secondary}", ${family.fallback}`,
    },
    body1: {
      fontSize: size.body1,
      fontWeight: weight.regular,
      fontFamily: `"${family.secondary}", ${family.fallback}`,
    },
  },
});
