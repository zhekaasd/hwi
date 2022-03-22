import React, {DetailedHTMLProps, SelectHTMLAttributes} from 'react'
import {FormControl, MenuItem, Select, SelectChangeEvent} from "@mui/material";

import './stl.css';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}




const MUISuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, onChangeOption,
        ...restProps
    }
) => {


    const onChangeCallback = (e: SelectChangeEvent) => {
        onChangeOption && onChangeOption(e.target.value);
    }


    return (
        <>

                <FormControl>

                    <Select value={restProps.value as string} onChange={onChangeCallback}>
                        {
                            options ? options?.map( (item, index) => <MenuItem
                                    className='MenuItem'
                                    key={index} value={item}
                                    id={'item' + index}
                                >{item}
                            </MenuItem>) : []
                        }
                    </Select>

                </FormControl>
        </>
    )
}

export default MUISuperSelect;
