/**
 * Unknown Route
 */

import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import palette from 'client/styles/base/palette';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class NoMatch extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="headline" style={{ color: palette.notification.danger }}>
          Page Not Found!!!
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(NoMatch);
