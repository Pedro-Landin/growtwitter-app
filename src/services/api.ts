import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

/* console.log("Variável carregada do ENV:", import.meta.env.VITE_API_BASE_URL); */