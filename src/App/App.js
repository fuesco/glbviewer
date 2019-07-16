import React, { useState } from 'react'
import './App.css'
import logo from './logo.svg'
import { TemporaryDrawer, Clock, ModelViewer } from '../components'


let spinLogo = () => { return (<img src={logo} className="App-logo" alt="logo" />) }

export const App = () => {
  const astroModel = 'https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb?1542147958948'
  const pikachuModel = './Pikachu/Pikachu.glb'
  const [model, selectModel] = useState(pikachuModel)

  const handleDrawerSelect = (text) => {
    if (text === 'Pikachu') {
      selectModel(pikachuModel)
    } else if (text === 'Astronaut') {
      selectModel(astroModel)
    }
  }
  return (
    <div className="App">
      { spinLogo() }
      <Clock />
      <TemporaryDrawer handleSelectModel={(text) => handleDrawerSelect(text)}/>
      <ModelViewer src={model} className="AstronautModel" />
    </div>
  );
}

export default App
