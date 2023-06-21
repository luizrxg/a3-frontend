import React from 'react';
import ReactDOM from 'react-dom/client';

import {createTheme, ThemeProvider} from "@mui/material";

import Router from "./routes";

import './index.scss';
import GlobalProvider from './contexts/global';
import Snackbar from "../../a3-frontend/src/common/components/snackbar/snackbar";

import { purple } from '@mui/material/colors';
import LoadingScreen from "./common/components/loading/loading";

const theme = createTheme({
    palette: {
      primary: purple
    },
    typography: {
        fontFamily: "Poppins",
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Router/>
        <Snackbar/>
        <LoadingScreen/>
      </GlobalProvider>
    </ThemeProvider>
  </React.StrictMode>
);

