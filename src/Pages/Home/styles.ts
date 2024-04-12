import styled from "styled-components";

export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentContainer = styled.section`
    width: 100%;
    max-width: 86.4rem;
`;

export const SearchContainer = styled.div`
    width: 100%;
    
    > div{
        display: flex;
        width: 100%;
        margin-top: 7.2rem;
        margin-bottom: 1.6rem;
        justify-content: space-between;
        align-items: center;
        > p{
            font-size: 1.8rem;
            line-height: 160%;
            color: ${props => props.theme["gray-100"]};
            font-weight: 700;
        };
        > span{
            font-size: 1.4rem;
            line-height: 160%;
            color: ${props => props.theme["gray-300"]};
        };
    };
    > input {
        width: 100%;
        padding: 1.2rem 1.6rem;
        background-color: ${props => props.theme["gray-900"]};
        border: 1px solid ${props => props.theme["gray-500"]};
        color: ${props => props.theme["gray-200"]};
        font-size: 1.6rem;
        line-height: 160%;
        border-radius: 0.6rem;
        &::placeholder{
            color: ${props => props.theme["gray-400"]};
        };
        &:focus{
            outline: 1px solid ${props => props.theme["blue-500"]};
        };
    };
`;

export const PostsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 3.2rem;
    width: 100%;
    margin-top: 4.8rem;
`;