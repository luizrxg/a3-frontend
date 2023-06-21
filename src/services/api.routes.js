import api from "./api"

const m = "mesa"
const g = "garcom"

const apiRoutes = {

  //Mesa
  getMesas: () => api.get(`${m}`),
  getMesaByNumero: (numero) => api.get(`${m}?numero={${numero}}`),
  getMesasLivres: () => api.get(`${m}/livres`),
  getMesasOcupadas: () => api.get(`${m}/ocupadas`),
  getMesasByCapacidade: (cap) => api.get(`${m}?cap={${cap}}`),
  getMesasOcupadasByIdGarcom: (id) => api.get(`${m}?ocupadas-garcom/{${id}}`),
  getMesasByIdGarcom: (idGarcom) => api.get(`${m}?idGarcom={${idGarcom}}`),
  createMesa: (mesa) => api.post(`${m}`, mesa),
  alterarSituacaoMesa: (id, situacao) => api.post(`${m}?id={${id}}&situacao={${situacao}}`),
  alterarGarcomMesa: (id, idGarcom) => api.post(`${m}?id={${id}}&idGarcom={${idGarcom}}`),
  deleteMesa: (id) => api.delete(`${m}?id={${id}}`),

  //Garcom
  getGarcons: () => api.get(`${g}`),
  getGarcomById: (id) => api.get(`${g}?id={${id}}`),
  getGarcomByEmail: (email) => api.get(`${g}?email={${email}}`),
  getMesasGarcom: () => api.get(`${g}?mesas-por-garcom`),
  createGarcom: (garcom) => api.post(`${g}`, garcom),
  deleteGarcom: (id) => api.delete(`${g}?id={${id}}`)
}

export default apiRoutes
