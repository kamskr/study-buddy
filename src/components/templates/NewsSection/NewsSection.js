import React, { useEffect, useState } from 'react';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styled';
import { Button } from 'components/atoms/Button/Button';
import axios from 'axios';

const query = `
{
  allArticles {
    id
    title
    category
    content
    image {
      url
    }
  }
}
`;

export const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    console.log(process.env.REACT_APP_DATOCMS_ENDPOINT);
    axios
      .post(
        process.env.REACT_APP_DATOCMS_ENDPOINT,
        {
          query: query,
        },
        { headers: { authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}` } },
      )
      .then(({ data: { data } }) => {
        setArticles(data.allArticles);
      })
      .catch(() => setError("Sorry, we couldn't load articles for you"));
  }, []);

  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {articles.length > 0 ? (
        articles.map(({ title, category, content, image = null }) => (
          <ArticleWrapper key={title}>
            <TitleWrapper>
              <h3>{title}</h3>
              <p>{category}</p>
            </TitleWrapper>
            <ContentWrapper>
              <p>{content}</p>
              {image ? <img src={image.url} alt="article" /> : null}
            </ContentWrapper>
            <Button isBig>click me</Button>
          </ArticleWrapper>
        ))
      ) : (
        <NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
      )}
    </Wrapper>
  );
};
