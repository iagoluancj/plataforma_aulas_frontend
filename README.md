# Plataforma Aulas - Frontend

Este é o repositório do Frontend da **Plataforma de Aulas**, uma aplicação para gestão de aulas online.  
A aplicação foi desenvolvida em **React** com **TypeScript** e utiliza **Styled Components** para a estilização, além de Context API para gerenciamento global do estado.
> ### [Documentação do Back-end](https://github.com/iagoluancj/plataforma_aulas_backend)

## Sumário

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Como Executar](#como-executar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades Implementadas](#funcionalidades-implementadas)
- [Funcionalidades Extras](#funcionalidades-extras)
- [Considerações Finais](#considerações-finais)

## Instalação

1. **Clone o repositório, acesse-o e instale as dependências:**

   ```bash
    git clone https://github.com/iagoluancj/plataforma_aulas_frontend.git
   ```

    ```bash
    cd plataforma_aulas/frontend
    ```

    ```bash
    npm install
    ```
## Configuração

- **Node.js:** Certifique-se de ter o Node.js instalado(versão recomendada >= 14.x).
- **Variáveis de Ambiente:** Se necessário, altere o API_URL presente no arquivo api.ts em src/api e configure a URL de acordo com seu localhost do backend. Exemplo:
    ```bash
    const API_URL = "http://127.0.0.1:8000/api";
    ```

## Como Executar

Para iniciar o frontend, execute: 
  ```bash
      npm start
  ```
A aplicação será iniciada em *http://localhost:3000*

## Estrutura do Projeto

A estrutura do projeto frontend está organizada da seguinte forma: 
```bash
  frontend/
    └── src/
    ├── api/                
    │   ├── api.ts               # Funções genéricas para comunicação com a API
    │   └── auth.ts              # Serviços de autenticação (login, logout, etc.)
    │   
    ├── assets/               # Arquivos estáticos, como imagens e fontes
    │
    ├── components/           # Componentes reutilizáveis da interface (Botões, Nav, Sidebar, etc.)
    │   ├── Button.tsx         
    │   ├── createModal.tsx    
    │   ├── deleteModal.tsx    
    │   ├── editModal.tsx      
    │   ├── nav.tsx            
    │   ├── radarChart.tsx     
    │   ├── sidebar.tsx        
    │   └── simpleChart.tsx    
    │
    ├── hooks/                # Custom Hooks para lógica compartilhada (ex.: useAuth, useApi, useDecodedToken)
    │   ├── useApi.ts          
    │   ├── useAuth.ts         
    │   └── useDecodedToken.ts 
    │
    ├── pages/                # Páginas da aplicação (Login, Dashboard, ManageClasses, AvailableClasses, Profile, etc.)
    │   ├── availableClasses.tsx
    │   ├── Dashboard.tsx      
    │   ├── login.tsx          
    │   ├── manageClasses.tsx  
    │   └── profile.tsx        
    │
    ├── routes/               # Configuração das rotas da aplicação (ex.: appRoutes.tsx)
    │   └── appRoutes.tsx      
    │
    ├── store/                # Gerenciamento de estado com Context API (ex.: authContext, classesContext)
    │   ├── authContext.tsx    
    │   └── classesContext.tsx 
    │
    └── styles/               # Estilos globais e temas (ex.: theme, configGlobal) utilizando Styled Components
        └── [arquivos de estilo]  
        
    ├── index.tsx             # Ponto de entrada da aplicação React
    └── App.tsx               # Componente principal do aplicativo
```

## Funcionalidades Implementadas

- **Autenticação:** Tela de login funcional com integração via JWT. Além disso, foi implementado o fluxo de cadastro para novos usuários.  
- **Layout Responsivo:** Construção da interface responsiva utilizando Styled Components, garantindo uma experiência fluida em diferentes dispositivos. A estrutura inclui Sidebar, Nav e um layout padrão.  
  - **Mobile First:** O design prioriza dispositivos móveis, garantindo navegação intuitiva e otimizada antes da adaptação para telas maiores.  
- **Gerenciamento de Aulas:**  
  - Instrutores podem criar e gerenciar aulas, definindo detalhes como título, descrição e link do vídeo.  
  - Alunos visualizam e acessam aulas disponíveis, que são exibidas conforme a inscrição na plataforma.  
  - As aulas vinculadas ao YouTube são reproduzidas diretamente na **plataforma_aulas**.  
- **Perfil do Usuário:** Tela para visualização e edição de informações pessoais.  
- **Dashboard do Instrutor:** Painel com visão geral das aulas agendadas, número de alunos inscritos e gráficos interativos para análise de engajamento.  
- **Context API:** Utilização do Context API para gerenciamento global de estados, facilitando a atualização e o compartilhamento de informações, como aulas disponíveis.  


## Funcionalidades Extras

- **Sistema de Design com Tema Global:** Uso de Styled Components para definir um tema (cores, espaçamentos, fontes) e aplicação de estilos globais.
- **Integração de bibliotecas:** Usei variadas bibliotecas (ex.: react-icons, react-player, react-toastify, recharts e outras) para uma interface visualmente atrativa ao usuário.
- **Roteamento Protegido:** Implementação de rotas protegidas com base no estado de autenticação.

## Considerações Finais

- **Backend:** Desenvolvido em Django + SQL Server, com APIs CRUD e autenticação JWT.
- **Frontend:** Desenvolvido em React + TypeScript, com integração via Context API e Styled Components.
- **Documentação:** As instruções de instalação, configuração e execução estão detalhadas neste README.
