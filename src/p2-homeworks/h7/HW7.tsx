import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import MUISuperSelect from "./common/c5-SuperSelect/MUISuperSelect";
import MUISuperRadio from "./common/c6-SuperRadio/MuiSuperRadio";

const arr = ['x', 'y', 'z']

function HW7() {


    const [value, onChangeOption] = useState(arr[1]);


    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>

            <hr/>


            {/*для личного творчества, могу проверить*/}

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                <MUISuperSelect value={value} options={arr} onChangeOption={onChangeOption} />

                ------------------------------------------

                <div>
                    <div style={{display: 'inline-block', marginRight: '50px'}}>

                        <MUISuperRadio options={arr} value={value} onChangeOption={onChangeOption} />

                    </div>
                    <div style={{display: 'inline-block'}}>

                        <MUISuperRadio disabled options={arr}    />

                    </div>
                </div>
            </div>


            <hr/>
        </div>
    )
}

export default HW7
