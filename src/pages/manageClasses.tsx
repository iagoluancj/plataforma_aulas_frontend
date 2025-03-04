import React, { useContext, useEffect, useState } from 'react';
import Nav from '../components/nav';
import Sidebar from '../components/sidebar';
import { HeaderPage, MainContent, PageContent } from '../styles/stylesGlobal';
import { ClassCard, ClassFooter, ClassHeader, ClassList, ClassScheduled, Container, ContainerFilters, CreateClass, DeleteButton, EditButton, Filters, Header, ManageClassesContainer } from '../styles/manageClassesStyles';
import { FaPlus, FaTrash } from 'react-icons/fa6';
import { CgEditFade } from 'react-icons/cg';
import { ClassContext, mockClasses } from '../store/classesContext';
import { Class } from '../services/types';
import { MdOutlineDateRange } from 'react-icons/md';
import EditClassModal from '../components/editModa';
import DeleteClassModal from '../components/deleteModal';
import CreateClassModal from '../components/createModal';


const ManageClasses = () => {
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
    const [classFiltered, setClassFiltered] = useState<Class[]>(mockClasses || []);
    const instructor_id_cache = "11cbec86-1512-4579-91ba-1d47e3f57fd2";
    const context = useContext(ClassContext);

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
        console.log(isDeleteModalOpen)
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


    useEffect(() => {
        if (context?.classState?.length) {
            const filteredClasses = context.classState.filter((classItem: Class) =>
                classItem.instructor_id === instructor_id_cache
            );
            setClassFiltered(filteredClasses);
        }
    }, [context?.classState]);

    const testeMobile = [
        {
            "id": "3d0dcfdc-bffb-4def-b0f5-3db18e18cc54",
            "title": "Biologia Celular",
            "description": "Fundamentos da biologia celular e suas aplicações",
            "scheduled_at": "2025-03-19T09:00:00Z",
            "instructor_id": "2d1f331c-f3f3-4955-954b-1c86eb7c0998",
            "instructor_name": "Iago Jesus",
        },
        {
            "id": "8ed6f869-ab4d-417b-90c5-b063e966c84b",
            "title": "dasdas",
            "description": "asdasdasd",
            "scheduled_at": "2025-03-06T00:00:00Z",
            "instructor_name": "Iago Jesus",
            "instructor_id": "11cbec86-1512-4579-91ba-1d47e3f57fd2"
        }
    ]


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
                                    <ClassCard>
                                        <ClassHeader>
                                            <h4>Matéria: {aula.title}</h4>
                                            <p>{aula.description}</p>
                                        </ClassHeader>
                                        <ClassScheduled><MdOutlineDateRangeIcon /> {new Date(aula.scheduled_at).toLocaleDateString()}</ClassScheduled>
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
                                <p>Sem aulas vinculadas...</p>
                            )}
                            {testeMobile.map((aula) => (
                                <ClassCard>
                                    <ClassHeader>
                                        <h4>Matéria: {aula.title}</h4>
                                        <p>{aula.description}</p>
                                    </ClassHeader>
                                    <ClassScheduled><MdOutlineDateRangeIcon /> {new Date(aula.scheduled_at).toLocaleDateString()}</ClassScheduled>
                                    <ClassFooter>
                                        <DeleteButton onClick={() => handleOpenDeleteModal(aula)}>
                                            <FaTrashIcon />
                                        </DeleteButton>
                                        <EditButton onClick={() => handleEditClick(aula)}>
                                            Editar <CgEditFadeIcon />
                                        </EditButton>
                                    </ClassFooter>
                                </ClassCard>
                            ))}
                        </ClassList>
                    </Container>
                </PageContent>
            </MainContent>
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
