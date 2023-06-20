import React, {useContext, useState, useEffect} from 'react';

import { GlobalContext } from '../../contexts/global';
import LogoSVG from "../../svgs/logo";

import './styles.scss'
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import {Tab, Tabs} from "@mui/material";

const Home = () => {
    const {
        mesas,
        garcons,
        columnsMesas,
        columnsGarcons,
    }  = useContext(GlobalContext)

    const [tab, setTab] = useState(0)
    const navigate = useNavigate()

    return (
        <div className="home-container">
            <Tabs value={tab} onChange={(e) => setTab(e)}>
                <Tab label="MESAS"/>
                <Tab label="GARCONS"/>
            </Tabs>
            {tab === 0 &&
                <DataGrid
                    rows={mesas}
                    columns={columnsMesas}
                />
            }
            {tab === 1 &&
                <DataGrid
                  rows={garcons}
                  columns={columnsGarcons}
                />
            }
        </div>
    )
}

export default Home
