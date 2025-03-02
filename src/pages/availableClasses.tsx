import { useContext, useState } from "react";
import { ClassContext } from "../store/classesContext";
import { AvailableClassesContainer, AvailableClassCard, AvailableClassHeader, AvailableClassList, AvailableClassWrapper, AvailableClassDescription, AvailableClassFooter } from "../styles/availableClassesStyles";
import { HeaderPage, MainContent, PageContent } from "../styles/stylesGlobal";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import cardimg from '../assets/card-class.png'
import cardimg2 from '../assets/card-class2.png'
import { GrUserManager } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";


const AvailableClasses = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const context = useContext(ClassContext);
    if (!context) return <p>Erro ao carregar as aulas.</p>;
    const { classState } = context;

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const GrUserManagerIcon = GrUserManager as React.ElementType;
    const MdOutlineDateRangeIcon = MdOutlineDateRange as React.ElementType;

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
                        <AvailableClassList>
                            {classState.map((aula) => (
                                <AvailableClassCard key={aula.id}>
                                    <AvailableClassHeader>
                                        <AvailableClassWrapper>
                                            <h3>{aula.title}</h3>
                                            <AvailableClassDescription>{aula.description}</AvailableClassDescription>
                                        </AvailableClassWrapper>
                                        <div>
                                            <img src={cardimg} alt="" />
                                        </div>
                                    </AvailableClassHeader>
                                    <AvailableClassFooter>
                                        <span><GrUserManagerIcon /> {aula.instructor_id}</span>
                                        <span><MdOutlineDateRangeIcon /> {new Date(aula.scheduled_at).toLocaleDateString()}</span>
                                    </AvailableClassFooter>
                                </AvailableClassCard>
                            ))}
                        </AvailableClassList>
                    </div>
                </PageContent>
            </MainContent>
        </AvailableClassesContainer>
    );
};

export default AvailableClasses;
