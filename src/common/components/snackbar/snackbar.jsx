import * as React from 'react';
import './style.scss'
import {useContext, useEffect, useState} from "react";
import {Alert, Box, Snackbar} from "@mui/material";
import {GlobalContext} from "../../../../../searchdevs/src/contexts/global";

const CustomSnackbar = () => {
    const { message, setMessage } = useContext(GlobalContext)

    return (<>
        {message !== "" &&
          <Snackbar
            open
            message={message}
            onClose={() => setMessage("")}
            autoHideDuration={6000}
          >
            <Alert severity="error">
              {message}
            </Alert>
          </Snackbar>
        }
    </>)
}

export default CustomSnackbar
