import { api } from "../api/api";

export const useApi = () => {
  const create = async (endpoint: string, data: object) => {
    try {
      const response = await api.post(`${endpoint}/`, data);
      return response.data;
    } catch (error) {
      console.error(`Erro ao criar em ${endpoint}:`, error);
      return null;
    }
  };

  const getAll = async (endpoint: string) => {
    try {
      const response = await api.get(`${endpoint}/`);
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
      const response = await api.get(urlToFetch);
      return response.data;
    } catch (error) {
      return null;
    }
  };


  const update = async (endpoint: string, id: string, data: object) => {
    try {

      const response = await api.put(`${endpoint}/${id}/`, data);
      return response.data;
    } catch (error) {
      console.error(`Erro ao atualizar em ${endpoint}:`, error);
      return null;
    }
  };

  const remove = async (endpoint: string, id: string) => {
    try {
      await api.delete(`${endpoint}/${id}/`);
      return true;
    } catch (error) {
      console.error(`Erro ao deletar em ${endpoint}:`, error);
      return false;
    }
  };

  return { create, getAll, getById, getByParams, update, remove };
};
