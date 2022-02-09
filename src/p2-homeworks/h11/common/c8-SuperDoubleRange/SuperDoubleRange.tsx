import React from "react";

type SuperDoubleRangePropsType = {
    //onChangeRange?: (value: [number, number]) => void
    onChangeRange?: (v: any) => void
    //value?: [number, number]
    value?: any
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            DoubleRange
        </>
    )
}

export default SuperDoubleRange;
