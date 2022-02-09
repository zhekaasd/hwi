import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import {Simulate} from "react-dom/test-utils";
import photo from "./assets/loadingImage.webp";

function HW10() {
    // useSelector, useDispatch
    let loading  = useSelector((state: AppStoreType) => state.loadingData.loading);
    const dispatch = useDispatch();


    const setLoading = () => {
        dispatch(loadingAC());
        setTimeout(() => {
            dispatch(loadingAC());
            console.log(loading + ' set timeout value ');
        }, 2000)
        console.log('loading...');
    };

    const style = {
        minHeight: '200px',
        display: 'block',
        margin: '0 auto'
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div style={style}><img src={photo} alt=""/></div>
                ) : (
                    <div style={style}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
