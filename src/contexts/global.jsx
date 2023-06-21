import React, {createContext, useEffect, useState} from "react";
import api from "../services/api.routes";

export const GlobalContext = createContext({});

export default function GlobalProvider({children}) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [mesas, setMesas] = useState([])
  const [garcons, setGarcons] = useState([])
  const [garconsQtdMesas, setGarconsQtdMesas] = useState([])
  const [openCriarGarcom, setOpenCriarGarcom] = useState(false)
  const [openEditarGarcom, setOpenEditarGarcom] = useState(false)
  const [openCriarMesa, setOpenCriarMesa] = useState(false)
  const [openEditarMesa, setOpenEditarMesa] = useState(false)

  const columnsGarcom = [
    {field: 'id',             headerName: 'ID',                 width: 90},
    {field: 'nome',           headerName: 'Nome',               width: 90},
    {field: 'cpf',            headerName: 'CPF',                width: 90},
    {field: 'dataNascimento', headerName: 'Data de nascimento', width: 200},
    {field: 'email',          headerName: 'E-mail',             width: 90},
    {field: 'telefone',       headerName: 'Telefone',           width: 90},
    {field: 'sexo',           headerName: 'Sexo',               width: 90},
    {field: 'salario',        headerName: 'Salario',            width: 90},
  ]

  const columnsGarcomQtd = [
    ...columnsGarcom,
    {field: 'qtd', headerName: 'Qtd de Mesas', width: 150},
  ]

  const columnsMesa = [
    {field: 'id',               headerName: 'ID',                width: 90},
    {field: 'numero',           headerName: 'Numero',            width: 90},
    {field: 'situacao',         headerName: 'Situacao',          width: 90},
    {field: 'capacidadeMaxima', headerName: 'Capacidade Máxima', width: 90},
    {field: 'idGarcom',         headerName: 'ID do Garcom',      width: 90},
    {field: 'nomeGarcom',       headerName: 'Nome do garcom',    width: 90},
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

  const getGarcomByEmail = async (email) => {
    setLoading(true)
    await api.getGarcomByEmail(email)
      .then((garcom) => {
        setGarcons([garcom])
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }
  const getMesasGarcom = async () => {
    setLoading(true)
    await api.getMesasGarcom()
      .then((garcons) => {
        setGarconsQtdMesas(garcons)
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }
  const createGarcom = async (garcom) => {
    setLoading(true)
    api.createGarcom(garcom)
      .then(() => {
        getGarcons()
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }
  const deleteGarcom = async (id) => {
    setLoading(true)
    api.deleteGarcom(id)
      .then(() => {
        getGarcons()
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }

  const getMesaByNumero = async (numero) => {
    setLoading(true)
    api.getMesaByNumero(numero)
      .then((mesa) => {
        setMesas([mesa])
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }

  const getMesasLivres = async () => {
    setLoading(true)
    api.getMesasLivres()
      .then((mesas) => {
        setMesas(mesas)
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }

  const getMesasOcupadas = async () => {
    setLoading(true)
    api.getMesasOcupadas()
      .then((mesas) => {
        setMesas(mesas)
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }

  const getMesasByCapacidade = async (cap) => {
    setLoading(true)
    api.getMesasByCapacidade(cap)
      .then((mesas) => {
        setMesas(mesas)
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }

  const getMesasOcupadasByIdGarcom = async (id) => {
    setLoading(true)
    api.getMesasOcupadasByIdGarcom(id)
      .then((mesas) => {
        setMesas(mesas)
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }

  const getMesasByIdGarcom = async (idGarcom) => {
    setLoading(true)
    api.getMesasByIdGarcom(idGarcom)
      .then((mesas) => {
        setMesas(mesas)
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }

  const createMesa = async (mesa) => {
    setLoading(true)
    api.createMesa(mesa)
      .then(() => {
        getMesas()
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }

  const alterarSituacaoMesa = async (id, situacao) => {
    setLoading(true)
    api.alterarSituacaoMesa(id, situacao)
      .then(() => {
        getMesas()
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }

  const alterarGarcomMesa = async (id, idGarcom) => {
    setLoading(true)
    api.alterarGarcomMesa(id, idGarcom)
      .then(() => {
        getMesas()
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }

  const deleteMesa = async (id) => {
    setLoading(true)
    api.deleteMesa(id)
      .then(() => {
        getMesas()
      }).catch((e) => {
        setMessage(e?.message)
      }).finally(() => setLoading(false))
  }


  useEffect(() => {
    getMesasGarcom()
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
        garconsQtdMesas,
        columnsGarcom,
        columnsGarcomQtd,
        columnsMesa,
        openCriarGarcom,
        setOpenCriarGarcom,
        openEditarGarcom,
        setOpenEditarGarcom,
        openCriarMesa,
        setOpenCriarMesa,
        openEditarMesa,
        setOpenEditarMesa,
        getGarcons,
        getMesas,
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
        deleteMesa
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
