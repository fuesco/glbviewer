import React, {useCallback, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import {useDropzone} from 'react-dropzone'
 
const useStyles = makeStyles(theme => ({
  root: {
      paddingTop: '5rem',
  },
  dropPaper: {
      padding: '1em 2em',
      border: '3px dashed #b7b7b7',
      boxShadow: 'rgba(17, 0, 102, 0.16) 0px 16px 20px',
  },
}));
const getBase64 =(file) => {
  return new Promise(function(resolve) {
    var reader = new FileReader();
    reader.onloadend = function() {
      resolve(reader.result)
    }
    reader.readAsDataURL(file);
  })
}
function FileUploader(props) {
  const classes = useStyles(); 
  const { onUpload } = props
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState(false)
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    const newFiles = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
    setLoading(true);
    getBase64(acceptedFiles[0]).then(result => {
      onUpload(result)
    })
    setLoading(false);
    setFiles(newFiles)
  }, [onUpload])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
 
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper {...getRootProps()} elevation={3} className={classes.dropPaper}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drop a glTF(*.glb) file here, or click to select one.</p>
        }
        <aside>
          {loading && <h3>Loading...</h3>}
          <h4>Model:</h4>
          <ul>{files}</ul>
        </aside>
      </Paper>
    </Container>
  )
}

export default FileUploader