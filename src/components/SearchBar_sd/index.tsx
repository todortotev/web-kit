import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../icons/SearchIcon';

const SearchBar = () => {
  return (
  <AbsoluteContainer>
    <FormGroupContainer>
      <TypeHeadSearchContainer>
        <SearchInput placeholder="Търсене" />
        <SearchButton>
          <SearchIcon />
        </SearchButton>
      </TypeHeadSearchContainer>
    </FormGroupContainer>
  </AbsoluteContainer>);
};

const AbsoluteContainer = styled.div`
  position: absolute;
  right: 24px;
  top: 15px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const FormGroupContainer = styled.div`
  position: relative;
`;

const TypeHeadSearchContainer = styled.div`
  position: relative;
  top: inherit;
  height: 100%;
  background: #fff;
  /* position: fixed; */ /* FOR MOBILE */
  left: 0;
  right: 0;
  /* top: 0; */ /* FOR MOBILE */
  padding: 0;
  z-index: 3;
`;

const SearchInput = styled.input`
  width: 100%;
  overflow: visible;
  max-width: 100%;
  font-size: 14px;
  line-height: 1.714285714285714;
  min-height: 40px;
  height: inherit;
  position: relative;
  border: 1px solid #ccc;
  padding-left: 40px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-top: 8px;
  display: inline-block;
  border-radius: 2px;
  box-sizing: border-box;
  /* font-size: 16px;
  line-height: 1.5;
  min-height: 48px; */ /* FOR MOBILE */
`;

const SearchButton = styled.button`
  left: 9px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  z-index: 2;
  font-size: inherit;
  line-height: inherit;
  border: none;
  cursor: pointer;
  overflow: visible;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  box-sizing: border-box;
`;

export default SearchBar;
