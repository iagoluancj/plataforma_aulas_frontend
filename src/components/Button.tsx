import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
}

// Botão criado inicialmente para testes.  
// Não vi necessidade de criar componentes primitivos nesta aplicação,  
// pois ela não é tão grande e meu tempo é limitado.  

// Se a aplicação fosse maior, optaria por utilizar frameworks  
// que já fornecem componentes primitivos prontos.  
// Apesar disso, prefiro construir meus próprios componentes primitivos  
// sempre que possível.
const Button = styled.button<ButtonProps>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  transition: background-color 0.3s ease;
  
  background-color: ${(props) =>
    props.primary
      ? props.theme.colors.primary
      : props.danger
        ? props.theme.colors.danger
        : props.theme.colors.secondary};
  
  color: #fff;

  &:hover {
    background-color: ${({ primary, theme }) =>
    primary ? theme.colors.primary : theme.colors.secondary};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default Button;
