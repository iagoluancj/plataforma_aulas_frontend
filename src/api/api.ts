import axios from "axios";
// Rota principal:  
// Definida como base para todas as outras requisições da aplicação.
const API_URL = "http://127.0.0.1:8000/api";

export const api = axios.create({
  baseURL: API_URL,
  validateStatus: () => true,
});
