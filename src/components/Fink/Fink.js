import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Fink = (props) => {
  const { name, login, filled, action, routeTo, ...rest } = props;

  

  const useStyles = makeStyles((theme) => ({
    root: {
  
    },
    link: {
      // width: theme.spacing(12),
      // height: theme.spacing(4),
      fontFamily: 'IBM Plex Sans Condensed',
      fontSize: '12px',
      fontWeight: 700,
      color: filled? '#333333': "inherit",
      textDecoration: 'none',
      '&:hover': {
        color: login ? theme.palette.secondary.light.contrastText: theme.palette.primary.light,
        borderColor: theme.palette.secondary.light,
        backgroundColor: login ? theme.palette.secondary.light: '',
      },
    },
    reachLink: {
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.secondary.light,
      },
    },
    active: {
      color: theme.palette.secondary.light,
      textDecoration: 'none',
    }
  }));
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Button
        variant={login? "outlined": filled? "contained": ""} 
        color="inherit"
        className={classes.link}
        onClick={() => action != null ? action(): console.log('foo')}
        {...rest}
      >
        {!routeTo && (
          `${name}`
        )}
      </Button>
    </div>
    );
  }
  
  export default Fink;