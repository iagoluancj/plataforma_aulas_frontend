import styled from "styled-components";

export const DashboardContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const DashboardCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

    border-top: 1px solid ${({ theme }) => theme.colors.background};
    border-left: 1px solid ${({ theme }) => theme.colors.background};
    border-right: 1px solid ${({ theme }) => theme.colors.background};

`;

export const DashboardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: .5rem;
  width: 100%;
  
  h4 {
        max-width: 270px;
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

export const DashboardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1000px;

  h3 {
    span {
        font-size: unset;
    }
    }
`;

export const DashboardListItens = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;


export const DashboardCharts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;
