import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import LightIcon from '@material-ui/icons/Brightness1Sharp';
import DarkIcon from '@material-ui/icons/Brightness2Sharp';
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
      backgroundColor: lightMode?'#f1f1f1':'#222222',
      color: lightMode?'#222222':'#f1f1f1',
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
      fontFamily: "IBM Plex Mono",
      textTransform: 'uppercase',
      fontWeight: 700,
      fontSize: 20,
      letterSpacing: theme.spacing(1/4),
    },
    version: {
      fontWeight: 400,
      fontSize: 12,
      '& a': {
        color: lightMode? '#111111': '#f1f1f1',
        textDecoration: 'none'
      }
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
          <Typography variant="h6" className={classes.grow}>
            glbviewer<sub className={classes.version}><a href="https://github.com/fuesorg/glbviewer" target="_blank" rel="noopener noreferrer">{process.env.REACT_APP_VERSION}</a></sub>
          </Typography>
          {!isMobile && (
            <Container className={classes.links}>
              <Fink
                name="about"
              />
              <Fink
                name="series x"
                action={() => onModelToggle('https://cdn.cnetcontent.com/syndication/mediaserverredirect/b7755e7453f7e1d09299f8e16d0d7500/original.glb')}
              />
              <Fink
                name="pikachu"
                action={() => onModelToggle('./pikachu.glb')}
              />
              <Fink
                name="astronaut"
                action={() => onModelToggle('./astronaut.glb')}
              />
              <Tooltip title="Toggle theme">
                <IconButton color="inherit" aria-label="menu" onClick={() => toggleLightMode()}>
                  {lightMode && <DarkIcon />}
                  {!lightMode && <LightIcon />}
                </IconButton>
              </Tooltip>
            </Container>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}