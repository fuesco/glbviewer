import React, { useState } from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'


const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '10vh',
        paddingBottom: theme.spacing(2),
    },
    clock: {
        padding: theme.spacing(1),
    }
}));

const Clock = props => {
    const classes = useStyles(); 
    let [time, setTime] = useState(new Date())
    setInterval(
        () => { setTime(new Date()) },
        1000
    )
    return (
        <Container maxWidth="sm" className={classes.root}>
            <Paper elevation={3} className={classes.clock}>
                <p>{moment(time).format('h:mm:ss a')}</p>
                <p>{moment(time).format('dddd MMMM Do, YYYY')}</p>
            </Paper>
        </Container>
    )
}

Clock.defaultProps = {

}

export default Clock
