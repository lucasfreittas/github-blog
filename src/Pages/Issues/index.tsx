import { IssueContainer, 
        ContentContainer, 
        PostsContainer, 
        InfoContainer, 
        NavContainer, 
        IssueTitleContainer, 
        IssueData, 
        TextContainer, 
        MarkdownContainer } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faComment, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { Header } from '../../Components/Header';

import ReactMarkdown from 'react-markdown';

import { api } from '../../Libs/axios';
import { useEffect, useState } from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link, useNavigate, useParams } from 'react-router-dom';

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

export function Issues(){

    const [ issueData, setIssueData ] = useState({} as IssueType);
    const [ formattedDate, setFormattedDate ] = useState('');
    const params = useParams();

    async function fetchIssue(){
        const response = await api.get(`repos/lucasfreittas/github-blog/issues/${params.id}`);
        setIssueData(response.data);
        
        const date = parseISO(response.data.created_at);
        const formatDate = formatDistanceToNow(date, {addSuffix: true, locale: ptBR});
        setFormattedDate(formatDate)
    };

    
    

    useEffect(() => {
        fetchIssue()
    },[]);
    
    return(
        <IssueContainer>
            <Header />

            <ContentContainer>
                <InfoContainer>
                    <NavContainer>
                        <Link to='/'>
                            <a href="#">VOLTAR </a>
                        </Link>
                        <Link to={issueData.html_url}>
                            <span>VER NO GITHUB <FontAwesomeIcon icon={faUpRightFromSquare}/></span>
                        </Link>
                    </NavContainer>
                    <IssueTitleContainer>
                        <h1>{issueData.title}</h1>
                    </IssueTitleContainer>
                    <IssueData>
                        {issueData.user &&(
                             <span className='userSign'> <FontAwesomeIcon icon={faGithub}/>{issueData.user.login}</span>
                        )}
                        <span className='userCompany'> <FontAwesomeIcon icon={faCalendarDay}/>{formattedDate}</span>
                        <span className='followers'><FontAwesomeIcon icon={faComment} />{issueData.comments} Comentarios</span>
                    </IssueData>
                </InfoContainer>
                <PostsContainer>
                    <TextContainer>
                        <p>{issueData.body}</p>
                    </TextContainer>
                    <MarkdownContainer>
                        <ReactMarkdown className='markdown' >
                        {`
    let foo = 42;   // foo is now a number
    foo = 'bar';    // foo is now a string
    foo = true;     // foo is now a boolean`}
                        </ReactMarkdown>
                    </MarkdownContainer>
                </PostsContainer>
            </ContentContainer>
        </IssueContainer>
    )
}