import React, { useState } from 'react';
import Nav from '../components/nav';
import Sidebar from '../components/sidebar';
import { HeaderPage, MainContent, PageContent } from '../styles/stylesGlobal';
import { ClassCard, ClassFooter, ClassHeader, ClassList, Container, CreateClass, DeleteButton, EditButton, Filters, Header, ManageClassesContainer } from '../styles/manageClassesStyles';
import { FaPlus, FaTrash } from 'react-icons/fa6';
import { CgEditFade } from 'react-icons/cg';

const ManageClasses = () => {
    const FaPlusIcon = FaPlus as React.ElementType;
    const FaTrashIcon = FaTrash as React.ElementType;
    const CgEditFadeIcon = CgEditFade as React.ElementType;

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <ManageClassesContainer>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <MainContent>
                <Nav title="Gerenciar aulas" toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
                <HeaderPage>
                    <h2>👨‍🏫 Área do Instrutor</h2>
                    <p>Aqui você pode criar, editar e gerenciar suas aulas. Mantenha o conteúdo sempre atualizado e ofereça a melhor experiência para seus alunos! 🚀✨</p>
                </HeaderPage>
                <PageContent>
                    <Container>
                        <Header>
                            <span>Filtros:</span>
                            <CreateClass>
                                <FaPlusIcon /> Criar Aula
                            </CreateClass>
                        </Header>

                        <Filters>
                            <button>Todas as aulas</button>
                            <button>Aulas recentes</button>
                            <button>Aulas antigas</button>
                            <button>Aulas deletadas</button>
                        </Filters>

                        <ClassList>
                            <ClassCard>
                                <ClassHeader>
                                    <h4>Matéria: Matemática</h4>
                                    <EditButton>
                                        <CgEditFadeIcon /> Editar
                                    </EditButton>
                                </ClassHeader>
                                <p>Matemática aplicada à física não teórica...</p>
                                <ClassFooter>
                                    <img src="https://s4.static.brasilescola.uol.com.br/be/2022/11/ilustracao-de-varios-elementos-caracteristicos-da-matematica-calculadora-grafico-compasso-numero-pi-cone-lapis-etc.jpg" alt="Aula" />
                                    <DeleteButton>
                                        <FaTrashIcon />
                                    </DeleteButton>
                                </ClassFooter>
                            </ClassCard>
                            <ClassCard>
                                <ClassHeader>
                                    <h4>Matéria: Matemática</h4>
                                    <EditButton>
                                        <CgEditFadeIcon /> Editar
                                    </EditButton>
                                </ClassHeader>
                                <p>Matemática aplicada à física não teórica...</p>
                                <ClassFooter>
                                    <img src="https://s4.static.brasilescola.uol.com.br/be/2022/11/ilustracao-de-varios-elementos-caracteristicos-da-matematica-calculadora-grafico-compasso-numero-pi-cone-lapis-etc.jpg" alt="Aula" />
                                    <DeleteButton>
                                        <FaTrashIcon />
                                    </DeleteButton>
                                </ClassFooter>
                            </ClassCard>
                        </ClassList>
                    </Container>
                </PageContent>
            </MainContent>
        </ManageClassesContainer>
    );
};

export default ManageClasses;
