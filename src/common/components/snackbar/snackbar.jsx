import * as React from 'react';
import {useContext} from 'react';
import './style.scss'
import {Alert, Snackbar} from "@mui/material";
import {GlobalContext} from "../../../contexts/global";

const CustomSnackbar = () => {
    const { message, setMessage } = useContext(GlobalContext)

    return (<>
        {message !== "" &&
          <Snackbar
            open
            message={message}
            onClose={() => {}}
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
