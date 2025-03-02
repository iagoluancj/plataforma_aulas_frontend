import { useEffect, useState } from "react";
import { api } from "../api/api";
import { Class } from "../services/types";

export default function AulaList() {
  const [aulas, setAulas] = useState<Class[]>([]);

  useEffect(() => {
    api.get("/")
      .then(response => setAulas(response.data))
      .catch(error => console.error("Erro ao buscar aulas:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Aulas</h1>
      <ul>
        {aulas.map(aula => (
          <li key={aula.id}>
            <strong>{aula.title}</strong> - {aula.instructor_id} <br />
            {aula.description} <br />
            📅 {new Date(aula.scheduled_at).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
