import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ModelViewer } from '../components'
import { TopNav } from '../shared/components'
import FileUploader from '../components/FileUploader'


/* let spinLogo = () => { return (<img src={logo} className="App-logo" alt="logo" />) } */

export const App = () => {
  const [lightMode, setLightMode] = useState(false)
  const [modelSrc, setModelSrc] = useState('https://cdn.cnetcontent.com/syndication/mediaserverredirect/b7755e7453f7e1d09299f8e16d0d7500/original.glb')
  const useStyles = makeStyles(theme => ({
    root: {
       backgroundColor: lightMode?'#FFFFFF':'#222222',
       textAlign: 'center',
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
      <FileUploader onUpload={onModelUpload}/>
      <ModelViewer src={modelSrc} className="AstronautModel" light={lightMode}/>
    </div>
  );
}

export default App
