import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "../services/types";


// Hook para decodificar o token e manter a integridade das rotas em relação a role do usuário
export const useDecodedToken = () => {
  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp > currentTime) {
          setDecodedToken(decoded);
        } else {
          localStorage.removeItem("authToken");
          setDecodedToken(null);
        }
      } catch (error) {
        console.error("Erro ao decodificar o token:", error);
        setDecodedToken(null);
      }
    }
  }, []);

  return decodedToken;
};
