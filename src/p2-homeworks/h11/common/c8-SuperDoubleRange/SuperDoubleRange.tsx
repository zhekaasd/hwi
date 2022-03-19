import Slider from "@mui/material/Slider/Slider";
import React from "react";


type SuperDoubleRangePropsType = {
    onChangeRange?: (v: number[]) => void
    value?: number[]
    min?: number
    max?: number
    step?: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step
    }
) => {

    const onChangeCallback = (e: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[]);
    };

    return (
        <>
            <Slider
                value={value}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                color={'secondary'}
            />
        </>
    )
}

export default SuperDoubleRange;
