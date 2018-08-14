import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from 'client/layouts/GlobalHeaderToolBar';

const styles = {
  root: {
    width: '100%',
    display: 'flex',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  globalHeader: {
    boxShadow: '0px 0px 2px 0px #959393',
  },
};

function GlobalHeader(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.globalHeader}>
        <Toolbar />
      </AppBar>
    </div>
  );
}

GlobalHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GlobalHeader);
