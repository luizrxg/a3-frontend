import axios from "axios";
import ApiError from "../common/types/apierror";

const api = axios.create({
    baseURL: "https://localhost:8080/",
    timeout: 5000,
});

const NO_CONTENT = 204;
api?.interceptors?.response.use(
    (response) => {
        if (response.status === NO_CONTENT) return undefined;
        return response.data;
    },

    (response) => {
        let apiError
        if (response.status === NO_CONTENT) {
            apiError = {
                stack: "",
                message: "Erro ao executar API",
            };
        } else {
            apiError = {
                stack: "",
                message: "Nenhum usuário encontrado",
            };
        }

        return Promise.reject(apiError);
    },
);

export default api;
