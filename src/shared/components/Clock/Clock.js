import React, { useState } from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Clock = props => {
    /* const { } = props; */
    let [time, setTime] = useState(new Date())
    const useStyles = makeStyles(theme => ({
        root: {
            marginTop: theme.spacing(4),
            flex: 0.25,
            color: 'inherit',
            fontFamily: 'IBM Plex Mono, monospace',
        },
        clock: {
            padding: theme.spacing(1),
        },
    }));
    const classes = useStyles(); 
    setInterval(
        () => { setTime(new Date()) },
        1000
    )
    return (
        <Container maxWidth="sm" className={classes.root}>
            <span>{moment(time).format('h:mm:ss')}</span>
        </Container>
    )
}

Clock.defaultProps = {

}

export default Clock
