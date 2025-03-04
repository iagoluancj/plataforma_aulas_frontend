import styled from "styled-components";

export const ManageClassesContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
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

export const ContainerFilters = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 10rem;
  width: 100%;
`;

export const Filters = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  button {
    padding: 4px 12px;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const ClassList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ClassCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 15px;
    width: 400px;
    height: 140px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    border-top: 1px solid ${({ theme }) => theme.colors.background};
    border-left: 1px solid ${({ theme }) => theme.colors.background};
    border-right: 1px solid ${({ theme }) => theme.colors.background};

`;

export const ClassHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: .5rem;
  width: 100%;
  
  h4 {
        width: 290px;
        max-height: 1.2rem;
        word-wrap: break-word; 
        overflow-wrap: break-word; 
        white-space: normal; 
        overflow: hidden;
  }

  p { 
        width: 100%;
        max-height: 3.3rem;
        word-wrap: break-word; 
        overflow-wrap: break-word; 
        white-space: normal; 
        overflow: hidden;
        overflow-y: auto;
    }
`;

export const ClassScheduled = styled.div`
    position: absolute;
    top: 13px;  
    right: 13px; 
    display: flex;
    gap: 5px;
    font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export const EditButton = styled.button`
  background: none;
  display: flex;
  align-items: center;
  gap: 3px;
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
  color: ${({ theme }) => theme.colors.danger};
  cursor: pointer;
`;
