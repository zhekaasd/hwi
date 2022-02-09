import {NavLink} from "react-router-dom";
import React from "react";

import s from "./Sidebar.module.css";
import icon1 from "../assets/icons/frown-solid.svg";
import icon2 from "../assets/icons/frown-open-solid.svg";
import icon3 from "../assets/icons/sad-tear-solid.svg";


const Sidebar = (props: { editMode: boolean, setEditMode: (value: boolean) => void }) => {

    const setClass = (value: boolean) => {
        return value ? s.active : s.ccc;
    }

    return <div
        // onMouseOver={() => props.setEditMode(true)}
        // onMouseOut={() => props.setEditMode(false)}
        className={props.editMode ? s.sidebar : s.editableSidebar}>

        <NavLink className={(navDate) => s.navItem + ' ' + setClass(navDate.isActive)} to={'/pre-junior'}>
            <img src={icon1} alt=""/>
            <span>PreJun</span>
        </NavLink>

        <NavLink className={(navDate) => s.navItem + ' ' + setClass(navDate.isActive)} to={'/junior'}>
            <img src={icon2} alt=""/>
            <span>Junior</span>
        </NavLink>
        <NavLink className={(navDate) => s.navItem + ' ' + setClass(navDate.isActive)} to={'/junior-plus'}>
            <img src={icon3} alt=""/>
            <span>Junior +</span>
        </NavLink>
    </div>
}


export default Sidebar;