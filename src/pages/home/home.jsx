import React, {useContext, useState} from 'react';

import {GlobalContext} from '../../contexts/global';

import './styles.scss'
import {DataGrid} from '@mui/x-data-grid';
import {useNavigate} from 'react-router-dom';
import {Dialog, MenuItem, Tab, Tabs, TextField} from "@mui/material";
import Button from "../../common/components/button/button";
import DialogCriarGarcom from "../../common/components/dialogCriarGarcom/dialog"
import DialogCriarMesa from "../../common/components/dialogCriarMesa/dialog"

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
    mesas,
    columnsMesa,
    garcons,
    garconsQtdMesas,
    columnsGarcom,
    columnsGarcomQtd,
    getMesas,
    getGarcons,
    getGarcomByEmail,
    getMesasGarcom,
    createGarcom,
    deleteGarcom,
    getMesaByNumero,
    getMesasLivres,
    getMesasOcupadas,
    getMesasByCapacidade,
    getMesasOcupadasByIdGarcom,
    getMesasByIdGarcom,
    createMesa,
    alterarSituacaoMesa,
    alterarGarcomMesa,
    deleteMesa,
  } = useContext(GlobalContext)

  const [tab, setTab] = useState(0)
  const navigate = useNavigate()

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const Table = () => {
    switch (tab) {
      case 0:
        return <Mesas/>
      case 1:
        return <Garcons/>
      case 2:
        return <GarconsQtdMesas/>
    }
  }

  const Mesas = () => {
    return (
      <div style={{height: '100%', width: '100%'}}>
        <DataGrid
          rows={mesas}
          columns={columnsMesa}
          pageSize={10}
        />
      </div>
    )
  }

  const Garcons = () => {
    return (
      <div style={{height: '100%', width: '100%'}}>
        <DataGrid
          rows={garcons}
          columns={columnsGarcom}
          pageSize={10}
        />
      </div>
    )
  }

  const GarconsQtdMesas = () => {
    return (
      <div style={{height: '100%', width: '100%'}}>
        <DataGrid
          rows={garconsQtdMesas}
          columns={columnsGarcomQtd}
          pageSize={10}
        />
      </div>
    )
  }

  const Menu = () => {
    switch (tab) {
      case 0:
        return <MenuMesas/>
      case 1:
        return <MenuGarcons/>
      case 2:
        return <></>
    }
  }

  const MenuMesas = () => {
    const [idGarcom1, setIdGarcom1] = useState("")
    const [idGarcom2, setIdGarcom2] = useState("")
    const [idGarcom3, setIdGarcom3] = useState("")
    const [idGarcom4, setIdGarcom4] = useState("")
    const [idMesa1, setIdMesa1] = useState("")
    const [idMesa2, setIdMesa2] = useState("")
    const [idMesa3, setIdMesa3] = useState("")
    const [numero, setNumero] = useState("")
    const [cap, setCap] = useState("")
    const [situacao, setSituacao] = useState("")

    const situacoes = ["livre", "ocupada", "reservada"];

    return <div className="menu-mesas">
      <div>
        <TextField
          label="E-mail"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <Button onClick={() => getMesaByNumero(numero)}>
          BUSCAR POR NUMERO
        </Button>
      </div>
      <div>
        <TextField
          label="Capacidade Maxima"
          type="number"
          value={cap}
          onChange={(e) => setCap(e.target.value)}
        />
        <Button onClick={() => getMesasByCapacidade(cap)}>
          BUSCAR MESAS POR CAPACIDADE
        </Button>
      </div>
      <div>
        <TextField
          label="ID Garcom"
          type="number"
          value={idGarcom1}
          onChange={(e) => setIdGarcom1(e.target.value)}
        />
        <Button onClick={() => getMesasByIdGarcom(idGarcom1)}>
          BUSCAR MESAS POR ID DO GARCOM
        </Button>
      </div>
      <div>
        <TextField
          label="ID Garcom"
          type="number"
          value={idGarcom2}
          onChange={(e) => setIdGarcom2(e.target.value)}
        />
        <Button onClick={() => getMesasOcupadasByIdGarcom(idGarcom2)}>
          BUSCAR MESAS OCUPADAS POR ID GARCOM
        </Button>
      </div>
      <div>
        <TextField
          label="ID Garcom"
          type="number"
          value={idMesa3}
          onChange={(e) => setIdMesa3(e.target.value)}
        />
        <Button onClick={() => deleteMesa(idMesa3)}>
          DELETAR POR ID
        </Button>
      </div>
      <div>
        <TextField
          label="ID Mesa"
          type="number"
          value={idMesa1}
          onChange={(e) => setIdMesa1(e.target.value)}
        />
        <TextField
          label="Situacao"
          type="number"
          value={situacao}
          onChange={(e) => setSituacao(e.target.value)}
          select
        >
          {situacoes.map((val) => {
            return <MenuItem value={val}> {val} </MenuItem>
          })}
        </TextField>
        <Button onClick={() => alterarSituacaoMesa(situacao)}>
          ALTERAR SITUAÇÃO DA MESA
        </Button>
      </div>
      <div>
        <TextField
          label="ID Mesa"
          type="number"
          value={idMesa2}
          onChange={(e) => setIdMesa2(e.target.value)}
        />
        <TextField
          label="ID Garcom"
          type="number"
          value={idGarcom3}
          onChange={(e) => setIdGarcom3(e.target.value)}
        />
        <Button onClick={() => alterarGarcomMesa(idMesa2)}>
          ALTERAR GARCOM DA MESA
        </Button>
      </div>
      <div>
        <Button onClick={() => setOpenCriarMesa(true)}>
          CRIAR
        </Button>
      </div>
      <div>
        <Button onClick={() => getMesasLivres()}>
          BUSCAR MESAS LIVRES
        </Button>
      </div>
    </div>
  }

  const MenuGarcons = () => {
    const [id, setId] = useState("")
    const [idDeletar, setIdDeletar] = useState("")
    const [email, setEmail] = useState("")

    return <div className="menu-garcons">
      <Button onClick={() => setOpenCriarGarcom(true)}>
        CRIAR
      </Button>
      <TextField
        label="ID"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Button onClick={() => getGarcomById(id)}>
        BUSCAR POR ID
      </Button>
      <TextField
        label="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={() => getGarcomByEmail(email)}>
        BUSCAR POR E-MAIL
      </Button>
      <TextField
        label="ID"
        type="number"
        value={idDeletar}
        onChange={(e) => setIdDeletar(e.target.value)}
      />
      <Button onClick={() => deleteGarcom(id)}>
        DELETAR POR ID
      </Button>
    </div>
  }

  return (<>
    <div className="home-container">
      <aside>
        <Tabs sx={{width: '100%'}} value={tab} onChange={handleChange}>
          <Tab label="MESAS" value={0}/>
          <Tab label="GARCONS" value={1}/>
          <Tab label="QUANTIDADE DE MESAS POR GARCOM" value={2}/>
        </Tabs>
        <Menu/>
      </aside>
      <Table/>
    </div>
    <DialogCriarGarcom/>
    <DialogCriarMesa/>
  </>)
}

export default Home
