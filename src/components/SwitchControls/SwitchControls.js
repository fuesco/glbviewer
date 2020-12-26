import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Paper from '@material-ui/core/Paper';

import ZoomPlusIcon from '@material-ui/icons/AddSharp';
import ZoomNegIcon from '@material-ui/icons/RemoveSharp';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: theme.spacing(2),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controls: {
    padding: '1em 2em',
    width: '30rem',
    textTransform: 'uppercase',
  },
  mf: {
    fontFamily: 'IBM Plex Mono, monospace',
    fontSize: 12,
  }
}));


const SwitchSlider = props => {
  const { name, val, handleChange, leftIcon, rightIcon } = props;
  const classes = useStyles();
  return (
    <div>
      <Typography id={name + "-slider"} gutterBottom className={classes.mf}>
        {name}: {val}%
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          {leftIcon()}
        </Grid>
        <Grid item xs>
          <Slider value={val} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          {rightIcon()}
        </Grid>
      </Grid>
    </div>
  )
}


const SwitchControls = (props) => {
  // const { ...rest } = props;
  const classes = useStyles();
  const [zoom, setZoom] = useState(0);

  const handleZoomChange = (event, val) => {
    setZoom(val);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.controls}>
        <SwitchSlider
          name='Zoom'
          val={zoom}
          handleChange={handleZoomChange}
          leftIcon={() => <ZoomNegIcon/>}
          rightIcon={() => <ZoomPlusIcon/>}
        />
        <SwitchSlider
          name='Rotate'
          val={zoom}
          handleChange={handleZoomChange}
          leftIcon={() => <ZoomNegIcon/>}
          rightIcon={() => <ZoomPlusIcon/>}
        />
        <SwitchSlider
          name='Exposure'
          val={zoom}
          handleChange={handleZoomChange}
          leftIcon={() => <ZoomNegIcon/>}
          rightIcon={() => <ZoomPlusIcon/>}
        />
      </Paper>
    </div>
    );
  }
  
  export default SwitchControls;