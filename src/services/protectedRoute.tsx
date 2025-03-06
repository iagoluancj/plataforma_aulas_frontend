import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { JSX, useEffect, useState } from "react";
import { DecodedToken } from "./types";
import { jwtDecode } from "jwt-decode";

interface ProtectedRouteProps {
    children: JSX.Element;
    allowedRoles: string[];
}

// ProtectedRoute:
// Controla o acesso do usuário com base na role.  
const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
    const { auth, loading } = useAuth();
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("authToken");

        if (token) {
            try {
                const decoded: DecodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;

                if (decoded.exp > currentTime) {
                    setUserRole(decoded.role);
                } else {
                    console.warn("Token expirado");
                    setUserRole(null);
                }
            } catch (error) {
                console.error("Erro ao decodificar o token:", error);
                setUserRole(null);
            }
        }
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!auth) {
        return <Navigate to="/login" />;
    }

    if (!userRole) {
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
