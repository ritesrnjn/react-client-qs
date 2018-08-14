// REACT DEPENDENCIES
import React from 'react';
import PropTypes from 'prop-types';
// MATERIAL DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    height: '100%',
    backgroundColor: '#ffffff',
    position: 'fixed',
    zIndex: 1200,
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const Loader = ({ classes, loader }) => {
  return (
    loader > 0 && (
      <div className={classes.root}>
        <CircularProgress className={classes.progress} size={70} />
      </div>
    )
  );
};

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
  loader: PropTypes.number,
};

export default withStyles(styles)(Loader);
