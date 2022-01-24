import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

import styles from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ));

    const set = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      props.setFilter(e.currentTarget.value as FilterType);
    }

    const setClass = (filter: FilterType) => {
      return styles.btn + (props.filter === filter ? ' ' + styles[filter] : '');
    }

    return (
        <div className={styles.wrapper}>

            {mappedAffairs}

            <div className={styles.sortButton}>
                <button className={setClass('all')} onClick={set} value={'all'} >All</button>
                <button className={ styles.hoverHigh + ' ' + setClass('high') } onClick={set} value={'high'} >High</button>
                <button className={ styles.hoverMiddle + ' ' + setClass('middle')} onClick={set} value={'middle'} >Middle</button>
                <button className={ styles.hoverLow + ' ' + setClass('low')} onClick={set} value={'low'} >Low</button>
            </div>
        </div>
    )
}

export default Affairs
