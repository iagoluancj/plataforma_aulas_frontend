import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/auth';
import { MdEmail, MdLock } from "react-icons/md";
import { Button, Container, Header, InputGroup, SpanError, Subtitle, Title } from '../styles/stylesGlobal';
import { ForgotPassword, LoginContainer, SignUpLink } from '../styles/loginStyles';
import studentImg from '../assets/student.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const MdEmailIcon = MdEmail as React.ElementType;
    const MdLockIcon = MdLock as React.ElementType;

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)

        try {
            const response = await loginUser(email, password);
            if (response.status === 200) {
                navigate('/dashboard'); // Redireciona para o dashboard após login
            }
        } catch (err) {
            setError('Email ou senha inválidos');
        } finally {
            setLoading(false)
        }
    };

    return (
        <Container>
            <img src={studentImg} alt="" />
            <LoginContainer>
                <Header>
                    {/* <Title>Company name</Title> */}
                    <img src="https://educat.com.br/wp-content/uploads/2024/09/logo-educat-1024x241.png" alt="Logo empresa" />
                </Header>

                <Title>Seu progresso começa agora!</Title>
                <Subtitle>Desbloqueie um mundo de conhecimento com um único clique! Faça login na sua conta para continuar.</Subtitle>

                <form onSubmit={handleLogin}>
                    {error && <div className="error-message"><SpanError>{error}</SpanError></div>}
                    <InputGroup>
                        <input
                            type="email"
                            placeholder="@exemple.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <MdEmailIcon />
                    </InputGroup>
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
                    <Button disabled={loading}>Entrar</Button>
                </form>
                <SignUpLink>
                    <span>Ainda não tem uma conta? </span>
                    <p>
                        <a href="#">Cadastre-se gratuitamente!</a>
                    </p>
                </SignUpLink>
            </LoginContainer>
        </Container>
    );
};

export default Login;
