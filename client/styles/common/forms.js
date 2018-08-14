import palette from 'client/styles/base/palette';
import theme from 'client/styles/theme';
import { family, size, weight, lineH } from 'client/styles/base/font';
import { borderRadius } from 'client/styles/base/custom';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing.unit,
    height: 42,
    marginLeft: 24,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  headerUnderline: {
    left: 0,
    bottom: -10,
    width: 97,
    position: 'absolute',
    height: 4,
    background: palette.primary.light,
    borderRadius: borderRadius.headerUnderline,
  },
  masterHeading: {
    fontFamily: family.primary,
    color: palette.grey.darkest,
    fontWeight: weight.semi,
    marginBottom: 12,
  },
  headingTag: {
    padding: '2px 8px',
    display: 'inline-block',
    margin: '0 0 0 10px',
    borderRadius: borderRadius.headingTag,
    fontSize: size.body1,
    color: palette.grey.darker,
    backgroundColor: palette.primary.lighter,
  },
  headingTeaser: {
    color: palette.grey.darker,
    fontSize: size.body2,
    fontFamily: family.secondary,
    marginBottom: 0,
    marginTop: 0,
  },
  hightlightTextBox: {
    border: '1px solid ' + palette.primary.brand,
    '& > div button': {
      color: palette.primary.brand,
    },
  },
  error: {
    fontFamily: family.secondary,
    color: palette.notification.danger,
    fontSize: size.body1,
    fontWeight: weight.semi,
    lineHeight: lineH.lh_15,
    width: '100%',
    position: 'absolute',
    left: 0,
    bottom: '-18px',
  },
  groupedlineBar: {
    marginLeft: 30,
    '&:before': {
      content: '""',
      width: 3,
      left: '-19px',
      position: 'absolute',
      backgroundColor: palette.primary.light,
    },
  },
  gridContainerGrouped: {
    '&:not(:last-of-type) $groupedlineBar': {
      '&:before': {
        content: '""',
        height: '100%',
      },
    },
    '&:last-of-type $groupedlineBar': {
      '&:before': {
        content: '""',
        height: '62%',
      },
    },
  },
  singleCheckboxHighlight: {
    '&:before': {
      content: '""',
      display: 'block',
      width: '100%',
      height: 80,
      border: '1px solid ' + palette.notification.danger,
      borderRadius: borderRadius.singleCheckboxHighlight,
      position: 'absolute',
      left: 1,
    },
    '& > div': {
      marginTop: 12,
    },
  },
  groupedlineCss: {
    paddingTop: 0 + '!important',
    paddingBottom: 0 + '!important',
  },
  groupedSpace: {
    marginLeft: 15,
  },
  customLabel: {
    fontSize: size.display2,
    fontFamily: family.primary,
    color: palette.grey.darkest,
    fontWeight: weight.semi,
    lineHeight: lineH.formLabel,
    textAlign: 'left',
    position: 'relative',
    marginBottom: 6,
  },
  customReadonlyLabel: {
    fontSize: size.body2,
    fontFamily: family.primary,
    color: palette.grey.darkest,
    fontWeight: weight.semi,
    textAlign: 'left',
    marginBottom: 0,
    '& + div': {
      marginTop: 5,
    },
  },
  customReadonlyInput: {
    fontFamily: family.primary,
    fontSize: size.body2,
    color: palette.primary.lightest,
    fontWeight: weight.semi,
  },
  subHeading: {
    fontFamily: family.primary,
    color: palette.grey.darkest,
    fontWeight: weight.semi,
    position: 'relative',
    marginBottom: 8,
    marginLeft: 0,
    marginRight: 0,
    height: 22,
    lineHeight: lineH.subHeading,
  },
  dynamicSubHeading: {
    fontFamily: family.primary,
    color: palette.grey.darkest,
    fontWeight: weight.semi,
    position: 'relative',
    marginBottom: '-8px!important',
  },
  supTextStyle: {
    fontSize: size.title,
    color: palette.notification.danger,
    verticalAlign: 'sub',
    width: 15,
    textAlign: 'center',
  },
  endInputAdornment: {
    maxHeight: '100%',
  },
  successIcon: {
    color: palette.notification.success,
  },
  errorIcon: {
    color: palette.notification.danger,
  },
  incrementIcon: {
    color: palette.primary.lightest,
  },
  resetIcon: {
    color: palette.notification.danger,
  },
  defaultStatusColor: {
    color: palette.notification.default,
  },
  successStatusColor: {
    color: palette.notification.success,
  },
  warningStatusColor: {
    color: palette.notification.warning,
  },
  dangerStatusColor: {
    color: palette.notification.danger,
  },
  divFullWidth: {
    width: '100%',
  },
  hide: {
    display: 'none',
  },
  formActionBarcover: {
    '& > formActionBar': {
      border: '1px solid red',
      position: 'fixed',
    },
  },
  endAdornment: {
    maxHeight: '100%',
    marginRight: 12,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  showAllFont: {
    fontFamily: family.primary,
    fontSize: size.display3,
    fontWeight: weight.semi,
    lineHeight: lineH.formLabel,
    color: palette.primary.lightest,
    textDecoration: 'none',
    marginLeft: 5,
  },
  cGrids: theme.mixins.gutters({
    position: 'relative',
    paddingTop: '24px!important',
    paddingRight: '10px!important',
    paddingBottom: '18px!important',
    paddingLeft: '10px!important',
  }),
  stringOnly: {
    maxWidth: 32,
    height: 'fit-content',
    padding: '0!important',
    marginTop: '25px',
    '& Input': {
      textAlign: 'center',
    },
  },
  chip: {
    margin: theme.spacing.unit,
    marginLeft: '0px !important',
    marginTop: '0px !important',
    borderRadius: '50px !important',
    height: '65px',
    '&>span': {
      width: '110px',
      paddingRight: '30px',
      PaaddingTop: '0px',
      paddingLeft: '10px',
      paddingBottom: '0px',
      whiteSpace: 'pre-wrap',
    },
    backgroundColor: palette.primary.lightcyan,
    fontWeight: '500',
    fontSize: '14px',
    color: palette.grey.darkergrey,
    border: '1px solid' + palette.grey.darkergrey,
    fontFamily: family.primary,
  },
  customLabelData: {
    backgroundColor: 'palette.primary.lightcyan',
    fontWeight: '500',
    fontSize: '14px',
    color: palette.grey.darkest,
    paddingBottom: '12px',
    fontFamily: family.primary,
  },
  chipColor: {
    backgroundColor: palette.primary.lightest,
    borderRadius: '15px',
    marginBottom: '10px',
    padding: ' 5px 5px',
    fontWeight: 'regular',
    fontSize: '12',
    cursor: 'none',
    fontFamily: family.secondary,
    color: 'white',
  },
  brdgsBtnResetGridPadding: {
    '& > button': {
      marginTop: 38,
    },
  },
  readOnlyInline: {
    flexDirection: 'unset',
    border: '1px solid' + palette.notification.default,
    borderRadius: borderRadius.readOnlyBox,
    paddingRight: 12,
    paddingBottom: 0,
    paddingLeft: 12,
    height: 42,
    '& $customReadonlyLabel': {
      width: 'auto',
      minHeight: 18,
      height: 'auto',
      lineHeight: '16px',
      fontFamily: family.secondary,
      fontSize: size.display3,
      paddingTop: 12,
      paddingBottom: 12,
      paddingRight: 5,
    },
    '& $customReadonlyInput': {
      width: '30%',
      minHeight: 18,
      lineHeight: '18px',
      height: 'auto',
      margin: 0,
      fontFamily: family.secondary,
      fontSize: size.display3,
      paddingLeft: 2,
      color: palette.primary.lightest,
      paddingTop: 12,
      paddingBottom: 12,
    },
  },
  dividerStyle: {
    borderBottom: '1px solid ' + palette.grey.light,
  },
};

export default styles;
