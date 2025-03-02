import styled, { createGlobalStyle } from 'styled-components';
import { ActiveIcon, Container, Header, IconButtonGear, Overlay, SideBar } from './stylesGlobal';
import { LoginContainer } from './loginStyles';
import { NavBar, NavTitle } from './navStyles';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif; 
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
    }
  }

  @media (max-width: 480px) {
    /* Estilos para dispositivos móveis */
  }
`;

