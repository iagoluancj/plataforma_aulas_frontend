import styled from "styled-components";

export const LoginContainer = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    max-width: 500px;
    margin: 0rem auto;
    padding: ${({ theme }) => theme.spacing.md};
    background-color: #fff;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: 0 2px 10px rgba(45, 156, 219, 0.4);
`;

export const ForgotPassword = styled.div`
  text-align: right;
  margin-top: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  a {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SignUpLink = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.md};

  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  a {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.linkText};
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;