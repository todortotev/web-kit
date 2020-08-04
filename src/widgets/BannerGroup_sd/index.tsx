import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner_sd';
import { Props } from './types';

const BannerGroup = (props: Props) => {
  return <Container>
    <ContainerRow>
      <Title>{props.bannerGroupTitle}</Title>
    </ContainerRow>
    <ContainerRow>
      {props.items.map(item => (
        <Banner img_url={item.img_url} inverted={item.inverted} banner_url={item.banner_url} button_caption={item.button_caption} button_title={item.button_title} key={item.img_url} />
      ))}
    </ContainerRow>
  </Container>;
}

const Container = styled.div`
  position: relative;
  margin-left: 48px;
  margin-right: 48px;
  width: auto;
  @media (max-width: 720px) {
    margin-left: 12px;
    margin-right: 12px;
  }
`;

const ContainerRow = styled.div`
  vertical-align: top;
  width: 100%;
  position: relative;
  min-height: 1px;
  font-size: 16px;
  line-height: 1.75;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: nowrap;
  @media (max-width: 720px) {
    flex-wrap: wrap;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.166667;
  color: #111;
  margin-right: auto;
`;

export default BannerGroup;
