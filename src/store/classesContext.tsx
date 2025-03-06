import { createContext, useState, useEffect, ReactNode } from "react";
import { Class, ClassContextType, Enrollments } from "../services/types";
import { useApi } from "../hooks/useApi";


// Responsável por fornecer as classes e enrollments assim que são consultadas 
// no início da aplicação no cliente.
export const ClassContext = createContext<ClassContextType | undefined>(undefined);

export const ClassProvider = ({ children }: { children: ReactNode }) => {
  const [classState, setClassState] = useState<Class[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollments[]>([]);

  const storedUser = sessionStorage.getItem("userData");
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  const user_id_cache = parsedUser?.id || '';

  const token = localStorage.getItem("authToken");

  const { getAll, getByParams } = useApi();

  useEffect(() => {
    const fetchClasses = async () => {
      const classes = await getAll("classes");
      setClassState(classes);
    };

    fetchClasses();
  }, [token]);

  useEffect(() => {
    const fetchEnrollments = async () => {
      const enrolledClasses = await getByParams("enrollments", { student: user_id_cache });
      setEnrollments(enrolledClasses);
    };

    fetchEnrollments();
  }, []);


  return <ClassContext.Provider value={{ classState, enrollments }}> {children} </ClassContext.Provider>;
};
