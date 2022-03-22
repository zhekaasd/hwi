import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type MUISuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const MUISuperRadio: React.FC<MUISuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(e.currentTarget.value);
        // onChange, onChangeOption
    };

    const mappedOptions: any[] = options ?
        options?.map((el, index) => <RadioGroup defaultValue={'x'} key={el + index} onChange={onChangeCallback} name="radio-buttons" value={value}>
            <FormControlLabel value={el} disabled={restProps.disabled} control={<Radio/>} label={el}/>
        </RadioGroup>) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default MUISuperRadio;
