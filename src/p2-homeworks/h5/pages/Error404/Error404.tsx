import React from 'react'

import s from "./Error404.module.css";
import img from "../../assets/images/3fcf565ccc553afcfd89858c97304705.gif"
import SuperButton from "../../../h4/common/c2-SuperButton/SuperButton";
import { NavLink } from 'react-router-dom';

function Error404() {
    return (
        <div className={s.wrapper}>
            <h1>
                404
            </h1>
            <h3>Page not found!</h3>
            <img src={img} alt=""/>
            <NavLink to={'/'}>
                <SuperButton> GO TO HOMEPAGE </SuperButton>
            </NavLink>
        </div>
    )
}

export default Error404
