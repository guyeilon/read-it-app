import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Avatar } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Me from '../assets/images/me.png';

const useStyles = makeStyles(theme => {
  return {
    root: {
      display: 'flex',
    },
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(5),
      paddingLeft: 50,
      paddingRight: 20,
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
      },
    },
    drawer: {
      zIndex: 0,
      [theme.breakpoints.up('sm')]: {
        width: 240,
      },
    },
    drawerPaper: {
      marginTop: 55,
      width: 50,

      [theme.breakpoints.up('sm')]: {
        width: 240,
      },
    },
    active: {
      background: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      zIndex: 1,
    },
    toolbar: theme.mixins.toolbar,
    logoLg: {
      flexGrow: 1,

      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    logoSm: {
      flexGrow: 1,

      display: 'block',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },

    header: {
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
    text: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  };
});

function Layout({ children }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My Books',
      icon: <LocalLibraryIcon color='primary' />,
      path: '/favoritesBooks',
    },
    {
      text: 'Serch Books',
      icon: <SearchIcon color='primary' />,
      path: '/',
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6' className={classes.logoLg}>
            READ-IT welcome to our website
          </Typography>
          <Typography variant='h6' className={classes.logoSm}>
            READ-IT
          </Typography>
          <Typography>Guy</Typography>
          <Avatar src={Me} alt='Guy Avatar' className={classes.avatar} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          {menuItems.map(item => (
            <ListItem
              key={item.text}
              button
              onClick={() => navigate(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText className={classes.text} primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
