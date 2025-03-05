import { useContext } from "react";
import { AuthContext } from "../store/authContext";

// Hook para aplicar useAuth a partir do contexto nas paginas/componentes
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

export default useAuth;