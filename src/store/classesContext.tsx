import { createContext, useState, useEffect, ReactNode } from "react";
import { Class } from "../services/types";

interface ClassContextType {
  classState: Class[];
}

const mockClasses = [
  {
    id: 1,
    title: "Introdução ao React",
    description: "Aprenda os fundamentos do React e como criar componentes reutilizáveis.",
    scheduled_at: "2024-03-10T14:00:00Z",
    instructor_id: 101,
  },
  {
    id: 3,
    title: "Introdução ao React",
    description: "Aprenda os fundamentos do React e como criar componentes reutilizáveis.",
    scheduled_at: "2024-03-10T14:00:00Z",
    instructor_id: 101,
  },  {
    id: 4,
    title: "Introdução ao React",
    description: "Aprenda os fundamentos do React e como criar componentes reutilizáveis.",
    scheduled_at: "2024-03-10T14:00:00Z",
    instructor_id: 101,
  },
  {
    id: 2,
    title: "JavaScript Moderno",
    description: "Explorando as novas funcionalidades do JavaScript ES6+.",
    scheduled_at: "2024-03-15T16:00:00Z",
    instructor_id: 102,
  }
];


export const ClassContext = createContext<ClassContextType | undefined>(undefined);

export const ClassProvider = ({ children }: { children: ReactNode }) => {
  const [classState, setClassState] = useState<Class[]>([]);


  useEffect(() => {
    const fetchClass = async () => {
      try {
        const response = await fetch("https://api.exemplo.com/aulas"); 
        if (!response.ok) throw new Error("API Indisponível");
        const data = await response.json();
        setClassState(data);
      } catch (error) {
        console.warn("Usando dados mockados: ", error);
        setClassState(mockClasses); 
      }
    };

    fetchClass();
  }, []);

  return <ClassContext.Provider value={{ classState }}>{children}</ClassContext.Provider>;
};
