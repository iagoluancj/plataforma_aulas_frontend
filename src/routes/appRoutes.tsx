import { Route, Routes, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Login from "../pages/login";
import ProtectedRoute from "../services/protectedRoute";
import Dashboard from "../pages/dashboard";
import ManageClasses from "../pages/manageClasses";
import AvailableClasses from "../pages/availableClasses";
import Profile from "../pages/profile";


// AppRoute:
// Criado para organizar melhor a estrutura do código,  
// já que anteriormente o código no app estava muito extenso.  
// No entanto, as rotas não foram separadas, pois são poucas.  

// Em conjunto com o ProtectedRoute, gerencia o acesso às páginas  
// com base na role definida por padrão, permitindo que o ProtectedRoute  
// execute as ações de controle de acesso.
const AppRoutes = () => {
    const { auth, loading } = useAuth();

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <Routes>
            <Route path="/login" element={auth ? <Navigate to="/dashboard" /> : <Login />} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/manage-classes"
                element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                        <ManageClasses />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/available-classes"
                element={
                    <ProtectedRoute allowedRoles={["student"]}>
                        <AvailableClasses />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/profile"
                element={
                    <ProtectedRoute allowedRoles={["admin", "student"]}>
                        <Profile />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<Navigate to={auth ? "/dashboard" : "/login"} />} />
        </Routes>
    );
};

export default AppRoutes;
