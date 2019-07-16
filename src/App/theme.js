mport React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import { ModelViewer } from '../components';


let spinLogo = () => { return (<img src={'./logo.svg'} className="App-logo" alt="logo" />) }

export const App = () => {
  const astroModel = 'https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb?1542147958948'
  const [model, selectModel] = useState(astroModel)
  const handleAstronaut = () => {
    selectModel(astroModel)
  }

  return (
    <div className="App">
      { spinLogo() }
      <div className="ButtonGroup">
        <Button variant="outlined" onClick={handleAvocado}>Avocado</Button>
        <Button variant="outlined" onClick={handleAstronaut}>Astronaut</Button>
        <Button variant="outlined" onClick={handleJoggers}>Joggers</Button>
      </div>
      <ModelViewer src={model} className="AstronautModel" />
    </div>
  );
}

export default App;
