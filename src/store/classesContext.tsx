import { createContext, useState, useEffect, ReactNode } from "react";
import { Class, ClassContextType, Enrollments } from "../services/types";
import { useApi } from "../hooks/useApi";



// Skelleton/mock utilizado para testes e permanecerá para possiveis falhas onde o class não seja renderizado.
export const mockClasses = [
  {
    id: '1',
    title: "Skelleton Mock",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis odio eget magna lacinia lacinia.",
    scheduled_at: "2024-03-10T14:00:00Z",
    instructor_id: 'Iago Jesus',
    instructor_name: 'Iago Jesus',
  },
];


// Responsável por fornecer as classes e enrollments assim que são consultadas 
// no início da aplicação no cliente.
export const ClassContext = createContext<ClassContextType | undefined>(undefined);

export const ClassProvider = ({ children }: { children: ReactNode }) => {
  const [classState, setClassState] = useState<Class[]>(mockClasses || []);
  const [enrollments, setEnrollments] = useState<Enrollments[]>([]);

  const storedUser = sessionStorage.getItem("userData");
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  const user_id_cache = parsedUser?.id || '';

  const { getAll, getByParams } = useApi();

  useEffect(() => {
    const fetchClasses = async () => {
      const classes = await getAll("classes");
      setClassState(classes);
    };

    fetchClasses();
  }, []);

  useEffect(() => {
    const fetchEnrollments = async () => {
      const enrolledClasses = await getByParams("enrollments", { student: user_id_cache });
      setEnrollments(enrolledClasses);
    };

    fetchEnrollments();
  }, []);


  return <ClassContext.Provider value={{ classState, enrollments }}> {children} </ClassContext.Provider>;
};
