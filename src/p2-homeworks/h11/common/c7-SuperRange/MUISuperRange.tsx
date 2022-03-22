import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import {Box, Slider} from "@mui/material";


// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type MUISuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    widthRange?: 'small' | 'medium'
    sizeRange?: number
};

const MuiSuperRange: React.FC<MUISuperRangePropsType> = ({ onChange, widthRange, sizeRange,
                                                             onChangeRange, ...restProps}) => {


    const onChangeCallback = (e: Event, newValue: number | number[]) => {

        onChangeRange && onChangeRange(newValue as number)
    }

    return (
        <Box width={sizeRange}>

            <Slider
                size={widthRange}
                onChange={onChangeCallback}
                valueLabelDisplay="auto"
                value={restProps.value as number}
            />
            <div>{restProps.value}</div>
        </Box>
    );
};

export default MuiSuperRange;
