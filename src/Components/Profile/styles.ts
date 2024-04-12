import styled from "styled-components";

export const ProfileContainer = styled.section`
    display: flex;
    width: 100%;
    padding: 3.2rem 4rem;
    margin-top: -8rem;
    gap: 3.2rem;
    background-color: ${props => props.theme["gray-700"]};
    border-radius: 1rem;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

    > img {
        width: 14.8rem;
        height: 14.8rem;
        border-radius: 0.8rem;
    };
`;

export const UserInfoContainer = styled.div`
    width: 100%;
`;

export const UserName = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.8rem;
    > h1{
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 130%;
        color: ${props => props.theme.white};
    };
    > a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 160%;
        color: ${props => props.theme["blue-500"]};
    };
`;

export const UserDescription = styled.div`
    font-size: 1.6rem;
    line-height: 160%;
    color: ${props => props.theme["gray-200"]};
    margin-bottom: 2.4rem;
`;

export const UserData = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2.4rem;

    font-size: 1.6rem;
    color: ${props => props.theme["gray-100"]};
    line-height: 160%;

    > span {
        display: flex;
        gap: 0.8rem;
        align-items: center;

        > svg {
            color: ${props => props.theme["gray-400"]};
        };
    };
`;