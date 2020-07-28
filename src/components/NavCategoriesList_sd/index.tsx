import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const NavCategoriesList: FunctionComponent = (props) => {
  return (<Container>{props.children}</Container>)
}

const Container = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  margin: 0;
  padding: 0;
  border: 0;
  text-align: center;
  position: relative;
`;

export default NavCategoriesList;
