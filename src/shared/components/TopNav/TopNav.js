import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LightIcon from '@material-ui/icons/BrightnessHighTwoTone';
import DarkIcon from '@material-ui/icons/BrightnessLowTwoTone';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Clock from '../Clock';

export default function TopNav(props) {
  const [lightMode, setLightMode] = useState(false);
  const { onLightToggle, onModelToggle } = props
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
      justifyContent: 'flex-start',
      alignItems: 'center',
      order: 4,
    },
    link: {
      marginRight: theme.spacing(2),
    },
    lightDarkToggle: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
    }
  }));
  const classes = useStyles();
  const toggleLightMode = () => {
    setLightMode(!!!lightMode);
    onLightToggle();
  }
  const isMobile = useMediaQuery('(max-width:800px)');
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6">
            glbviewer<Typography variant="overline">(1.0.1)</Typography>
          </Typography>
          <Clock/>
          <div className={classes.lightDarkToggle}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleLightMode()}>
              {lightMode && <DarkIcon />}
              {!lightMode && <LightIcon />}
            </IconButton>
          </div>
          <Container className={classes.links}>
            {!isMobile && (
              <div>
                <Button 
                  color="inherit"
                  className={classes.link}
                  href="https://github.com/fuesco/gltfviewer/blob/master/README.md" 
                  target="_blank"
                  rel="noopener"
                >
                  About
                </Button>
                <Button 
                  color="inherit"
                  className={classes.link}
                  onClick={() => onModelToggle('./astronaut.glb')}
                >
                  Astronaut
                </Button>
                <Button 
                  color="inherit"
                  className={classes.link}
                  onClick={() => onModelToggle('./pikachu.glb')}
                >
                  Pikachu
                </Button>
                <Button
                    variant="contained" 
                    href="https://github.com/fuesco/gltfviewer" 
                    target="_blank"
                    rel="noopener"
                    className={classes.link}
                  >
                  Source
                </Button>
              </div>
            )}
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}