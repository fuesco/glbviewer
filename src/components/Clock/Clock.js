import React, { useState } from 'react'
import moment from 'moment'
import styles from './Clock.module.css'
const Clock = props => {
    let [time, setTime] = useState(new Date())
    setInterval(
        () => { setTime(new Date()) },
        1000
    )
    return (
        <div className={styles.Clock}>
            <p>{moment(time).format('h:mm:ss a')}</p>
            <p>{moment(time).format('dddd MMMM Do, YYYY')}</p>
        </div>

    )
}

Clock.defaultProps = {

}

export default Clock
