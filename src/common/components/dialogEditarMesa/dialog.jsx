import * as React from 'react';
import {useContext} from 'react';
import './style.scss'
import {Alert, Dialog, Snackbar} from "@mui/material";
import {GlobalContext} from "../../../contexts/global";

const CustomDialog = () => {
    const { openEditarMesa, setOpenEditarMesa } = useContext(GlobalContext)

    return (
        <Dialog open={openEditarMesa} onClose={() => setOpenEditarMesa(false)}>

        </Dialog>
    )
}

export default CustomDialog
