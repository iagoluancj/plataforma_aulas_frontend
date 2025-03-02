import { useEffect, useState } from "react";
import axios from "axios";

interface Aula {
    id?: number;
    titulo: string;
    descricao: string;
    data_criacao: string;
    instrutor: string;
    data_aula: string;
}

const API_URL = "http://127.0.0.1:8000/api/aulas/";

const Aulas = () => {
    const [aulas, setAulas] = useState<Aula[]>([]);
    const [novaAula, setNovaAula] = useState<Aula>({
        titulo: "",
        descricao: "",
        data_criacao: "",
        instrutor: "",
        data_aula: "",
    });

    //  (GET)
    useEffect(() => {
        axios.get(API_URL)
            .then((response) => setAulas(response.data))
            .catch((error) => console.error("Erro ao buscar aulas", error));
    }, []);

    // (POST)
    const criarAula = () => {
        axios.post(API_URL, novaAula)
            .then((response) => {
                setAulas([...aulas, response.data]);
                setNovaAula({ titulo: "", descricao: "", data_criacao: "", instrutor: "", data_aula: "" });
            })
            .catch((error) => console.error("Erro ao criar aula", error));
    };

    //  (DELETE)
    const deletarAula = (id: number) => {
        axios.delete(`${API_URL}${id}/`)
            .then(() => setAulas(aulas.filter((aula) => aula.id !== id)))
            .catch((error) => console.error("Erro ao deletar aula", error));
    };

    return (
        <div>
            <h1>Lista de Aulas</h1>
            <ul>
                {aulas.map((aula) => (
                    <li key={aula.id}>
                        <strong>{aula.titulo}</strong> - {aula.instrutor} <br />
                        {aula.descricao} <br />
                        📅 {new Date(aula.data_criacao).toLocaleString()}
                        <button onClick={() => deletarAula(aula.id!)}>🗑 Excluir</button>
                    </li>
                ))}
            </ul>

            <h2>Nova Aula</h2>
            <input
                type="text"
                placeholder="Título"
                value={novaAula.titulo}
                onChange={(e) => setNovaAula({ ...novaAula, titulo: e.target.value })}
            />
            <input
                type="text"
                placeholder="Descrição"
                value={novaAula.descricao}
                onChange={(e) => setNovaAula({ ...novaAula, descricao: e.target.value })}
            />
            <input
                type="datetime-local"
                value={novaAula.data_criacao}
                onChange={(e) => setNovaAula({ ...novaAula, data_criacao: e.target.value })}
            />
            <input
                type="text"
                placeholder="Instrutor"
                value={novaAula.instrutor}
                onChange={(e) => setNovaAula({ ...novaAula, instrutor: e.target.value })}
            />
            <input
                type="datetime-local"
                value={novaAula.data_aula}
                onChange={(e) => setNovaAula({ ...novaAula, data_aula: e.target.value })}
            />
            <button onClick={criarAula}>➕ Criar Aula</button>
        </div>
    );
};

export default Aulas;
