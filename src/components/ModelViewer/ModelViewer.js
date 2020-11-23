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
                    camera-orbit="45deg 75deg auto"
                    exposure={0.8}
                    interaction-prompt="auto"
                    auto-rotate>
      </model-viewer>
    </div>
  )
}

ModelViewer.defaultProps = {
  src: './pikachu.glb'
}

export default ModelViewer
