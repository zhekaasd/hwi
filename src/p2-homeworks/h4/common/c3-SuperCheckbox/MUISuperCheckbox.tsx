import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {Checkbox} from "@mui/material";


// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
//type ColorType = ;
type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
    color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"
    text?: string
}

const MUISuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        onChange, onChangeChecked, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeChecked && onChangeChecked(e.currentTarget.checked);
        // сделайте так чтоб работал onChange и onChangeChecked
    }

    return (
        <>
            <Checkbox
                onChange={onChangeCallback}
                color={restProps.color}
                disabled={restProps.disabled}
                checked={restProps.checked}

            /> {children}
        </>


    )
}

export default MUISuperCheckbox;
