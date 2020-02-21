import React from 'react'
import '@google/model-viewer'
import styles from './ModelViewer.module.css'

const ModelViewer = props => {
  return (
    <div className={styles.root}>
      <model-viewer src={props.src}
                    alt="A 3D model of an astronaut"
                    background-color={props.light?"#FFFFFF":"#222222"}
                    shadow-intensity="1"
                    camera-controls
                    ar
                    camera-orbit="180deg 75deg auto"
                    interaction-prompt="auto"
                    auto-rotate>
      </model-viewer>
    </div>
  )
}

ModelViewer.defaultProps = {
  src: 'https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.glb?1542147958948'
}

export default ModelViewer
