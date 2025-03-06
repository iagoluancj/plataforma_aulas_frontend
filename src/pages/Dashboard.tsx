import React, { useEffect, useState } from 'react';
import Nav from '../components/nav';
import Sidebar from '../components/sidebar';
import { DashboardCard, DashboardCharts, DashboardContainer, DashboardHeader, DashboardList, DashboardListItens } from '../styles/dashboardStyles';
import { HeaderPage, MainContent, PageContent } from '../styles/stylesGlobal';
import { ClassFooter } from '../styles/manageClassesStyles';

import { useApi } from '../hooks/useApi';
import { ClassWithEnrollments } from '../services/types';
import { MdOutlineDateRange } from 'react-icons/md';
import { IoPeopleSharp } from 'react-icons/io5';
import SimpleRadarChart from '../components/radarChart';
import SimpleLineChart from '../components/simpleChart';
//
const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { getAll } = useApi();
    const [classes, setClasses] = useState<ClassWithEnrollments[]>([]);

    useEffect(() => {
        const fetchClasses = async () => {
            const data = await getAll("/instructor/dashboard/scheduled_classes");
            if (data) {
                setClasses(data);
            }
        };

        fetchClasses();
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const MdOutlineDateRangeIcon = MdOutlineDateRange as React.ElementType;
    const IoPeopleSharpIcon = IoPeopleSharp as React.ElementType;

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

                    <DashboardList>
                        <h3>
                            <span style={{ color: '#2D9CDB' }}>Quantidade de Alunos por Aula</span> e 
                            <span style={{ color: '#8884d8' }}> Evolução Mensal de Participantes/<span style={{ color: '#82ca9d' }}>aulas</span> </span>
                        </h3>
                        <DashboardCharts>
                            <SimpleRadarChart classes={classes} />
                            <SimpleLineChart classes={classes} />
                        </DashboardCharts>
                        <h3>Suas aulas</h3>
                        <DashboardListItens>
                            {classes.map((aula) => (
                                <DashboardCard key={aula.id}>
                                    <DashboardHeader>
                                        <h4>{aula.title}</h4>
                                    </DashboardHeader>

                                    <ClassFooter>
                                        <span>
                                            <IoPeopleSharpIcon />
                                            {aula.participants_count === 1 || aula.participants_count === 0 ? `${aula.participants_count} Participante` : `${aula.participants_count} Participantes`}
                                        </span>

                                        <p>
                                            <MdOutlineDateRangeIcon />
                                            {new Date(new Date(aula.scheduled_at).getTime() + 3 * 60 * 60 * 1000).toLocaleString('pt-BR', {
                                                year: 'numeric',
                                                month: 'numeric',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}</p>
                                    </ClassFooter>
                                </DashboardCard>
                            ))}
                        </DashboardListItens>

                    </DashboardList>
                </PageContent>
            </MainContent>
        </DashboardContainer>
    );
};

export default Dashboard;
