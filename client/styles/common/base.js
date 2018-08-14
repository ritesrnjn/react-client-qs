import { common } from '@material-ui/core/colors';

const styles = {
  boxSizing: 'inherit',
  ':before': {
    boxSizing: 'inherit',
  },
  ':after': {
    boxSizing: 'inherit',
  },
  body: {
    margin: 0,
    padding: 0,
    height: '100%',
    minWidth: 768,
  },
  html: {
    margin: 0,
    padding: 0,
    height: '100%',
    boxSizing: 'border-box',
  },
  input: {
    boxShadow: '0px 0px 0px 1000px white inset!important',
  },
};

export default styles;
