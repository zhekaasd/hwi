import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemeType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector((state: AppStoreType) => state.themeData.currentTheme); // useSelector
    const themes = useSelector((state: AppStoreType) => state.themeData.themeList); // useSelector

    const dispatch = useDispatch();

    const onChangeCallback = (theme: ThemeType) => {
        dispatch(changeThemeC(theme));
    }

    // useDispatch, onChangeCallback

    return (
        <div className={`${s[theme]} ${s.wrapper}`}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <SuperSelect
                options={themes}
                onChangeOption={onChangeCallback}
            />

            <hr/>
        </div>
    );
}

export default HW12;
