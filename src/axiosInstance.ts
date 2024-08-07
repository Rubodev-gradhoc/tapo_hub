import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000", // Cambia esto por la URL base de tu API
  timeout: 100000, // Cambia esto por el tiempo de espera deseado en milisegundos
  headers: {
    "Content-Type": "application/json", // Cambia esto según el tipo de contenido que envíes
    // Agrega cualquier otra configuración de encabezado que necesites
  },
});

export default api;
