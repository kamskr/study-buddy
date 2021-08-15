import React from 'react';
import { SearchBarWrapper, StatusInfo } from './SearchBar.styled';
import { Input } from '../../atoms/Input/Input';

export const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as: </p>
        <p>
          <strong>Teacher</strong>{' '}
        </p>
      </StatusInfo>
      <Input />
    </SearchBarWrapper>
  );
};

export default SearchBar;
