import * as React from 'react';
import {useContext} from 'react';
import './style.scss'
import {Alert, Button, Snackbar} from "@mui/material";
import {GlobalContext} from "../../../contexts/global";

const CustomButton = ({props, children}) => {
    return <Button disableElevation variant="contained" {...props}>{children}</Button>
}

export default CustomButton
