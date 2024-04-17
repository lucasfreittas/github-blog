import styled from "styled-components";

export const IssueContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12.8rem;
`;

export const ContentContainer = styled.section`
    width: 100%;
    max-width: 86.4rem;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 3.2rem 4rem;
    margin-top: -8rem;
    background-color: ${props => props.theme["gray-700"]};
    border-radius: 1rem;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    a, span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 160%;
        color: ${props => props.theme["blue-500"]};
        &:hover{
            cursor: pointer;
        };
    };
`;

export const IssueTitleContainer = styled.div`
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 0.8rem;

     > h1{
        font-size: 2.4rem;
        font-weight: 700;
        line-height: 130%;
        color: ${props => props.theme.white};
    };
`;

export const IssueData = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2.4rem;

    font-size: 1.6rem;
    color: ${props => props.theme["gray-300"]};
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

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 4rem 3.2rem;
    gap: 2.4rem;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3.2rem;
    width: 100%;
    font-size: 1.6rem;
    line-height: 160%;
    color: ${props => props.theme["gray-200"]};
`;

export const MarkdownContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: ${props => props.theme["gray-600"]};
    font-size: 1.6rem;
    line-height: 160%;
    color: ${props => props.theme["gray-200"]};

    .markdown{
        display: flex;
        padding: 1.6rem;
        width: 100%;
    };
`;