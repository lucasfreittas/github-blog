import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    };

    html{
        font-size: 62.5%;
    };

    body{
        background-color: ${props => props.theme["gray-800"]};
        color: ${props => props.theme.white};
        font-family: "Nunito", sans-serif;
        font-weight: 400;
        line-height: 160%;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        overflow-x: hidden;
    };

    a{
        text-decoration: none;
    };

    button, a{
        cursor: pointer;
        border: none;
        height: fit-content;
        outline: none;
    };
`;