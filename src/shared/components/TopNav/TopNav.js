import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LightIcon from '@material-ui/icons/BrightnessHighTwoTone';
import DarkIcon from '@material-ui/icons/BrightnessLowTwoTone';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fink from '../../../components/Fink';

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
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    grow: {
      flex: 1,
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
          <Typography variant="overline" className={classes.grow}>
            glbviewer<sub>&nbsp;(0.1.0)</sub>
          </Typography>
          {!isMobile && (
            <Container className={classes.links}>
              <Fink
                name="about"
              />
              <Fink
                name="astronaut"
                action={() => onModelToggle('./astronaut.glb')}
              />
              <Fink
                name="pikachu"
                action={() => onModelToggle('./pikachu.glb')}
              />
              <IconButton color="inherit" aria-label="menu" onClick={() => toggleLightMode()}>
                {lightMode && <DarkIcon />}
                {!lightMode && <LightIcon />}
              </IconButton>
            </Container>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}