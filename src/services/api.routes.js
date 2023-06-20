import api from "./api"

const apiRoutes = {
    getMesas: () => api.get(`mesa/`),
    getGarcons: () => api.get(`garcom/`)
}

export default apiRoutes
