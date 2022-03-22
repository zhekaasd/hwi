import * as React from 'react';
import {useState} from 'react';
import SuperCheckbox from "../../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../h4/common/c2-SuperButton/SuperButton";

import s from "./Request.module.css";
import MUISuperButton from "../../../h4/common/c2-SuperButton/MUISuperButton";
import MUISuperCheckbox from "../../../h4/common/c3-SuperCheckbox/MUISuperCheckbox";
import {request} from "../requestAPI";

type PropsRequestType = {};

function Request(props: PropsRequestType) {

    let statusCode = 0;
    const defaultValue = 'Нажмите кнопку "request", чтобы выполнить запрос за данными';

    let [checked, setChecked] = useState<boolean>(true);
    let [value, setValue] = useState<string>(defaultValue);
    let [error, setError] = useState<string>('');

/*--- axios ---*/
    // const getData = () => {
    //     requestAPI.authTest(checked)
    //         .then((resp) => {
    //             setError('');
    //             setValue(resp.data.errorText);
    //         })
    //         .catch((err) => {
    //             setValue('');
    //             setError(err.response.data.errorText);
    //         });
    // };

/*--- fetch ---*/
    const getData = () => {
        request(checked)
            .then(response => {
                statusCode = response.status;
                return response.json();
            })
            .then((data) => {
                if (statusCode >= 200 && statusCode <= 300) {
                    setError('');
                    setValue(data.errorText);
                } else {
                    return Promise.reject(data);
                }

            })
            .catch(data => {
            setValue('');
            setError(data.errorText);
        });
    }

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

            <MUISuperButton styleButton={'primary'} onClick={getData}> request </MUISuperButton>

            <SuperCheckbox
                checked={checked}
                onChangeChecked={setChecked}
            />

            <MUISuperCheckbox checked={checked} onChangeChecked={setChecked}/>
        </div>
    );
}


export default Request;