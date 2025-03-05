import React, { useState } from 'react';
import { MdEmail, MdLock } from "react-icons/md";
import { Button, Container, Header, InputGroup, SpanError, Subtitle, Title } from '../styles/stylesGlobal';
import { ForgotPassword, LoginContainer, SignUpLink } from '../styles/loginStyles';
import studentImg from '../assets/student.png'
import useAuth from '../hooks/useAuth';
import { loginUser } from '../api/auth';
import { useApi } from '../hooks/useApi';
import { FaUser } from "react-icons/fa";
import { toast } from 'react-toastify';

const Login = () => {
    const MdEmailIcon = MdEmail as React.ElementType;
    const MdLockIcon = MdLock as React.ElementType;
    const CiUserIcon = FaUser as React.ElementType;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [newName, setNewName] = useState('');
    const [loading, setLoading] = useState(false);
    const [signinSignup, setSigninSignup] = useState(false);

    const { login } = useAuth()
    const { createUser } = useApi();

    const handleAlterSignInIp = () => {
        if (signinSignup === false) {
            setSigninSignup(true)
        } else {
            setSigninSignup(false)
        }
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!email || !password) {
            toast.error("Por favor, preencha todos os campos.");
            setLoading(false);
            return;
        }

        try {
            const response = await loginUser(email, password);
            if (response.access) {
                login(response.access, {
                    id: response.user.id,
                    email: response.user.email,
                    full_name: response.user.full_name,
                    profile_picture: response.user.profile_picture,
                    role: response.user.role
                });
            }
        } catch (err) {
            toast.error("Erro ao fazer o login, tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (!email || !newName || !password || !role) {
            toast.error("Por favor, preencha todos os campos.");
            setLoading(false);
            return;
        }

        const data = {
            email,
            full_name: newName,
            password: password,
            role,
        };

        try {
            const response = await createUser('/register/', data);

            if (response.status === 201) {
                console.log("Usuário criado com sucesso!");
                toast.success("Conta criada com sucesso!");
            } else {
                if (response.error && response.error.includes("Email is already in use. Please choose another one.")) {
                    toast.error("Email já está cadastrado para outro usuário.");
                } else if (response.error) {
                    toast.error("Erro ao criar a conta, tente novamente.");
                }
            }
        } catch (err: any) {
            console.log(err)
            if (err.response && err.response.data) {
            } else {
                toast.error("Erro ao criar conta. Falha no servidor.");
            }
        }
        finally {
            setLoading(false);
        }


    };

    return (
        <Container>
            {/* Utilizei operadores ternários para reduzir a quantidade de linhas no código e mantê-lo mais conciso. */}
            <img src={studentImg} alt="" />
            <LoginContainer>
                <Header>
                    {/* <Title>Company name</Title> */}
                    <img src="https://educat.com.br/wp-content/uploads/2024/09/logo-educat-1024x241.png" alt="Logo empresa" />
                </Header>

                <Title>
                    {signinSignup ? (
                        <>
                            Junte-se a nós e comece sua jornada!
                        </>
                    ) : (
                        <>
                            Seu progresso começa agora!
                        </>
                    )}
                </Title>
                <Subtitle>
                    {signinSignup ? (
                        <>
                            Desbloqueie um mundo de conhecimento com um único clique! Faça o cadastro e tenha acesso ilimitado.
                        </>
                    ) : (
                        <>
                            Desbloqueie um mundo de conhecimento com um único clique! Faça login na sua conta para continuar.
                        </>
                    )}
                </Subtitle>

                <form onSubmit={signinSignup ? handleSignUp : handleLogin}>
                    {/* {error && <div className="error-message"><SpanError>{error}</SpanError></div>} */}
                    <InputGroup>
                        <input
                            type="email"
                            placeholder="yourmail@exemple.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <MdEmailIcon />
                    </InputGroup>
                    {signinSignup ? (
                        <InputGroup>
                            <input
                                type="name"
                                placeholder="Seu nome"
                                value={newName}
                                onChange={(e) => setNewName(e.target.value)}
                            />
                            <CiUserIcon />
                        </InputGroup>
                    ) : (
                        <>
                        </>
                    )}
                    {signinSignup ? (
                        <InputGroup>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="">Selecione sua função</option>
                                <option value="student">Estudante</option>
                                <option value="admin">Instrutor</option>
                            </select>
                        </InputGroup>
                    ) : (
                        <>
                        </>
                    )}
                    <InputGroup>
                        <input
                            type="password"
                            placeholder="*****"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <MdLockIcon />
                    </InputGroup>


                    <ForgotPassword>
                        <a href="#">Esqueceu a senha?</a>
                    </ForgotPassword>
                    <Button disabled={loading}>
                        {signinSignup ? (
                            <>

                                Cadastrar

                            </>
                        ) : (
                            <>
                                Entrar
                            </>
                        )}
                    </Button>
                </form>
                <SignUpLink>
                    {signinSignup ? (
                        <>
                            <span> Já possui uma conta? </span>
                            <p>
                                <a href="#" onClick={() => handleAlterSignInIp()}>Faça o login!</a>
                            </p>
                        </>
                    ) : (
                        <>
                            <span>Ainda não tem uma conta? </span>
                            <p>
                                <a href="#" onClick={() => handleAlterSignInIp()}>Cadastre-se gratuitamente!</a>
                            </p>
                        </>
                    )}
                </SignUpLink>
            </LoginContainer>
        </Container>
    );
};

export default Login;
