import * as React from 'react';
import {useContext} from 'react';
import './style.scss'
import {Alert, CircularProgress, Snackbar} from "@mui/material";
import {GlobalContext} from "../../../contexts/global";

const LoadingScreen = () => {
    const { loading } = useContext(GlobalContext)

    return ( <>
      {loading ?
        <div className="loading-screen">
          <CircularProgress/>
        </div> : <></>
      }
    </>)
}

export default LoadingScreen
