import styled from "styled-components";

export const AvailableClassesContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const AvailableClassList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const AvailableClassCard = styled.div`
  background: #f5f5f5;
  padding-bottom: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius};

  width: 300px;
`;


export const AvailableClassHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 150px;
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const AvailableClassWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  padding: 1rem .5rem;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const AvailableClassDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.white};
`;

export const AvailableClassFooter = styled.footer`
  padding: .2rem .4rem;
  padding-top: 1rem;
  display: flex;
  gap: 10px;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
