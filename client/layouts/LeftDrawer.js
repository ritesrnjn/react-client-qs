import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SidebarItems from 'client/layouts/LeftDrawerItems';
import Typography from '@material-ui/core/Typography';

import palette from 'client/styles/base/palette';

const drawerWidth = 245;

const styles = theme => ({
  menuButton: {
    margin: 5,
    color: '#0662a3',
    flexWrap: 'wrap',
    span: {
      flexWrap: 'wrap',
    },
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',

    // height: "calc(100% - ".concat(70, "px)"),
    height: 'calc(100vh - '.concat(70, 'px)'),
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
    overflowX: 'hidden',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: '10px',
    paddingBottom: '14px',
    paddingLeft: '8px',
    paddingRight: '8px',
    ...theme.mixins.toolbar,
    minHeight: 'auto!important',
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  handleDrawerClose: {
    width: 30,
    height: 30,
  },
  arrowBackIcon: {
    color: palette.primary.lightest,
  },
});

class LeftDrawer extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
        }}
        open={this.state.open}
      >
        <div className={classNames(classes.drawerInner)}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            className={classNames(classes.menuButton, this.state.open && classes.hide)}
          >
            <span className={classes.flexWrap}>
              <MenuIcon />
              <Typography variant="caption" color="inherit" className={classes.flexWrap}>
                Menu
              </Typography>
            </span>
          </IconButton>
          <div className={classNames(classes.drawerHeader, !this.state.open && classes.hide)}>
            <IconButton onClick={this.handleDrawerClose} className={classes.handleDrawerClose}>
              <ArrowBackIcon className={classes.arrowBackIcon} />
            </IconButton>
          </div>
          <List className={classNames(classes.list, !this.state.open && classes.hide)}>
            <SidebarItems />
          </List>
        </div>
      </Drawer>
    );
  }
}

LeftDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LeftDrawer);
