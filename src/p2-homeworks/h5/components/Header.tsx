import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";

import s from "./Header.module.css";


function Header(props: { editMode: boolean, setEditMode: (value: boolean) => void }) {
    return (
        <div className={s.header}>
            <div className={s.styleScope}>
                <h3> add <span> NavLinks</span></h3>
                <div onClick={() => props.setEditMode(!props.editMode)} className={s.brg}>
                    <div/>
                </div>
            </div>

            <SuperButton > LOGIN </SuperButton >
        </div>
    )
}

export default Header;
