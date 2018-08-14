import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import customTheme from 'client/styles/theme';
import CoreLayout from 'client/layouts/CoreLayout';

import commonStyles from 'client/styles/common/index';
import Loader from 'client/components/common/Loader';
import ErrorBoundary from 'client/components/ErrorBoundary';
import AppError from 'client/components/AppError';

const styles = theme => commonStyles;

class App extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <MuiThemeProvider theme={customTheme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <ErrorBoundary fallbackComponent={AppError}>
              <Loader />
              <Router>
                <Switch>
                  <Route path="/" component={CoreLayout} />
                </Switch>
              </Router>
            </ErrorBoundary>
          </MuiPickersUtilsProvider>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
