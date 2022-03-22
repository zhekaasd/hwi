import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import {Button, ButtonProps} from "@mui/material";
import {styled} from "@mui/material/styles";
import {blue, red} from "@mui/material/colors";

/*--- Primary style button ---*/
const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[700],
    '&:hover': {
        backgroundColor: red[900],
    },
}));

/*--- Secondary style button ---*/
const SecondaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[700],
    '&:hover': {
        backgroundColor: blue[900],
    },
}));


// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MUIButtonPropsType = DefaultButtonPropsType & {
    styleButton?: 'primary'
}

const MUISuperButton: React.FC<MUIButtonPropsType> = ({styleButton, ...restProps}) => {

    return (
        <>
            {
                !styleButton ?
                    <PrimaryButton onClick={restProps.onClick} disabled={restProps.disabled}> {restProps.children} </PrimaryButton>
                        : <SecondaryButton onClick={restProps.onClick}> {restProps.children} </SecondaryButton>
            }
        </>
    )
}

export default MUISuperButton;
