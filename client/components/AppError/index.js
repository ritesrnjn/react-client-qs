/**
 * Error Component
 */
// REACT DEPENDENCIES
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// MATERIAL DEPENDENCIES
import Typography from '@material-ui/core/Typography';
// THEME STYLES
import palette from 'client/styles/base/palette';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class AppError extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="headline" style={{ color: palette.notification.danger }}>
          App crashed due to some error!!!
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(AppError);
