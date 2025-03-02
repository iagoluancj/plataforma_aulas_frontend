import { useState } from "react";
import { Button, HeaderPage, InputGroup, MainContent, PageContent } from "../styles/stylesGlobal";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import { GrSave, GrCamera } from "react-icons/gr";
import { ProfileContainer, ProfileHeader, ProfileImg, ProfileWrapper } from "../styles/profileStyles";


const Profile = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [user, setUser] = useState({
        name: "Nome do Usuário",
        email: "usuario@email.com",
        profileImage: "https://i.pinimg.com/736x/b5/eb/c1/b5ebc1736055249a4bc4ca867121a3ab.jpg"
    });

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const GrSaveIcon = GrSave as React.ElementType;
    const GrCameraIcon = GrCamera as React.ElementType;

    return (
        <ProfileContainer>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <MainContent>
                <Nav title="Meu Perfil" toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />

                <HeaderPage>
                    <h2>👤 Seu Perfil</h2>
                    <p>Gerencie suas informações pessoais e mantenha seu perfil sempre atualizado!</p>
                </HeaderPage>

                <PageContent>
                    <div>
                        <ProfileHeader>
                            <ProfileImg>
                                <img src="https://i.pinimg.com/736x/b5/eb/c1/b5ebc1736055249a4bc4ca867121a3ab.jpg" alt="Foto de Perfil" />
                            </ProfileImg>
                            <button>
                                <GrCameraIcon /> Alterar Foto
                            </button>
                        </ProfileHeader>

                        <ProfileWrapper>
                            <div>
                                <label>Nome: </label>
                                <InputGroup>
                                    <input type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                                </InputGroup>
                            </div>
                            <div>
                                <label>Email: </label>
                                <InputGroup>
                                    <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                </InputGroup>
                            </div>

                            <Button>
                                <GrSaveIcon /> Salvar Alterações
                            </Button>
                        </ProfileWrapper>
                    </div>
                </PageContent>
            </MainContent>
        </ProfileContainer>
    );
};

export default Profile;
