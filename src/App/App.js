import React, {useState} from 'react'
import './App.css'
import { ModelViewer } from '../components'
import { TopNav, Clock } from '../shared/components'
import FileUploader from '../components/FileUploader'


/* let spinLogo = () => { return (<img src={logo} className="App-logo" alt="logo" />) } */

export const App = () => {
  const [modelSrc, setModelSrc] = useState('https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb?1542147958948')
  const onModelUpload = (newSrc) => {
    setModelSrc(newSrc)
  }
  return (
    <div className="App">
      <TopNav />
      <Clock />
      <FileUploader onUpload={onModelUpload}/>
      <ModelViewer src={modelSrc} className="AstronautModel" />
    </div>
  );
}

export default App
