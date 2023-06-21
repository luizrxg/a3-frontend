import * as React from 'react';
import {useContext} from 'react';
import './style.scss'
import {Alert, Dialog, Snackbar} from "@mui/material";
import {GlobalContext} from "../../../contexts/global";

const CustomDialog = () => {
    const { openEditarGarcom, setOpenEditarGarcom } = useContext(GlobalContext)

    return (
        <Dialog open={openEditarGarcom} onClose={() => setOpenEditarGarcom(false)}>

        </Dialog>
    )
}

export default CustomDialog
