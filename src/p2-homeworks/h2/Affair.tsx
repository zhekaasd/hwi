import React from 'react'
import {AffairType, FilterType} from "./HW2";
import del from './common/trash-solid.svg';

import styles from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id);
    }// need to fix

    function setClass(priority: FilterType) {
        return styles.affair + (props.affair.priority === priority ? ' ' + styles[priority] : '')
    }



    return (
        <div className={styles.affair + ' ' + setClass(props.affair.priority)}>
            <span className={styles.title}>{props.affair.name.toUpperCase()}</span>
            <button className={styles.btn} onClick={deleteCallback}>
                <img className={styles.icon} src={del} alt=""/>
            </button>
        </div>
    )
}

export default Affair;
