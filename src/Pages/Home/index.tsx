import { HomeContainer, ContentContainer } from './styles';

import { Header } from '../../Components/Header';
import { Profile } from '../../Components/Profile';


export function Home(){
    return(
        <HomeContainer>
            <Header />

            <ContentContainer>
                <Profile />
            </ContentContainer>
        </HomeContainer>
    )
}