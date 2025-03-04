import { useContext, useEffect, useState } from "react";
import { ClassContext, mockClasses } from "../store/classesContext";
import { AvailableClassesContainer, AvailableClassCard, AvailableClassHeader, AvailableClassList, AvailableClassWrapper, AvailableClassDescription, AvailableClassFooter, SubscribeButton } from "../styles/availableClassesStyles";
import { Header, HeaderPage, MainContent, PageContent } from "../styles/stylesGlobal";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import cardimg from '../assets/card-class.png'
import cardimg2 from '../assets/card-class2.png'
import { GrUserManager } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { Class, Enrollments } from "../services/types";
import { useApi } from "../hooks/useApi";
import { ContainerFilters, Filters } from "../styles/manageClassesStyles";


const AvailableClasses = () => {
    const GrUserManagerIcon = GrUserManager as React.ElementType;
    const MdOutlineDateRangeIcon = MdOutlineDateRange as React.ElementType;

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [classes, setClasses] = useState<Class[]>(mockClasses || []);
    const [enrollments, setEnrollments] = useState<Enrollments[]>([]);

    const context = useContext(ClassContext);
    const { create, remove } = useApi()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const studentId = "b1ce5c89-4da0-4a19-8450-2b2df245ff42";

    // 🔹 Função para inscrever o estudante na aula
    const handleSubscribe = async (classId: string) => {
        try {
            const newEnrollment = { student: studentId, classes: classId };
            const response = await create("enrollments", newEnrollment);

            if (response) {
                setEnrollments([...enrollments, response]);
            }
        } catch (error) {
            console.error("Erro ao inscrever-se:", error);
        }
    };

    const handleUnsubscribe = async (classId: string) => {
        const enrollmentToDelete = enrollments.find(enrollment => enrollment.classes === classId);
        if (!enrollmentToDelete) return;

        try {
            await remove("enrollments", enrollmentToDelete.id);
            setEnrollments((prev) => prev.filter(enrollment => enrollment.id !== enrollmentToDelete.id));
        } catch (error) {
            console.error("Erro ao cancelar inscrição:", error);
        }
    };

    useEffect(() => {
        setEnrollments(context?.enrollments || []);
        setClasses(context?.classState || []);
    }, [context?.classState, context?.enrollments]);

    if (!context) return <p>Erro ao carregar as aulas.</p>;

    return (
        <AvailableClassesContainer>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <MainContent>
                <Nav title="Aulas disponiveis" toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />

                <HeaderPage>
                    <h2>📚 Progrida nos seus estudos!</h2>
                    <p>As aulas abaixo estão disponíveis para você. Aproveite essa oportunidade para aprender e evoluir! 💡✨ </p>
                </HeaderPage>
                <PageContent>
                    <div>
                        <ContainerFilters>
                            <Header>
                                <span>Filtros:</span>
                                <Filters>
                                    <button>Minhas aulas</button>
                                    <button>Aulas disponíveis</button>
                                </Filters>

                            </Header>
                        </ContainerFilters>

                        {/* Fazer scroll infinito, com base na quantidade de itens, renderizadar no maximo até 6, dai pede para renderizar mais, ou ao srollar renderiza mais. */}
                        <AvailableClassList>
                            {classes.length > 0 ? (
                                classes.map((aula) => (
                                    <AvailableClassCard key={aula.id}>
                                        <AvailableClassHeader>
                                            <SubscribeButton
                                                isSubscribed={enrollments.some(enrollment => enrollment.classes === aula.id)}
                                                onClick={() => {
                                                    const isSubscribed = enrollments.some(enrollment => enrollment.classes === aula.id);
                                                    isSubscribed ? handleUnsubscribe(aula.id) : handleSubscribe(aula.id);
                                                }}
                                            >
                                                {enrollments.some(enrollment => enrollment.classes === aula.id) ? "Cancelar inscrição" : "Inscrever-se"}
                                            </SubscribeButton>
                                            <AvailableClassWrapper>
                                                <h3>{aula.title}</h3>
                                                <AvailableClassDescription>{aula.description}</AvailableClassDescription>
                                            </AvailableClassWrapper>
                                            <div>
                                                <img src={cardimg} alt="Mulher estudando no notebook" />
                                            </div>
                                        </AvailableClassHeader>
                                        <AvailableClassFooter>
                                            <span><GrUserManagerIcon />{aula.instructor_name}</span>
                                            <span><MdOutlineDateRangeIcon /> {new Date(aula.scheduled_at).toLocaleDateString()}</span>
                                        </AvailableClassFooter>
                                    </AvailableClassCard>
                                ))
                            ) : (
                                <p>Sem aulas disponiveis...</p>
                            )}
                            <AvailableClassCard >
                                <AvailableClassHeader>
                                    <AvailableClassWrapper>
                                        <h3>aula.title</h3>
                                        <AvailableClassDescription>aula.description</AvailableClassDescription>
                                    </AvailableClassWrapper>
                                    <div>
                                        <img src={cardimg} alt="" />
                                    </div>
                                </AvailableClassHeader>
                                <AvailableClassFooter>
                                    <span><GrUserManagerIcon /> aula.instructor_id</span>
                                    <span><MdOutlineDateRangeIcon />aula.schedu</span>
                                </AvailableClassFooter>
                            </AvailableClassCard>
                        </AvailableClassList>
                    </div>
                </PageContent>
            </MainContent>
        </AvailableClassesContainer >
    );
};

export default AvailableClasses;
