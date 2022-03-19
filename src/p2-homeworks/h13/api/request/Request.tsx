import * as React from 'react';
import {useState} from 'react';
import SuperCheckbox from "../../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../h4/common/c2-SuperButton/SuperButton";
import {requestAPI} from "../requestAPI";

import s from "./Request.module.css";

type PropsRequestType = {};

function Request(props: PropsRequestType) {

    const defaultValue = 'Нажмите кнопку "request", чтобы выполнить запрос за данными';

    let [checked, setChecked] = useState<boolean>(true);
    let [value, setValue] = useState<string>(defaultValue);
    let [error, setError] = useState<string>('');


    const getData = () => {
        requestAPI.authTest(checked)
            .then((resp) => {
                setError('');
                setValue(resp.data.errorText);
            })
            .catch((err) => {
                setValue('');
                setError(err.response.data.errorText);
            });
    };


    return (
        <div className={s.container}>

            <h1 className={error ? s.requestError : value === defaultValue ? s.default : s.response}>
                {
                    error ? error
                        : value === defaultValue ? defaultValue
                            : value
                }
            </h1>

            <SuperButton onClick={getData}
            > request
            </SuperButton>

            <SuperCheckbox
                checked={checked}
                onChangeChecked={setChecked}
            />
        </div>
    );
}


export default Request;