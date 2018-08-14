/*eslint-disable*/
import React from 'react'
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { family, size , weight , lineH } from 'client/styles/base/font';
import { borderRadius } from 'client/styles/base/custom';
import palette from 'client/styles/base/palette';
import formStyles from 'client/styles/common/forms';

let sidebarItems = [
  {
    id: 'home',
    title: 'Home',
    url: '/',
    icon: 'event_note',
    drawer: [],
  },
  {
    id: 'about',
    title: 'About',
    url: '/about',
    icon: 'date_range',
    drawer: [],
  },
  {
    id: 'services',
    title: 'Services',
    url: '/services',
    icon: 'insert_chart',
    drawer: [],
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    url: '/portfolio',
    icon: 'portrait',
    drawer: [],
  },
  {
    id: 'contact',
    title: 'Contact',
    url: '/contact',
    icon: 'restaurant',
    drawer: [],
  },
  {
    id: 'counter',
    title: 'Counter',
    url: '/counter',
    icon: 'help',
    drawer: [],
  },
]

const styles = {
  ...formStyles,
  listItem: {
    padding: 0,
  },
  listItemInner: {
    '& h3': {
      paddingLeft: 38,
    },
    '& a': {
      paddingLeft: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      },

    },
    '& li': {
      listStyle: 'circle',
    },
    '& span:nth-of-type(2)': {
      borderLeft: '1px solid' + palette.grey.darkest,
      height: '100%',
      top: '26px',
      width: '1px',
      left: '-27px',
      zIndex: '-100',
    },
  },
  navLinkButton: {
    justifyContent: 'left',
    width: '100%',
    paddingTop: 9,
    paddingBottom: 9,
    paddingRight: 8,
    paddingLeft: 12,
    borderRadius: 0,
    color: palette.grey.darkest,
    fontFamily: family.secondary,
    fontSize: size.display3,
    textTransform: 'capitalize',
    "&:hover": {
      color: palette.primary.lightest,
      backgroundColor: palette.primary.lightcyan,
      "& svg,& $listIcon": {
        color: palette.primary.lightest
      }
    },
    '& svg': {
      padding: 0,
      marginLeft: 'auto',
      color: palette.grey.darkest,
      width: 22,
      height: 22
    }
  },
  activeButton: {
    color: palette.primary.lightest,
    backgroundColor: palette.primary.lightcyan,
    "& svg,& $listIcon": {
      color: palette.primary.lightest
    }
  },
  listIcon: {
    color: palette.grey.dark,
    fontSize: 20,
    padding: 0,
    marginTop: 0,
    marginRight: 12,
    marginBottom: 0,
    marginLeft: 0,
    width: 22,
    height: 22,
    lineHeight: lineH.lh_23
  },
  activeListIcon:{
    color: palette.primary.lightest,
    fontSize: 20,
    padding: 0,
    marginTop: 0,
    marginRight: 12,
    marginBottom: 0,
    marginLeft: 0,
    width: 22,
    height: 22,
    lineHeight: lineH.lh_23
  },
  listTreeIcon: {
    fontSize: 11,
    marginLeft: 12,
    width: 12,
    marginRight: 20,
    color: palette.grey.dark,
  },
  activeListTreeIcon: {
    color: palette.primary.lightest,
    width: 14,
    fontSize: 14,
    marginLeft: 10,
    marginRight: 19,
    paddingLeft: 1
  },
  listItemText: {
    whiteSpace: 'nowrap',
    '& h3': {
      paddingLeft: 20,
      color: palette.grey.dark,
      fontFamily: family.secondary,
      fontSize: size.display2,
      textTransform: 'capitalize',
    },
  },
  nestedMenu: {
    padding: 0,
    '& h3': {
      color: palette.grey.darkest,
      '&:hover': {
        color: palette.primary.brand,
      },
    },
    '& a': {
      '&:hover': {
        color: palette.primary.brand,
      },
    },
  },
  displayBullet: {},
  activeButtonInner: {
    color: palette.primary.lightest,
  },
  dividerStyle: {
    marginBottom: 5,
  },
  headerSideBarTopText: {
    padding: '12px 18px 12px 20px',
  },
  headerApplicationTitle: {
    fontSize: size.display1,
    fontWeight: weight.semi,
    color: palette.grey.darkest
  },
  applicationLabel: {
    fontSize: size.display3,
    fontWeight: weight.semi,
    color: palette.grey.darkest,
    fontFamily: family.secondary
  },
  applicationValue: {
    fontSize: size.display1,
    fontWeight: weight.semi,
    color: palette.grey.darker,
    fontFamily: family.primary
  },
  applicationNameHighlight: {
    color: palette.primary.lightest
  },
  applicationUserRoleHighlight: {
    margin: '0 0 0 10px',
    padding: '5px 12px',
    display: 'inline-block',
    borderRadius: borderRadius.headingTag,
    backgroundColor: palette.primary.lightest,
    color: palette.white.base,
    fontFamily: family.primary,
    lineHeight: lineH.lh_15,
    fontSize: size.body1,
    fontWeight: weight.regular
  },
  statusTextColor: {
    color: palette.notification.pending,
  },
  navLink: {
    justifyContent: 'left',
  }
}

class LeftDrawerItems extends React.Component {
  state = {
    open: false,
  }

  render () {
    const {classes} = this.props

    return (
      <div className={classes.divFullWidth}>
        {sidebarItems.map((item, index) => (
          <div
            className={classes.divFullWidth}
            key={index}
          >
            <ListItem className={classes.listItem}>
              {item.drawer.length === 0 && (
                <Button
                  component={props => (
                    <NavLink
                      className={classes.navLink}
                      exact
                      activeClassName={classes.activeButton}
                      to={item.url}
                      {...props}
                    />
                  )}
                  className={classNames(classes.button, classes.navLinkButton)}
                >
                  {item.icon && (
                    <Icon className={classes.listIcon}>{item.icon}</Icon>
                  )}
                  {item.title}
                </Button>
              )}

              {item.drawer.length > 0 && (
                <Button
                  classes={{
                    label: classes.divFullWidth
                  }}
                  className={classNames(
                    classes.button,
                    classes.navLinkButton,
                    {
                      [classes.activeButton]: this.state[`${item.title.toLowerCase().replace(/ /g, '-')}`]
                    }
                  )}
                  onClick={() => {
                    this.handleClick(item.title.toLowerCase().replace(/ /g, '-'))
                  }}
                >
                  {item.icon !== '' && (
                    <Icon className={
                      classNames({
                        [classes.listIcon]: !this.state.open,
                        [classes.activeListIcon]: this.state.open
                      })

                    }>{item.icon}</Icon>
                  )}
                  {item.title}
                  {this.state.open && <ExpandLess />}
                  {!this.state.open && <ExpandMore />}
                </Button>
              )}
            </ListItem>
          </div>
        ))}
      </div>
    )
  }
}

LeftDrawerItems.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, {withTheme: true})(LeftDrawerItems)
