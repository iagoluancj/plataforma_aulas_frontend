import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { JSX, useContext } from "react";

interface ProtectedRouteProps {
    children: JSX.Element;
    allowedRoles: string[];
}

// ProtectedRoute:
// Controla o acesso do usuário com base na role.  
// Atualmente, a role é obtida via session, mas futuramente será extraída do token.
const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
    const { auth, loading } = useAuth();
    // const { userRole } = useContext(AuthContext) || {};

    const storedUser = sessionStorage.getItem("userData");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const userRole = parsedUser?.role || '';

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!auth) {
        return <Navigate to="/login" />;
    }

    if (!userRole) {
        console.log(`Falha ao encontrar ${userRole}`)
        return <div>Verificando permissões...</div>;
    }

    if (!allowedRoles.includes(userRole)) {
        return userRole === "student" ? (
            <Navigate to="/available-classes" />
        ) : (
            <Navigate to="/login" />
        );
    }
    return children;
};

export default ProtectedRoute;
