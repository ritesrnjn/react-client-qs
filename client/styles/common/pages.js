import palette from 'client/styles/base/palette';
import theme from 'client/styles/theme';
import { family, size, weight, lineH } from 'client/styles/base/font';
import { borderRadius } from 'client/styles/base/custom';

const styles = {
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
  },
  dataForm: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  subFormContent: {
    marginTop: '5px',
    paddingLeft: 0,
    pointerEvents: 'none',
    opacity: 0.4,
  },
  subFormEnb: {
    marginTop: '5px',
    paddingLeft: 0,
  },
  supplementSection: {
    border: '1px solid #e31c3d ',
    borderRadius: '5px',
    marginTop: '24px',
    paddingLeft: 0,
  },
};

export default styles;
