import React, {createContext, useEffect, useState} from "react";
import {apiRoutes as api} from "../services/api.routes";

export const GlobalContext = createContext({});

export default function GlobalProvider({children}) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [mesas,   setMesas  ] = useState([])
  const [garcons, setGarcons] = useState([])

  const getMesas = async () => {
    setLoading(true)
    api.getMesas()
      .then((mesas) => {
        setMesas(mesas)
      }).catch((e) => {
        setMessage(e.message)
      }).finally(() => setLoading(false))
  }

  const getGarcons = async () => {
    setLoading(true)
    api.getGarcons()
      .then((garcons) => {
        setGarcons(garcons)
      }).catch((e) => {
        setMessage(e.message)
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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
