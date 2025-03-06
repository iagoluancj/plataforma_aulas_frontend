import { createContext, useState, useEffect, ReactNode } from "react";
import { jwtDecode } from "jwt-decode";
import { AuthContextType } from "../services/types";


// Contexto de autorização:
// Separado do contexto geral devido à sua criticidade no tratamento de autorização de rotas.
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<{ id: string; email: string; profile_picture: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = sessionStorage.getItem("userData");

    // Configuração de autorização da rota:
    // Baseia-se no authToken presente no cache.  
    // Atualmente, obtém a role temporariamente a partir da sessão, mas no futuro, a role virá diretamente no token.
    if (token && userData) {
      try {
        const decoded: any = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp > currentTime) {
          setAuth(true);
          setUser(JSON.parse(userData));
        } else {
          localStorage.removeItem("authToken");
          sessionStorage.removeItem("userData");
          setAuth(false);
        }
      } catch (error) {
        console.error("Token inválido", error);
        setAuth(false);
      }
    }
    setLoading(false);
  }, []);

  const login = (token: string, user: any) => {
    localStorage.setItem("authToken", token);
    sessionStorage.setItem("userData", JSON.stringify(user));
    // setUserRole(user.role);
    setAuth(true);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("userData");
    setAuth(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ auth, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
