import React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './types';
import useClickOutside from '../../hooks/useClickOutside';

const MobileNavList = (props: Props) => {
  const containerRef = React.useRef(null);
  const { menu_items, open, onClose } = props;
  useClickOutside(containerRef, onClose);
  return (
    <Container open={open} ref={containerRef}>
      MENU HERE
    </Container>
  )
}

const Container: any = styled.nav`
    z-index: 9000;
    background: #fff;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 290px;
    opacity: 0;
    visibility: hidden;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity .2s,visibility 0ms linear .2s,transform .5s ease;
    transform: translate3d(290px,0,0);
    box-shadow: inset 1px 0 0 0 #e5e5e5;
    display: block;
    ${(props: any) => props.open && css`
      transform: translateZ(0);
      opacity: 1;
      visibility: visible;
      transition: opacity .2s,visibility 0ms,transform .5s ease;
    `};
`;

export default MobileNavList;
