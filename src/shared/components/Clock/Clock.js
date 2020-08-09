import React, { useState } from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'


const useStyles = makeStyles(theme => ({
    root: {
        color: 'inherit',
        flex: 0.25,
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
            <span>{moment(time).format('h:mm:ss')}</span>
        </Container>
    )
}

Clock.defaultProps = {

}

export default Clock
