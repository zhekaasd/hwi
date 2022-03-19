import React, {useState} from 'react'
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton'

import s from "./Clock.module.css";

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId);
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date());
            // setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString(); // fix with date
    const stringDate = date.toDateString(); // fix with date


    return (
        <div className={s.wrapper}>
            <div className={s.clock}>
                <div className={s.time}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && <div className={s.date}>
                    {stringDate}
                </div>}
            </div>

            <div className={s.buttonBlock}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock