import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1rem;
  box-shadow: 0 2px 10px rgba(45, 156, 219, 0.2);
`;

export const NavTitle = styled.h2`
    text-align: start;
    margin: 0 !important;
    font-size: 32px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.text};
`;


export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.3rem;
  border-radius: 4px;
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  padding: 0.3rem;
  width: 100%;
  min-width: 100px;
  color: ${({ theme }) => theme.colors.text};
`;
