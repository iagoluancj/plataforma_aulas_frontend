import styled from "styled-components";

interface SubscribeProps {
  isSubscribed: boolean;
}

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
  position: relative;
  background: #f5f5f5;
  padding-bottom: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius};
  border-top-left-radius: ${({ theme }) => theme.borderRadius};
  border-top-right-radius: ${({ theme }) => theme.borderRadius};

  width: 300px;
`;

export const SubscribeButton = styled.button<SubscribeProps>`
  position: absolute;
  top: -10px; 
  right: -10px; 
  background-color: ${({ theme, isSubscribed }) => (isSubscribed ? theme.colors.primary : theme.colors.success)};

  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

  span {
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;

  }

  &:hover {
    background-color:${({ theme, isSubscribed }) => (isSubscribed ? '#2588B8' : '#218838')};
  }
`;

export const AvailableClassHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 150px;
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius};

  img {
    margin-bottom: -8rem;
  }
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
        width: 100%;
        max-height: 3.3rem;
        word-wrap: break-word; 
        overflow-wrap: break-word; 
        white-space: normal; 
        overflow: hidden;
        overflow-y: auto;
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


export const AvailableClassInstructor = styled.span`
   max-width: 100px;
   white-space: nowrap; 
   overflow: hidden;

`;
