/**
 * Counter Component
 */

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import palette from 'client/styles/base/palette';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class Counter extends React.Component {
  render() {
    const { counter, increment, doubleAsync, classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="headline" style={{ color: palette.primary.brand }}>
          Help
        </Typography>

        <div style={{ margin: '0 auto' }}>
          <h2>Counter: {counter}</h2>
          <button className="btn btn-primary" onClick={increment}>
            Increment
          </button>{' '}
          <button className="btn btn-secondary" onClick={doubleAsync}>
            Double (Async)
          </button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
};

export default withStyles(styles)(Counter);
