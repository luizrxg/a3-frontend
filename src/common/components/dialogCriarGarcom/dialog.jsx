import * as React from 'react';
import {useContext, useState} from 'react';
import './style.scss'
import {GlobalContext} from "../../../contexts/global";
import {Button, Dialog, TextField} from "@mui/material";

const CustomDialog = () => {
    const { openCriarGarcom, setOpenCriarGarcom, criarGarcom } = useContext(GlobalContext)
    const [nome,           setNome          ] = useState("")
    const [cpf,            setCpf           ] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
    const [email,          setEmail         ] = useState("")
    const [telefone,       setTelefone      ] = useState("")
    const [sexo,           setSexo          ] = useState("")
    const [salario,        setSalario       ] = useState("")


    return (
        <Dialog open={openCriarGarcom} onClose={() => setOpenCriarGarcom(false)}>
            <div className="dialog-container">
                <TextField fullWidth label="Nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
                <TextField fullWidth label="CPF" type="number" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                <TextField fullWidth label="Data de nascimento" type="number" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)}/>
                <TextField fullWidth label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <TextField fullWidth label="Telefone" value={telefone} type="number" onChange={(e) => setTelefone(e.target.value)}/>
                <TextField fullWidth label="Sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}/>
                <TextField fullWidth label="Salário" value={salario} type="number" onChange={(e) => setSalario(e.target.value)}/>
                <Button onClick={() => {
                    criarGarcom({
                        id: 0,
                        nome: nome,
                        cpf: cpf,
                        dataNascimento: dataNascimento,
                        email: email,
                        telefone: telefone,
                        sexo: sexo,
                        salario: salario
                    })
                }}>CRIAR GARCOM</Button>
            </div>
        </Dialog>
    )
}

export default CustomDialog
