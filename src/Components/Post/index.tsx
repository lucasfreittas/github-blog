import { useState } from 'react';
import { PostContainer, TitleContainer, ContentContainer } from './styles';
import { FormatDistanceToNowStrictOptions, formatDistanceToNowStrict, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface User {
  login: string,
  id: number,
};

interface DataType {
  id: number,
  title: string,
  body: string,
  user: User | undefined,
  comments: number
  created_at: string,
  html_url: string,
};

interface IssueType{
 data: DataType
};

export function Post(data: IssueType){
  const date = parseISO(data.data.created_at);
  const formatDate = formatDistanceToNowStrict(date, { addSuffix: true, locale: ptBR });

    return(
      <PostContainer>
        <TitleContainer>
          <p>{data.data.title}</p>
          <span>{formatDate}</span>
        </TitleContainer>
        <ContentContainer>
          <p>{data.data.body}</p>
        </ContentContainer>
      </PostContainer>  
    );
};