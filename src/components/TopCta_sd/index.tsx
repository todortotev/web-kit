import React from 'react';
import styled from 'styled-components';

const TopCta = () => (
  <Container>
    <span>Тук може да се сложи текст с линк</span>
  </Container>
);

const Container = styled.div`
  height: auto;
  min-height: 45px;
  transition: all .5s;
  box-shadow: inset 0 -1px 0 0 #e5e5e5;
  position: relative;
  background: #f5f5f5;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  & > span {
    cursor: pointer;
  }
`;

export default TopCta;
