import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/nav';
import Sidebar from '../components/sidebar';
import { DashboardContainer } from '../styles/dashboardStyles';
import { HeaderPage, MainContent, PageContent } from '../styles/stylesGlobal';
import { ClassCard, ClassFooter, ClassHeader, ClassList, DeleteButton, EditButton } from '../styles/manageClassesStyles';
import { CgEditFade } from 'react-icons/cg';
import { FaTrash } from 'react-icons/fa6';

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const [classes, setClasses] = useState([
        { id: 1, title: "Matemática Avançada", date: "10/03/2025", participants: 25 },
        { id: 2, title: "Introdução à Física", date: "15/03/2025", participants: 18 },
        { id: 3, title: "Programação em JavaScript", date: "20/03/2025", participants: 30 }
    ]);

    const CgEditFadeIcon = CgEditFade as React.ElementType;
    const FaTrashIcon = FaTrash as React.ElementType;

    return (
        <DashboardContainer>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <MainContent>
                <Nav title="Dashboard" toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
                <HeaderPage>
                    <h2>📋 Dashboard do Instrutor</h2>
                    <p>Bem-vindo ao seu painel! Aqui você pode acompanhar suas aulas agendadas e o número de alunos inscritos. Mantenha-se organizado e ofereça uma experiência incrível para seus estudantes!✨</p>
                </HeaderPage>
                <PageContent>
                    {/* Inserir graficos usando recharts */}
                    <ClassList>
                        {classes.map((aula) => (
                            <ClassCard key={aula.id}>
                                <ClassHeader>
                                    <h4>{aula.title}</h4>
                                    <EditButton><CgEditFadeIcon /> Editar</EditButton>
                                </ClassHeader>
                                <p>Data: {aula.date}</p>
                                <ClassFooter>
                                    <span>👥 {aula.participants} participantes</span>
                                    <DeleteButton><FaTrashIcon /> Excluir</DeleteButton>
                                </ClassFooter>
                            </ClassCard>
                        ))}
                    </ClassList>
                </PageContent>
            </MainContent>
        </DashboardContainer>
    );
};

export default Dashboard;
