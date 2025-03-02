import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/auth'; 

export const loginUser = async (email: string, senha: string) => {
  const response = await axios.post(`${API_URL}/login/`, {
    email,
    senha,
  });
  return response.data;
};
