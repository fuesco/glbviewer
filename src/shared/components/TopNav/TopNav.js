import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: '#222222',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopNav() {
  const classes = useStyles();
  /*
  const preventDefault = event => event.preventDefault();
  */
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <span role="img" aria-label="crystalball">🔮</span>&nbsp;glTFViewer
          </Typography>
          <Link href="https://github.com/jetlaglabs" color="inherit">
            Source
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}