import { HeaderContainer } from "./styles";

import GithubLogo  from '../../Assets/Github-logo.svg'

export function Header(){
    return(
        <HeaderContainer>
            <img src={GithubLogo} alt="" />
        </HeaderContainer>
    )
}