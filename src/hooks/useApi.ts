import { api } from "../api/api";

// Hook de API:  
// Criado para reutilizar as rotas, evitando a necessidade de definir  
// uma rota separada para cada entidade do banco.
export const useApi = () => {
  const token = localStorage.getItem("authToken");

  const create = async (endpoint: string, data: object) => {
    try {
      const response = await api.post(`${endpoint}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Erro ao criar em ${endpoint}:`, error);
      return null;
    }
  };

  const createUser = async (endpoint: string, data: object) => {
    try {
      const response = await api.post(endpoint, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Erro ao criar usuário em ${endpoint}:`, error);
      return null;
    }
  };

  const getAll = async (endpoint: string) => {
    try {
      const response = await api.get(`${endpoint}/`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar em ${endpoint}:`, error);
      return null;
    }
  };

  const getById = async (endpoint: string, id: string) => {
    try {
      const response = await api.get(`${endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar em ${endpoint}:`, error);
      return null;
    }
  };

  const getByParams = async (endpoint: string, params: object) => {
    try {
      const urlToFetch = `${endpoint}/?${new URLSearchParams(params as any).toString()}`;
      const response = await api.get(urlToFetch, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      return null;
    }
  };


  const update = async (
    endpoint: string,
    id: string,
    data: object,
    customHeaders: { "Content-Type"?: string } = {}
  ) => {
    try {

      const headers = {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": customHeaders["Content-Type"] || "application/json",
        ...customHeaders,
      };

      const response = await api.put(`${endpoint}/${id}/`, data, { headers });

      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar em ${endpoint}:`, error);
      return null;
    }
  };

  const updateUser = async (id: string, formData: FormData) => {
    try {
      const headers = {
        Authorization: token ? `Bearer ${token}` : "",
        "Content-Type": "multipart/form-data",
      };

      const response = await api.put(`/users/${id}/`, formData, { headers });

      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar usuário:`, error);
      return null;
    }
  };


  const remove = async (endpoint: string, id: string) => {
    try {
      await api.delete(`${endpoint}/${id}/`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          'Content-Type': 'application/json',
        },
      });
      return true;
    } catch (error) {
      console.error(`Erro ao deletar em ${endpoint}:`, error);
      return false;
    }
  };

  return { create, createUser, getAll, getById, getByParams, update, updateUser, remove };
};
