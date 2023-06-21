import React, {useContext, useState} from 'react';

import {GlobalContext} from '../../contexts/global';

import './styles.scss'
import {DataGrid} from '@mui/x-data-grid';
import {useNavigate} from 'react-router-dom';
import {Button, Dialog, Tab, Tabs} from "@mui/material";
import DialogCriarGarcom from "../../common/components/dialogCriarGarcom/dialog"
import DialogEditarGarcom from "../../common/components/dialogEditarGarcom/dialog"
import DialogCriarMesa from "../../common/components/dialogCriarMesa/dialog"
import DialogEditarMesa from "../../common/components/dialogEditarMesa/dialog"

const Mesas = () => {
    const {
        mesas,
        columnsMesa,
    }  = useContext(GlobalContext)

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={mesas}
                columns={columnsMesa}
                pageSize={10}
            />
        </div>
    )
}

const Garcons = () => {
    const {
        garcons,
        columnsGarcom,
    }  = useContext(GlobalContext)

    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid
                rows={garcons}
                columns={columnsGarcom}
                pageSize={10}
            />
        </div>
    )
}

const Home = () => {
    const {
        openCriarGarcom,
        setOpenCriarGarcom,
        openEditarGarcom,
        setOpenEditarGarcom,
        openCriarMesa,
        setOpenCriarMesa,
        openEditarMesa,
        setOpenEditarMesa,
    }  = useContext(GlobalContext)

    const [tab, setTab] = useState(0)
    const navigate = useNavigate()

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return ( <>
        <div className="home-container">
            <aside>
                <Tabs value={tab} onChange={handleChange}>
                    <Tab label="MESAS" value={0}/>
                    <Tab label="GARCONS" value={1}/>
                </Tabs>
                <Button
                    onClick={() => {
                        switch (tab) {
                            case 0: return setOpenCriarMesa(true)
                            case 1: return setOpenCriarGarcom(true)
                        }
                    }}
                >
                    CRIAR
                </Button>
            </aside>
            {tab === 0 ? <Mesas/> : <Garcons/>}
        </div>
        <DialogCriarGarcom/>
        <DialogEditarGarcom/>
        <DialogCriarMesa/>
        <DialogEditarMesa/>
    </> )
}

export default Home
