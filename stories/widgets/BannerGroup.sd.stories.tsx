import React from "react";
import BannerGroup from '../../src/widgets/BannerGroup_sd';
import { Props as BannerGroupProps } from '../../src/widgets/BannerGroup_sd/types';


const BannerMockProps1: BannerGroupProps = {
  bannerGroupTitle: 'Специални предложения',
  items: [
    {
      banner_url: '#',
      img_url: 'https://static.nike.com/a/images/f_auto/dpr_2.0/h_700,c_limit/8255c8a6-d6c7-49e0-b54b-f81fb195fcfc/nike-just-do-it.jpg',
      button_title: 'Zoom freak 2',
      button_caption: 'Купи'
    },
    {
      banner_url: '#',
      img_url: 'https://static.nike.com/a/images/f_auto/dpr_2.0/h_700,c_limit/7dfdae9e-770a-455d-9b8a-b1407f76eebd/nike-just-do-it.jpg',
      button_title: 'UltraBreath Sport Bra',
      button_caption: 'Купи',
      inverted: true
    },
  ]
}

const BannerMockProps2: BannerGroupProps = {
  bannerGroupTitle: 'Още от нас',
  items: [
    {
      banner_url: '#',
      img_url: 'https://static.nike.com/a/images/f_auto/dpr_2.0/h_540,c_limit/0bafb728-2ae2-416f-bb18-5935801c8071/nike-just-do-it.png',
      button_caption: 'Мъже',
      inverted: true
    },
    {
      banner_url: '#',
      img_url: 'https://static.nike.com/a/images/f_auto/dpr_2.0/h_540,c_limit/2c8754ce-6287-4e77-a198-1ad483fba257/nike-just-do-it.png',
      button_caption: 'Жени',
      inverted: true
    },
    {
      banner_url: '#',
      img_url: 'https://static.nike.com/a/images/f_auto/dpr_2.0/h_540,c_limit/414db494-7ebc-4d53-bbff-58d50b380a24/nike-just-do-it.png',
      button_caption: 'Деца',
      inverted: true
    }
  ]
}

const BannerMockProps3: BannerGroupProps = {
  bannerGroupTitle: 'Нови',
  items: [
    {
      banner_url: '#',
      img_url: 'https://i.imgur.com/TN1nYId.png',
      button_title: 'Нова колекция',
      button_caption: 'Купи'
    }
  ]
}


export default { title: 'BannerGroup.sd' };

export const with3Rows = () => (
  <>
    <BannerGroup {...BannerMockProps3} />
    <BannerGroup {...BannerMockProps1} />
    <BannerGroup {...BannerMockProps2} />
    <style>{`body { margin : 0; font-family: Helvetica}`}</style>
  </>
);

export const singleBigBanner = () => (
  <>
    <BannerGroup {...BannerMockProps3} />
    <style>{`body { margin : 0; font-family: Helvetica}`}</style>
  </>
);

export const twoSmallBanners = () => (
  <>
    <BannerGroup {...BannerMockProps1} />
    <style>{`body { margin : 0; font-family: Helvetica}`}</style>
  </>
);

export const threeSmallBanners = () => (
  <>
    <BannerGroup {...BannerMockProps2} />
    <style>{`body { margin : 0; font-family: Helvetica}`}</style>
  </>
);
