import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';
import styled from 'styled-components';

const SearchBar = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

const News = styled.div`
  grid-row: 1/3;
  grid-column: 3/3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      <News>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
      </News>
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
