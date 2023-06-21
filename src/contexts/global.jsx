import React, {createContext, useEffect, useState} from "react";
import api from "../services/api.routes";

export const GlobalContext = createContext({});

export default function GlobalProvider({children}) {
  const [loading,          setLoading         ] = useState(false)
  const [message,          setMessage         ] = useState("")
  const [mesas,            setMesas           ] = useState([])
  const [garcons,          setGarcons         ] = useState([])
  const [openCriarGarcom,  setOpenCriarGarcom ] = useState(false)
  const [openEditarGarcom, setOpenEditarGarcom] = useState(false)
  const [openCriarMesa,    setOpenCriarMesa   ] = useState(false)
  const [openEditarMesa,   setOpenEditarMesa  ] = useState(false)

  const columnsGarcom = [
      { field: 'id',             headerName: 'ID',                 width: 90 },
      { field: 'nome',           headerName: 'Nome',               width: 90 },
      { field: 'cpf',            headerName: 'CPF',                width: 90 },
      { field: 'dataNascimento', headerName: 'Data de nascimento', width: 90 },
      { field: 'email',          headerName: 'E-mail',             width: 90 },
      { field: 'telefone',       headerName: 'Telefone',           width: 90 },
      { field: 'sexo',           headerName: 'Sexo',               width: 90 },
      { field: 'salario',        headerName: 'Salario',            width: 90 },
  ]

  const columnsMesa = [
      { field: 'id',               headerName: 'ID',                width: 90 },
      { field: 'numero',           headerName: 'Numero',            width: 90 },
      { field: 'situacao',         headerName: 'Situacao',          width: 90 },
      { field: 'capacidadeMaxima', headerName: 'Capacidade Máxima', width: 90 },
      { field: 'idGarcom',         headerName: 'ID do Garcom',      width: 90 },
      { field: 'nomeGarcom',       headerName: 'Nome do garcom',    width: 90 },
  ]

  const getMesas = async () => {
    setLoading(true)
    await api.getMesas()
      .then((mesas) => {
        setMesas(mesas)
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }

  const getGarcons = async () => {
    setLoading(true)
    await api.getGarcons()
      .then((garcons) => {
        setGarcons(garcons)
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }

  const criarGarcom = async (garcom) => {
      setLoading(true)
      await api.getGarcons(garcom)
          .then(() => {
              getGarcons()
          }).catch((e) => {
              setMessage(e?.message)
          }).finally(() => setLoading(false))
  }

  useEffect(() => {
    getGarcons()
    getMesas()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        loading,
        message,
        setMessage,
        mesas,
        garcons,
        getGarcons,
        getMesas,
        columnsGarcom,
        columnsMesa,
        openCriarGarcom,
        setOpenCriarGarcom,
        openEditarGarcom,
        setOpenEditarGarcom,
        openCriarMesa,
        setOpenCriarMesa,
        openEditarMesa,
        setOpenEditarMesa,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
