import { useState } from "react";
import { HeaderPage, InputGroup, MainContent, PageContent } from "../styles/stylesGlobal";
import Sidebar from "../components/sidebar";
import Nav from "../components/nav";
import { GrSave, GrCamera } from "react-icons/gr";
import { ButtonProfile, ProfileContainer, ProfileHeader, ProfileImg, ProfileWrapper } from "../styles/profileStyles";
import { useApi } from "../hooks/useApi";
import { toast } from "react-toastify";


const Profile = () => {
    // Ícones:  
    // Foi necessário importar e utilizar os ícones dessa forma,  
    // pois nesta versão do React, o uso direto de 'GrSave' gera falhas.
    const GrSaveIcon = GrSave as React.ElementType;
    const GrCameraIcon = GrCamera as React.ElementType;

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { updateUser } = useApi()
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const storedUser = sessionStorage.getItem("userData");
    const [user, setUser] = useState(() => {
        return storedUser
            ? JSON.parse(storedUser)
            : {
                id: "",
                full_name: "",
                email: "",
                profile_picture: "",
                role: ""
            };
    });

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleUpdateUser = async () => {
        const formData = new FormData();
        formData.append("full_name", user.full_name);
        formData.append("email", user.email);
        formData.append("role", user.role);

        if (selectedFile) {
            formData.append("profile_picture", selectedFile);
        }

        try {
            const response = await updateUser(user.id, formData);

            if (response) {
                toast.success("Usuário atualizado com sucesso!");
                setUser({
                    ...user,
                    profile_picture: response.profile_picture || user.profile_picture,
                });
            }
        } catch (error) {
            toast.error("Erro ao atualizar o usuário.");
            console.error("Erro ao atualizar o usuário:", error);
        }
    };
    
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
                                <img src={typeof selectedFile === 'string'
                                    ? selectedFile
                                    : selectedFile
                                        ? URL.createObjectURL(selectedFile)
                                        : `http://127.0.0.1:8000${user.profile_picture}`
                                } alt="Foto de Perfil" />
                            </ProfileImg>
                            <label>
                                <GrCameraIcon /> Alterar Foto
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                                    style={{ display: "none" }}
                                />
                            </label>
                        </ProfileHeader>

                        <ProfileWrapper>
                            <div>
                                <label>Nome: </label>
                                <InputGroup>
                                    <input type="text" value={user.full_name} onChange={(e) => setUser({ ...user, full_name: e.target.value })} />
                                </InputGroup>
                            </div>
                            <div>
                                <label>Email: </label>
                                <InputGroup>
                                    <input type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                                </InputGroup>
                            </div>

                            <ButtonProfile onClick={(() => handleUpdateUser())}>
                                <GrSaveIcon /> Salvar Alterações
                            </ButtonProfile>
                        </ProfileWrapper>
                    </div>
                </PageContent>
            </MainContent>
        </ProfileContainer>
    );
};

export default Profile;
