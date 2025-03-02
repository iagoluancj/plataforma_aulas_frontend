import styled from "styled-components";

export const ManageClassesContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const Container = styled.div`
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CreateClass = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Filters = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  button {
    padding: 8px 12px;
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const ClassList = styled.div`
  display: grid;
  gap: 20px;
`;

export const ClassCard = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const ClassHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const ClassFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`;
