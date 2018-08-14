import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// MATERIAL DEPENDENCIES
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Grid from '@material-ui/core/Grid';
// THEME STYLES
import palette from 'client/styles/base/palette';
import { family, lineH, size } from 'client/styles/base/font';
import { borderRadius } from 'client/styles/base/custom';
import formStyles from 'client/styles/common/forms';
import LensIcon from '@material-ui/icons/Lens';

import logoImage from 'client/assets/logo.png';

const styles = {
  ...formStyles,
  root: {
    background: palette.white.base,
  },
  flex: {
    flex: 1,
  },
  logo: {
    width: 96,
  },
  rightMenu: {
    display: 'flex',
    position: 'relative',
  },
  notifications: {
    marginRight: 20,
    fontSize: 22,
  },
  headerSpacingAdjust: {
    paddingLeft: 14,
    minHeight: 70,
    paddingRight: 14,
  },
  userNameFont: {
    fontFamily: family.secondary,
    fontSize: size.display3,
    color: palette.grey.darkest,
    lineHeight: lineH.textfield,
    paddingRight: 28,
    paddingTop: 2,
    cursor: 'pointer',
  },
  userDropdownCaret: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 22,
    height: 22,
  },
  notificationBell: {
    position: 'relative',
  },
  feedTimeStyle: {
    margin: 0,
    position: 'absolute',
    top: '-3px',
    right: 19,
  },
  notifyColors: {
    width: 8,
    height: 8,
    borderRadius: '100%',
    float: 'right',
    marginTop: 0,
    marginRight: 2,
  },
  userProfileMenuItems: {
    fontFamily: family.secondary,
    fontSize: size.body2,
    color: palette.grey.darkest,
  },
  toolbarNotification: {
    paddingTop: '15px !important',
    marginLeft: 'auto',
  },
  selectBoxStyle: {
    width: '100%',
    height: 42,
    borderRadius: borderRadius.selectBoxStyle,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    fontFamily: family.primary,
    fontSize: size.body2,
    color: palette.grey.darkest,
    '& > div > div': {
      paddingLeft: 7,
      paddingRight: 10,
      paddingTop: 1,
      height: 100 + '%',
      padding: 0,
      lineHeight: '36px',
      backgroundColor: 'transparent!important',
    },
    '& > div > svg': {
      marginRight: 10,
      fontSize: 25,
    },
  },
};

class HeaderToolBar extends React.Component {
  state = {
    value: 0,
    anchorEl: null,
    type: {
      options: [
        {
          label: 'All',
          value: '1',
        },
      ],
    },
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <Toolbar className={classes.headerSpacingAdjust}>
          <Grid container spacing={8}>
            <Grid item xs={2}>
              <img alt="logo" className={classes.logo} src={logoImage} />
            </Grid>

            <Grid item className={classes.toolbarNotification}>
              <Typography variant="title" color="inherit" className={classes.flex} />
              <div className={classes.rightMenu}>
                <div className={classes.notificationBell}>
                  <NotificationsNoneIcon color="primary" className={classes.notifications} />
                  <p className={classes.feedTimeStyle}>
                    <LensIcon
                      className={classNames(classes.notifyColors, classes.dangerStatusColor)}
                    />
                  </p>
                </div>
                <div
                  className={classes.rightMenu}
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  onKeyDown={this.handleMenu}
                  role="presentation"
                >
                  <Typography className={classes.userNameFont} variant="subheading">
                    Hi, User
                  </Typography>
                  <ArrowDropDownIcon color="primary" className={classes.userDropdownCaret} />
                </div>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose} className={classes.userProfileMenuItems}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={this.handleClose} className={classes.userProfileMenuItems}>
                    My account
                  </MenuItem>
                </Menu>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </div>
    );
  }
}

HeaderToolBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderToolBar);
