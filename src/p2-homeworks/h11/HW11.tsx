import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

import s from "./HW11.module.css";
import MUISuperRange from "./common/c7-SuperRange/MUISuperRange";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeHandler = (value: number[]) => {
        let [v1, v2] = value;
        setValue1(v1);
        setValue2(v2);
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.sliderBlock}>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
                <span>{value1}</span>
            </div>

            <div className={s.doubleSliderBlock}>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeHandler}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <div>
                    <span>{value1}</span>
                    <span>{value2}</span>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <MUISuperRange value={value1} onChangeRange={setValue1}
                           widthRange={'small'} sizeRange={300}  />
            <hr/>
        </div>
    )
}

export default HW11
