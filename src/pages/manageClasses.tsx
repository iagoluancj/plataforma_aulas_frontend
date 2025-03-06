import React, { useContext, useEffect, useState } from 'react';
import Nav from '../components/nav';
import Sidebar from '../components/sidebar';
import { HeaderPage, MainContent, PageContent } from '../styles/stylesGlobal';
import { ClassCard, ClassFooter, ClassHeader, ClassList, ClassScheduled, Container, ContainerFilters, CreateClass, DeleteButton, EditButton, Filters, Header, ManageClassesContainer } from '../styles/manageClassesStyles';
import { FaPlus, FaTrash } from 'react-icons/fa6';
import { CgEditFade } from 'react-icons/cg';
import { ClassContext } from '../store/classesContext';
import { Class } from '../services/types';
import { MdOutlineDateRange } from 'react-icons/md';
import EditClassModal from '../components/editModal';
import DeleteClassModal from '../components/deleteModal';
import CreateClassModal from '../components/createModal';
import { useApi } from '../hooks/useApi';


const ManageClasses = () => {
    // Ícones:  
    // Foi necessário importar e utilizar os ícones dessa forma,  
    // pois nesta versão do React, o uso direto de 'GrSave' gera falhas.
    const FaPlusIcon = FaPlus as React.ElementType;
    const FaTrashIcon = FaTrash as React.ElementType;
    const CgEditFadeIcon = CgEditFade as React.ElementType;
    const MdOutlineDateRangeIcon = MdOutlineDateRange as React.ElementType;

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState<Class | null>(null);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedDeleteClass, setSelectedDeleteClass] = useState<Class | null>(null);

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);


    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [classFiltered, setClassFiltered] = useState<Class[]>([]);
    const context = useContext(ClassContext);
    const { getByParams } = useApi();

    const storedUser = sessionStorage.getItem("userData");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const instructor_id_cache = parsedUser?.id || '';

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    const handleEditClick = (aula: Class) => {
        setSelectedClass(aula);
        setIsEditModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsEditModalOpen(false);
        setSelectedClass(null);
    };

    const handleSaveClass = (updatedClass: Class) => {
        const updatedClasses = classFiltered.map((c) =>
            c.id === updatedClass.id ? updatedClass : c
        );
        setClassFiltered(updatedClasses);
    };


    const handleOpenDeleteModal = (aula: Class) => {
        setSelectedDeleteClass(aula);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = (deletedId: string) => {
        setClassFiltered(classFiltered.filter((c: Class) => c.id !== deletedId));
    };


    const handleOpenCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    const handleCloseCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    const handleSaveNewClass = (newClass: Class) => {
        setClassFiltered([...classFiltered, newClass]);
    };

    // Foi necessário utilizar o operador '?' em classState  
    // para evitar erros caso o contexto ainda não tenha sido carregado.
    useEffect(() => {
        const fetchClasses = async () => {
            const classes = await getByParams("classes", { instructor_id: instructor_id_cache });
            setClassFiltered(classes);
        };

        fetchClasses();
    }, []);



    if (!context) return <p>Erro ao carregar as aulas.</p>;

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

                        <ContainerFilters>
                            <Header>
                                <span>Filtros:</span>
                                <CreateClass onClick={handleOpenCreateModal}>
                                    <FaPlusIcon /> Criar Aula
                                </CreateClass>
                            </Header>

                            <Filters>
                                <button>Todas as aulas</button>
                                <button>Aulas recentes</button>
                                <button>Aulas antigas</button>
                            </Filters>
                        </ContainerFilters>

                        <ClassList>
                            {classFiltered.length > 0 ? (
                                classFiltered.map((aula) => (
                                    <ClassCard key={aula.id}>
                                        <ClassHeader>
                                            <h4> <span>Matéria: </span>{aula.title}</h4>
                                            <p>{aula.description}</p>
                                        </ClassHeader>
                                        <ClassScheduled><MdOutlineDateRangeIcon />
                                            {new Date(new Date(aula.scheduled_at).getTime() + 3 * 60 * 60 * 1000).toLocaleString('pt-BR', {
                                                year: 'numeric',
                                                month: 'numeric',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </ClassScheduled>
                                        <ClassFooter>
                                            <DeleteButton onClick={() => handleOpenDeleteModal(aula)}>
                                                <FaTrashIcon />
                                            </DeleteButton>
                                            <EditButton onClick={() => handleEditClick(aula)}>
                                                Editar <CgEditFadeIcon />
                                            </EditButton>
                                        </ClassFooter>
                                    </ClassCard>
                                ))
                            ) : (
                                <p>Sem aulas criadas...</p>
                            )}
                        </ClassList>
                    </Container>
                </PageContent>
            </MainContent>

            {/* Modais para confirmações e ações:  
                    Não foram inseridos em um provider global,  
                    pois, por enquanto, são utilizados apenas neste componente. */}
            {isEditModalOpen && selectedClass && (
                <EditClassModal
                    classData={selectedClass}
                    onClose={handleCloseModal}
                    onSave={handleSaveClass}
                />
            )}
            {isDeleteModalOpen && selectedDeleteClass && (
                <DeleteClassModal
                    classData={selectedDeleteClass!}
                    onClose={() => setIsDeleteModalOpen(false)}
                    onDelete={handleDelete}
                />
            )}
            {isCreateModalOpen && (
                <CreateClassModal
                    onClose={handleCloseCreateModal}
                    onSave={handleSaveNewClass}
                    instructorId={instructor_id_cache}
                />
            )}
        </ManageClassesContainer>
    );
};

export default ManageClasses;
