import { api } from "./api";
import { Class } from "../services/types";

export const getClassesByInstructor = async (instructorId: string): Promise<Class[]> => {
  try {
    const response = await api.get(`/classes/`, {
      params: { instructor_id: instructorId },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar aulas:", error);
    return [];
  }
};
 