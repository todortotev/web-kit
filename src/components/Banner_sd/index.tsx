import React from 'react';
import styled from 'styled-components';
import { Props } from './types';

const Banner = (props: Props) => {
  return <Container>
    <Image src={props.img_url} />
    <ButtonContainer>
      {props.button_title ? <ButtonCaption inverted={props.inverted}>{props.button_title}</ButtonCaption> : null}
      {props.button_caption ? <Button inverted={props.inverted}><a>{props.button_caption}</a></Button> : null}
    </ButtonContainer>
  </Container>;
}

const Container = styled.a`
  position: relative;
  height: 700px;
  width: auto;
  flex-grow: 1;
  pointer-events: auto;
  text-transform: none;
  display: block;
  padding-left: 8px;
  padding-right: 8px;
  @media (max-width: 720px) {
    height: 500px;
    padding-bottom: 16px;
  }
`

const Image = styled.img`
  opacity: 1;
  object-position: 50% 50%;
  font-family: "object-fit:cover;object-position:50% 50%";
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 100%;
  display: block;
`;

const ButtonContainer = styled.div`
  top: calc(66.66667% - 36px);
  height: 33.33333%;
  text-align: left;
  left: 36px;
  width: 75%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: absolute;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ButtonCaption: any = styled.p`
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
  color: ${(props: any) => props.inverted ? '#fff' : '#111'};
  margin-bottom: 8px;
  font-weight: 500;
`;

const Button: any = styled.div`
  margin-top: 18px;
 & > a {
  padding: 8px 28px;
  transition: color .5s ease-out;
  position: relative;
  z-index: 1;
  margin-left: 0;
  margin-right: 6px;
  margin-top: 6px;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-radius: 20px;
  background: ${(props: any) => props.inverted ? '#fff' : '#111'};
  color: ${(props: any) => props.inverted ? '#111' : '#fff'};
  display: inline-block;
  vertical-align: top;
  text-align: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
 }

`;

export default Banner;
