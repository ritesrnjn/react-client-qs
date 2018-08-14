/**
 * Home Component
 */

import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import palette from 'client/styles/base/palette';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="headline" style={{ color: palette.primary.brand }}>
          Home
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
