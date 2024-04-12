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

export function Issues(){
    return(
        <IssueContainer>
            <Header />

            <ContentContainer>
                <InfoContainer>
                    <NavContainer>
                        <a href="#">VOLTAR </a>
                        <span>VER NO GITHUB <FontAwesomeIcon icon={faUpRightFromSquare}/> </span>
                    </NavContainer>
                    <IssueTitleContainer>
                        <h1>JavaScript data types and data structures</h1>
                    </IssueTitleContainer>
                    <IssueData>
                        <span className='userSign'> <FontAwesomeIcon icon={faGithub}/>lucasfreittas</span>
                        <span className='userCompany'> <FontAwesomeIcon icon={faCalendarDay}/>Há 1 dia</span>
                        <span className='followers'><FontAwesomeIcon icon={faComment} />5 Comentários</span>
                    </IssueData>
                </InfoContainer>
                <PostsContainer>
                    <TextContainer>
                        <p>Programming languages all have built-in data structures, but these often differ from 
                            one language to another. This article attempts to list the built-in data structures 
                            available in JavaScript and what properties they have. These can be used to build other 
                            data structures. Wherever possible, comparisons with other languages are drawn.
                            <br/><br/>
                            Dynamic typing
                            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly 
                            associated with any particular value type, and any variable can be assigned (and re-assigned) 
                            values of all types:
                        </p>
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