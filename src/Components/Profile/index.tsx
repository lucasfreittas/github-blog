import { ProfileContainer, UserInfoContainer, UserName, UserDescription, UserData } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function Profile(){
    return(
        <ProfileContainer>
            <img src="https://avatars.githubusercontent.com/u/102767773?v=4" alt="" />
            <UserInfoContainer>
                <UserName>
                    <h1>Lucas Freitas</h1>
                    <a href="#"><span>GITHUB</span> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </UserName>
                <UserDescription>
                    <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                </UserDescription>
                <UserData>
                    <span className='userSign'> <FontAwesomeIcon icon={faGithub}/>lucasfreittas</span>
                    <span className='userCompany'> <FontAwesomeIcon icon={faBuilding}/>Bounty</span>
                    <span className='followers'><FontAwesomeIcon icon={faUserGroup} />50 Seguidores</span>
                </UserData>
            </UserInfoContainer>
        </ProfileContainer>
    );
};