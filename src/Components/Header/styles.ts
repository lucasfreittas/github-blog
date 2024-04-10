import styled from "styled-components";
import HeaderBackground  from '../../Assets/header-background.svg'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    padding-top: 6.4rem;
    width: 100%;
    height: 29.6rem;
    background: url(${HeaderBackground});
    background-repeat: no-repeat;
    background-size: cover;

    > img {
        width: 14.8rem;
        height: 9.8rem;
    };
`;