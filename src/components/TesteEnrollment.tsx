import { useEffect, useState } from "react";
import axios from "axios";

interface Enrollment {
    id?: number;
    student_id: string;
    class_obj_id: string;
    date_enrolled: string;
}

const API_URL = "http://127.0.0.1:8000/api/enrollments/";

const Enrollments = () => {
    const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
    const [newEnrollment, setNewEnrollment] = useState<Enrollment>({
        student_id: "9AC16DAA-7861-4FB4-9872-5462B9A1FAEE", // ID fixo do estudante
        class_obj_id: "B746B20E-62F8-4A88-A708-9E516735E10D", // ID fixo da classe
        date_enrolled: new Date().toISOString(), 
    });

    //  (GET)
    useEffect(() => {
        axios.get(API_URL)
            .then((response) => setEnrollments(response.data))
            .catch((error) => console.error("Erro ao buscar inscrições", error));
    }, []);

    //  (POST)
    const createEnrollment = () => {
        axios.post(API_URL, newEnrollment)
            .then((response) => {
                setEnrollments([...enrollments, response.data]);
            })
            .catch((error) => console.error("Erro ao criar inscrição", error));
    };

    return (
        <div>
            <h1>Lista de Inscrições</h1>
            <ul>
                {enrollments.map((enrollment) => (
                    <li key={enrollment.id}>
                        <strong>Estudante:</strong> {enrollment.student_id} <br />
                        <strong>Turma:</strong> {enrollment.class_obj_id} <br />
                        📅 {new Date(enrollment.date_enrolled).toLocaleString()}
                    </li>
                ))}
            </ul>

            <h2>Nova Inscrição</h2>
            <button onClick={createEnrollment}>➕ Criar Inscrição</button>
        </div>
    );
};

export default Enrollments;
