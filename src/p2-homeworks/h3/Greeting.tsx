import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers}) => { // деструктуризация пропсов
    const inputClass =  error ? s.error : '';// need to fix with (?:)

    return (
        <>
            <div className={s.someClass}>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                {error ? <button disabled onClick={addUser}>add</button> : <button onClick={addUser}>add</button>}
                <div className={error ? s.errorCount : ''}>
                    <span >{totalUsers}</span>
                </div>
            </div>
            {error && <span className={s.errorMessage}>{error}</span>}
        </>
    )
}

export default Greeting
