import React, {useState} from 'react'
import {checkByAge, homeWorkReducer, InitialStateType, sortByName, StateItemType} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

import s from "./HW8.module.css";

// export type UserType =

const initialPeople: InitialStateType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<InitialStateType>(initialPeople) // need to fix any

    // возвращаем строку соответсвующую цифре
    const yearsOld = (age: number) => {
        let numberToString = String(age);
        const getLastElArr = numberToString.split('').map( a => +a)[numberToString.length - 1];
        return (age > 20 && getLastElArr === 1) || age === 1 ? 'год'
            : ((getLastElArr > 1) && (getLastElArr < 5)) || (age > 1 && age < 5) ? 'года' : 'лет'
    }

    // need to fix any
    const finalPeople = people.map((p: StateItemType, index: number) => (
        <div key={p._id}>

            <b>{index + 1}. </b><span> {p.name}, <i>{p.age} {yearsOld(p.age)}</i></span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(people, {type: 'sort', payload: 'up'}));
    const sortDown = () => setPeople(homeWorkReducer(people, sortByName('down')));
    const check18 = () => setPeople(homeWorkReducer(initialPeople, checkByAge(18)));


    return (
        <div className={s.hmw8}>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            <div className={s.usersListBlock}>

                <div>
                    {finalPeople}
                </div>

                <div className={s.sortButtonBlock}>
                    <SuperButton onClick={sortUp}>▲</SuperButton>
                    <SuperButton onClick={sortDown}> ▼ </SuperButton>
                </div>
            </div>

            <div className={s.checkButtonBlock}>
                <SuperButton onClick={check18}>check 18</SuperButton>
                <SuperButton onClick={() => setPeople(initialPeople)}>All users</SuperButton>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
