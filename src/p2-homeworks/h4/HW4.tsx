import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'
import MUISuperInputText from "./common/c1-SuperInputText/MUISuperInputText";
import MUISuperButton from "./common/c2-SuperButton/MUISuperButton";
import MUISuperCheckbox from "./common/c3-SuperCheckbox/MUISuperCheckbox";

function HW4() {

    const [text, setText] = useState<string>('')
    const error = text ? '' : 'Field is required!'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text);
            setText('')// если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    // spanClassName={s.testSpanError}
                />

                <SuperInputText
                     //className={s.blue}  // проверьте, рабоет ли смешивание классов
                />

                ----------------------------------------------------

                <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                ----------------------------------------------------

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                > ??
                    {/*some text // этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*//onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
                <div className={s.column2}>


                    <MUISuperInputText value={text}
                                       onChangeText={setText}
                                       onEnter={showAlert}
                                       error={error}
                                       margin={'normal'}
                    />

                    <MUISuperInputText />

                    -------------------------------------------------------

                    <MUISuperButton />
                    <MUISuperButton styleButton={'secondary'} />
                    <MUISuperButton disabled />

                    -------------------------------------------------------
                    <MUISuperCheckbox checked={checked} onChangeChecked={setChecked} >
                        text {/*some text // этот текст попадёт в children*/}
                    </MUISuperCheckbox>

                    <MUISuperCheckbox disabled color={'default'} text={'???????'} checked={true} />
                    <MUISuperCheckbox checked={checked} onChange={testOnChange}  />
                </div>
            <hr/>
        </div>
    )
}

export default HW4;
