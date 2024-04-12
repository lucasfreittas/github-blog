import { HomeContainer, ContentContainer, SearchContainer, PostsContainer } from './styles';

import { Header } from '../../Components/Header';
import { Profile } from '../../Components/Profile';
import { Post } from '../../Components/Post';


export function Home(){
    return(
        <HomeContainer>
            <Header />

            <ContentContainer>
                <Profile />
                <SearchContainer>
                    <div>
                        <p>Publicações</p>
                        <span>6 publicações</span>
                    </div>
                    <input type="text" placeholder='Buscar Conteúdo' />
                </SearchContainer>
                <PostsContainer>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </PostsContainer>
            </ContentContainer>
        </HomeContainer>
    )
}