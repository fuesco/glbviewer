import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LightIcon from '@material-ui/icons/WbSunnyTwoTone';
import DarkIcon from '@material-ui/icons/NightsStayTwoTone';


export default function TopNav(props) {
  const [lightMode, setLightMode] = useState(false);
  const { onLightToggle } = props
  /*
  const preventDefault = event => event.preventDefault();
  */

 const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    bar: {
      backgroundColor: lightMode?'#FFFFFF':'#222222',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: lightMode?'#222222':'#ffffff',
    },
    title: {
      color: lightMode?'#222222':'#ffffff',
    },
    links: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      color: lightMode?'#222222':'#ffffff',
    },
    lightDarkToggle: {
      marginLeft: theme.spacing(2),
    }
  }));
  const classes = useStyles();
  const toggleLightMode = () => {
    setLightMode(!!!lightMode);
    onLightToggle();

  }
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
          <Container className={classes.links}>
            <Link href="https://github.com/jetlaglabs" color="inherit">
              Source
            </Link>
            <IconButton edge="start" className={classes.lightDarkToggle} color="inherit" aria-label="menu" onClick={() => toggleLightMode()}>
              {lightMode && <DarkIcon />}
              {!lightMode && <LightIcon />}
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}