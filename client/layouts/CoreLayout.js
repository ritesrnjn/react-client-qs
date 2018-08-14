/**
 * Define the page layout
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
// MATERIAL DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
// THEME STYLES
import palette from 'client/styles/base/palette';
// COMPONENT DEPENDENCIES
import GlobalHeader from 'client/layouts/GlobalHeader';
import LeftDrawer from 'client/layouts/LeftDrawer';
import NoMatch from 'client/components/NoMatch/';
// PAGES
import Home from 'client/routes/Home';
import About from 'client/routes/About';
import Services from 'client/routes/Services';
import Portfolio from 'client/routes/Portfolio';
import Contact from 'client/routes/Contact';
import Counter from 'client/routes/Counter/containers/CounterContainer';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    overflowX: 'hidden',
  },
  main: {
    zIndex: 1,
    flex: 1,
    position: 'relative',
    display: 'flex',
  },
  content: {
    backgroundColor: palette.background.lightest,
    padding: '24px 24px 0',
    display: 'flex',
    flexGrow: 1,
  },
});

class CoreLayout extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <GlobalHeader />
        <div className={classes.main}>
          <LeftDrawer />
          <div className={classes.content}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/counter" component={Counter} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

CoreLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CoreLayout);
