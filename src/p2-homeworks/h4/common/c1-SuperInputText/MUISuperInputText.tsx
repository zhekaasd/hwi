import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react'
import {TextField} from "@mui/material";
import {styled} from "@mui/material/styles";


// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type MUIInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    margin?: 'none' | 'dense' | 'normal' | undefined
    styleComponent?: string
}

/*--- Default style input component ---*/
const Default = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiOutlinedInput-root': {
        // input default border color
        '& fieldset': {
            borderColor: 'darkgray'
        },
        '&:hover fieldset': {
        // input default hover style
            borderColor: 'black'
        },
        '&.Mui-focused fieldset': {
        // input default focus style
            borderColor: 'black',
            borderWidth: '3px'
        },
    },
});



const MUISuperInputText: React.FC<MUIInputTextPropsType> = (
    {
        onChange, onChangeText, onKeyPress, onEnter,
        error, className, spanClassName,
        margin, styleComponent,

        ...restProps// все остальные пропсы попадут в объект restProps

    }) => {


    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)

        onChangeText && onChangeText(e.currentTarget.value)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
    }


    return (
        <>
             <Default
                    helperText={error}
                    error={!!error} // error ? true : false
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    size={'small'}
                    placeholder={'Enter text'}
                    value={restProps.value}
                    margin={margin}
                />
        </>

)
}

export default MUISuperInputText
