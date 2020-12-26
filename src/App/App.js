import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { ModelViewer, SwitchControls } from '../components'
import { TopNav, Clock } from '../shared/components'
import FileUploader from '../components/FileUploader'


/* let spinLogo = () => { return (<img src={logo} className="App-logo" alt="logo" />) } */

export const App = () => {
  const [lightMode, setLightMode] = useState(false)
  const [modelSrc, setModelSrc] = useState('./astronaut.glb')
  const useStyles = makeStyles(theme => ({
    root: {
       backgroundColor: lightMode?'#f1f1f1':'#111111',
       textAlign: 'center',
       color: lightMode? '#111111': '#f1f1f1',
       minHeight: '100vh',
       overflow: 'hidden',
    },
    content: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));
  const classes = useStyles();
  const onModelUpload = (newSrc) => {
    setModelSrc(newSrc)
  }
  const onModelChange = (newSrc) => {
    setModelSrc(newSrc)
  }
  return (
    <div className={classes.root}>
      <TopNav onLightToggle={() => setLightMode(!!!lightMode)} onModelToggle={(newSource) => onModelChange(newSource)}/>
      <FileUploader onUpload={onModelUpload} activeModel={modelSrc} />
      <Clock lightMode/>
      <Grid container spacing={1} className={classes.content}>
        <Grid item>
          <SwitchControls/>
        </Grid>
        <Grid item md={8}>
          <ModelViewer src={modelSrc} className="AstronautModel" light={lightMode}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App
