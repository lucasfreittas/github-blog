import styled from "styled-components";

export const PostContainer = styled.div`
    width: 100%;
    max-width: 41.6rem;
    height: 26rem;
    background-color: ${props => props.theme["gray-600"]};
    padding: 3.2rem;
    border-radius: 1rem;
    transition: all 0.2s ease-in-out;

    &:hover{
        cursor: pointer;
        transform: scale(1.03);
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.6rem;
    margin-bottom: 2rem;

  
        
    > p{
        font-size: 2rem;
        line-height: 160%;
        font-weight: 700;
        color: ${props => props.theme.white};
        display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Número de linhas desejado */
    overflow: hidden;
    text-overflow: ellipsis;
    };
    > span{
        min-width: max-content;
        font-size: 1.4rem;
        line-height: 160%;
        font-weight: 400;
        color: ${props => props.theme["gray-300"]};
    };
`;

export const ContentContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    

    > p{
        font-size: 1.6rem;
        line-height: 160%;
        font-weight: 400;   
        color: ${props => props.theme["gray-200"]};
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4; /* Número de linhas desejado */
        overflow: hidden;
        text-overflow: ellipsis;
    };
`;