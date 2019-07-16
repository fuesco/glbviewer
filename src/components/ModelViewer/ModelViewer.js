import React from 'react'
import '@google/model-viewer'
import styles from './ModelViewer.module.css'

const ModelViewer = props => {
  return (
    <div className={styles.root}>
      <model-viewer src={props.src}
                    alt="A 3D model of an astronaut"
                    background-color="#ffffff"
                    shadow-intensity="1"
                    camera-controls
                    camera-orbit="180deg 75deg auto"
                    interaction-prompt="auto"
                    auto-rotate>
      </model-viewer>
    </div>
  )
}

export default ModelViewer
