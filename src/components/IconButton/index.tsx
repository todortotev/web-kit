import React from 'react';
import styled from 'styled-components';
import { Props } from './types';

const IconButton = (props: Props) => {
  const { icon, onClick} = props;
  return (
    <Container onClick={onClick}>
      {icon}
    </Container>
  )
}

const Container = styled.div`
  margin: 0 1px;
  padding: 8px;
  box-sizing: border-box;
  vertical-align: middle;
  cursor: pointer;
`;

export default IconButton;
