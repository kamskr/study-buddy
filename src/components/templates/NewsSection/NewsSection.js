import React from 'react';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styled';
import { Button } from 'components/atoms/Button/Button';

const data = [
  {
    title: 'New computers at school',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pretium nisi. In dictum accumsan ante, eget sodales diam laoreet vel. Donec cursus purus sit amet arcu pretium, eu elementum nulla sollicitudin. Morbi sed elit in est cursus blandit quis ac justo. Maecenas non magna maximus, dignissim ligula ut, laoreet sem. Cras ac conse',
  },
  {
    title: 'New computers at school2',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pretium nisi. In dictum accumsan ante, eget sodales diam laoreet vel. Donec cursus purus sit amet arcu pretium, eu elementum nulla sollicitudin. Morbi sed elit in est cursus blandit quis ac justo. Maecenas non magna maximus, dignissim ligula ut, laoreet sem. Cras ac conse',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computers at school3',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pretium nisi. In dictum accumsan ante, eget sodales diam laoreet vel. Donec cursus purus sit amet arcu pretium, eu elementum nulla sollicitudin. Morbi sed elit in est cursus blandit quis ac justo. Maecenas non magna maximus, dignissim ligula ut, laoreet sem. Cras ac conse',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computers at school4',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pretium nisi. In dictum accumsan ante, eget sodales diam laoreet vel. Donec cursus purus sit amet arcu pretium, eu elementum nulla sollicitudin. Morbi sed elit in est cursus blandit quis ac justo. Maecenas non magna maximus, dignissim ligula ut, laoreet sem. Cras ac conse',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'New computers at school5',
    category: 'Tech news',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pretium nisi. In dictum accumsan ante, eget sodales diam laoreet vel. Donec cursus purus sit amet arcu pretium, eu elementum nulla sollicitudin. Morbi sed elit in est cursus blandit quis ac justo. Maecenas non magna maximus, dignissim ligula ut, laoreet sem. Cras ac conse',
    image: 'https://unsplash.it/500/400',
  },
];

export const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
      {data.map(({ title, category, content, image = null }) => (
        <ArticleWrapper key={title}>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <ContentWrapper>
            <p>{content}</p>
            {image ? <img src={image} alt="article" /> : null}
          </ContentWrapper>
          <Button isBig>click me</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};
