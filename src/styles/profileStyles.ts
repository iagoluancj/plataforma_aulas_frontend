import styled from "styled-components";
import { Header } from "./stylesGlobal";

export const ProfileContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const ProfileImg = styled.div`
    img {
        border-radius: 50%;
        width: 100px;
        height: 100px;

        object-fit: cover;
    }
`;

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;

    div {

    }
`;

export const ProfileHeader = styled(Header)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-bottom:  ${({ theme }) => theme.spacing.md};

    button {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.white};
        padding: .5rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: .5rem;
    }
`;