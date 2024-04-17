import { HomeContainer, ContentContainer, SearchContainer, PostsContainer } from './styles';

import { Header } from '../../Components/Header';
import { Profile } from '../../Components/Profile';
import { Post } from '../../Components/Post';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../Libs/axios';

interface User {
    login: string,
    id: number,
};

interface IssueType {
    id: number,
    title: string,
    body: string,
    user: User | undefined,
    comments: number
    created_at: string,
    html_url: string,
};

export function Home(){

    const [ issueData, setIssueData ] = useState<IssueType[]>([]);

    async function fetchIssues(){
        const response = await api.get(`repos/lucasfreittas/github-blog/issues`);
        setIssueData(response.data);
        console.log(response.data)
    };

    useEffect(() => {
        fetchIssues();
    }, [])


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
                    {issueData && (
                       issueData.map(issue => (
                        <Post
                            key={issue.id}
                        />
                       ))
                    )}
                </PostsContainer>
            </ContentContainer>
        </HomeContainer>
    )
}