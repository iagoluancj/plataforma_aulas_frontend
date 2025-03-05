import styled, { createGlobalStyle } from 'styled-components';
import { ActiveIcon, Container, Header, IconButtonGear, MainContent, Overlay, SideBar } from './stylesGlobal';
import { LoginContainer } from './loginStyles';
import { NavBar, NavTitle } from './navStyles';
import { ContainerFilters } from './manageClassesStyles';

// Configurações globais:
// Essas configurações apenas definem o ambiente geral do sistema 
// e não são utilizadas ativamente no código.
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif; 

    ::-webkit-scrollbar {
        width: 6px; 
        height: 4px; 
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.colors.background}; 
        border-radius: 6px; 
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 8px; 
        border: 2px solid ${({ theme }) => theme.colors.background}; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
    }


    ::-webkit-scrollbar-horizontal {
        height: 6px; 
    }

    ::-webkit-scrollbar-thumb:horizontal {
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 4px;
    }

  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSizes.md};
    padding: 0px;

  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.subtext};

  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  /* Media Queries para Responsividade */
  @media (max-width: 1200px) {
    ${Container} {
      > img {
        display: none;
      }
    }

    ${LoginContainer} {
      margin-top: ${({ theme }) => theme.spacing.lg};
    }

    ${NavTitle} {
      font-size: 16px;
      font-weight: 300;
      padding-right: 1rem;
    }

    ${SideBar} {
      width: 120px;
      
      ${Header} {
          img {
            width: 100px;
        }
      }

      ${ActiveIcon} {
        padding: .5rem;
    }
  }
        
    ${MainContent} {
          margin-left: 120px;
    }

    ${ContainerFilters} {
        padding: 0px;
    }

  @media (max-width: 768px) {
    ${NavBar} {
      width: 100%;
    }
    
    ${NavTitle} {
      font-size: 16px;
      font-weight: 300;
      padding-right: 1rem;
    }

    ${IconButtonGear} {
        display: block !important;
    }

    ${SideBar} {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 250px;
        box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
        transform: translateX(-100%); 
        background-color: ${({ theme }) => theme.colors.background};

        &.open {
          transform: translateX(0); 
        }
  
          ${Header} {
          width: 100%;
          display: flex;
          justify-content: center;
          padding-bottom: 1rem;

            img {
              width: 150px;
          }
        }
      }

      ${MainContent} {
        margin-left: 0px;
      }
    }
    
  }

  @media (max-width: 480px) {
    /* Estilos para dispositivos móveis */
  }
`;

