import styled from "styled-components";

interface OverlayProps {
  isOpen: boolean;
}

export const Title = styled.h2`
  text-align: start;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const Subtitle = styled.span`
  display: block;
  text-align: start;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
`;

export const Header = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 200px;
    }
`;


export const InputGroup = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  input {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    padding-left: ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.fontSizes.md};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary};
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }

  svg {
    position: absolute;
    right: ${({ theme }) => theme.spacing.sm};
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, disabled }) => disabled ? theme.colors.subtext : theme.colors.primary};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  font-weight: 700;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, disabled }) => disabled ? theme.colors.subtext : theme.colors.success};

  }
`;

export const SpanError = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-style: italic;
`;

export const SpanIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
`;


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;


  > img {
    width: 50%;
    height: 99vh;
    object-fit: contain;
    
  }
`;

export const SideBar = styled.div`
  height: 100vh;
  width: 160px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 1px 1px 10px 1px rgba(45, 156, 219, .3);

  aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
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
`;

export const ActiveIcon = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .2rem;

    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 2rem;
    padding: .5rem;
    border-radius: 8px;
    margin: 1rem 0;

    span {
      color: ${({ theme }) => theme.colors.white};
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;  
    }
`;

export const IconWrapper = styled.div`
    width: 100%;
    
    span {
      color: ${({ theme }) => theme.colors.white};
      font-size: 10px;
    }

    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    padding: .2rem;

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      gap: .2rem;
    }
`;



export const IconList = styled.div`
    flex-grow: 1;
    display: flex;
    font-size: 1.5rem;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    gap: 1rem;
`;

export const ProfileIcon = styled.div`
    margin-top: auto;
    padding-top: 1rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.white};
`;

export const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const PageContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start;
  padding: 2rem;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const IconButtonGear = styled(IconButton)`
  display: none !important;
  padding-top: .3rem;
`;


export const Overlay = styled.div<OverlayProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
  }
`;

export const HeaderPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  text-align: start;
  gap: 1rem;
  padding: ${({ theme }) => theme.spacing.md};
  /* margin-bottom: ${({ theme }) => theme.spacing.md}; */
`;