// Rota separada para login:  
// Diferente das outras rotas da API, esta utiliza um endpoint específico  
// para autenticação do usuário.

export const loginUser = async (email: string, password: string) => {
  const response = await fetch("http://127.0.0.1:8000/api/auth/login/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha: password }),
  });

  if (!response.ok) {
      throw new Error("Falha ao fazer login");
  }

  return response.json();
};
