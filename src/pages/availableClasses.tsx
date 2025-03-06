import { useContext, useEffect, useState } from "react";
import { ClassContext } from "../store/classesContext";
import { AvailableClassesContainer, AvailableClassCard, AvailableClassHeader, AvailableClassList, AvailableClassWrapper, AvailableClassDescription, AvailableClassFooter, SubscribeButton, AvailableClassInstructor, AvailableLine } from "../styles/availableClassesStyles";
import { Header, HeaderPage, MainContent, PageContent } from "../styles/stylesGlobal";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import cardimg from '../assets/card-class.png'
import { GrUserManager } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { Class, Enrollments } from "../services/types";
import { useApi } from "../hooks/useApi";
import { ContainerFilters, Filters } from "../styles/manageClassesStyles";
import { toast } from "react-toastify";
import ReactPlayer from "react-player";


const AvailableClasses = () => {
    const GrUserManagerIcon = GrUserManager as React.ElementType;
    const MdOutlineDateRangeIcon = MdOutlineDateRange as React.ElementType;

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [classes, setClasses] = useState<Class[]>([]);
    const [enrollments, setEnrollments] = useState<Enrollments[]>([]);
    const [loadingEnrollments, setLoadingEnrollments] = useState(true);


    const storedUser = sessionStorage.getItem("userData");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const studentId = parsedUser?.id || '';

    const context = useContext(ClassContext);
    const { create, remove, getAll, getByParams } = useApi()

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Função para inscrever o estudante na aula
    const handleSubscribe = async (classId: string) => {
        try {
            const newEnrollment = { student: studentId, classes: classId };
            const response = await create("enrollments", newEnrollment);

            if (response) {
                toast.success("Inscrição feita com sucesso.");
                setEnrollments([...enrollments, response]);
            }
        } catch (error) {
            toast.info("Erro ao inscrever-se.");
            console.error("Erro ao inscrever-se:", error);
        }
    };

    // Função para retirar a inscrição do estudante na aula
    const handleUnsubscribe = async (classId: string) => {
        const enrollmentToDelete = enrollments.find(enrollment => enrollment.classes === classId);
        if (!enrollmentToDelete) return;

        try {
            await remove("enrollments", enrollmentToDelete.id);
            setEnrollments((prev) => prev.filter(enrollment => enrollment.id !== enrollmentToDelete.id));
            toast.info("Inscrição cancelada com sucesso.");
        } catch (error) {
            toast.error("Erro ao cancelar inscrição.");
            console.error("Erro ao cancelar inscrição:", error);
        }
    };

    useEffect(() => {
        const fetchDataIfNeeded = async () => {
            if (!context?.classState?.length) {
                const classes = await getAll("classes");
                setClasses(classes);
            } else {
                setClasses(context.classState);
            }

            const enrollments = await getByParams("enrollments", { student: studentId });
            setEnrollments(enrollments);

        };

        fetchDataIfNeeded();
    }, []);


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
                                                $isSubscribed={enrollments.some(enrollment => enrollment.classes === aula.id)}
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
                                            <span><GrUserManagerIcon /><AvailableClassInstructor>{aula.instructor_name}</AvailableClassInstructor></span>
                                            <span><MdOutlineDateRangeIcon />
                                                {new Date(new Date(aula.scheduled_at).getTime() + 3 * 60 * 60 * 1000).toLocaleString('pt-BR', {
                                                    year: 'numeric',
                                                    month: 'numeric',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })}
                                            </span>
                                        </AvailableClassFooter>
                                        {enrollments.some(enrollment => enrollment.classes === aula.id) ? (
                                            <>
                                                <AvailableLine></AvailableLine>
                                                <ReactPlayer
                                                    url={aula.link_video ? aula.link_video : 'https://www.youtube.com/watch?v=d7HeCDB9OPE'}
                                                    width="100%"
                                                    height="250px"
                                                    controls
                                                />
                                            </>
                                        ) : (
                                            <>
                                            </>
                                        )}
                                    </AvailableClassCard>
                                ))
                            ) : (
                                <p>Sem aulas disponiveis...</p>
                            )}
                        </AvailableClassList>
                    </div>
                </PageContent>
            </MainContent>
        </AvailableClassesContainer >
    );
};

export default AvailableClasses;
