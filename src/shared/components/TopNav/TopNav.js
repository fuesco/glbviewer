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
      color: lightMode?'#222222':'#ffffff',
    },
    menuButton: {
      
    },
    links: {
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      columnGap: theme.spacing(2),
    },
    lightDarkToggle: {

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
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            glTFViewer
            <Typography variant="overline">
              (0.0.2)
            </Typography>
          </Typography>
          <Container className={classes.links}>
            <Link 
                href="https://github.com/jetlaglabs/gltfviewer" 
                color="inherit"
                target="_blank"
                rel="noopener"
              >
              Code
            </Link>
            <Link 
              href="http://roestudios.co.uk/project/3d-pokemon-models/025-pikachu/" 
              color="inherit"
              target="_blank"
              rel="noopener"
            >
              Pikachu
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