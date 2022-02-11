import Slider from "@mui/material/Slider/Slider";
import React from "react";


type SuperDoubleRangePropsType = {
    //onChangeRange?: (value: [number, number]) => void
    onChangeRange?: (v: number[]) => void
    value?: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {

    const onChangeCallback = (e: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[]);
    };

    return (
        <>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                color={'secondary'}
            />
        </>
    )
}

export default SuperDoubleRange;
