import * as React from 'react';
import {useContext, useState} from 'react';
import './style.scss'
import Button from "../button/button";
import {Alert, Dialog, Snackbar, TextField} from "@mui/material";
import {GlobalContext} from "../../../contexts/global";

const CustomDialog = () => {
    const { openCriarMesa, setOpenCriarMesa, createMesa } = useContext(GlobalContext)
    const [numero,           setNumero          ] = useState("")
    const [situacao,         setSituacao        ] = useState("")
    const [capacidadeMaxima, setCapacidadeMaxima] = useState("")
    const [idGarcom,         setIdGarcom        ] = useState("")
    const [nomeGarcom,       setNomeGarcom      ] = useState("")

    return (
        <Dialog open={openCriarMesa} onClose={() => setOpenCriarMesa(false)}>
            <div className="dialog-container">
                <TextField fullWidth label="Nome" value={numero} onChange={(e) => setNumero(e.target.value)}/>
                <TextField fullWidth label="Situação" value={situacao} onChange={(e) => setSituacao(e.target.value)}/>
                <TextField fullWidth label="Capacidade maxima" value={capacidadeMaxima} onChange={(e) => setCapacidadeMaxima(e.target.value)}/>
                <TextField fullWidth label="Id Garcom" value={idGarcom} onChange={(e) => setIdGarcom(e.target.value)}/>
                <TextField fullWidth label="Nome do Garcom" value={nomeGarcom} onChange={(e) => setNomeGarcom(e.target.value)}/>
                <Button onClick={() => {
                    createMesa({
                        id: 0,
                        numero: numero,
                        situacao: situacao,
                        capacidadeMaxima: capacidadeMaxima,
                        idGarcom: idGarcom,
                        nomeGarcom: nomeGarcom,
                    })
                }}>CRIAR GARCOM</Button>
            </div>
        </Dialog>
    )
}

export default CustomDialog
