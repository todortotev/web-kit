import React from 'react';
import styled from 'styled-components';
import NavCategoriesListItem from '../../components/NavCategoriesListItem_sd';
import TopNavStripItem from '../../components/TopNavStripItem_sd';
import SearchBar from '../../components/SearchBar_sd';
import Logo from '../../icons/Logo_sd';
import { Props } from './types';
import Link from 'next/link';
import UserIcon from '../../icons/UserIcon_sd';

const Navbar = (props: Props) => {
  const { menu_items } = props;
  const [active, setActive] = React.useState('');
  const toggleActive = (name: string) => () => setActive(name);

  const [activeTopStrip, setActiveTopStrip] = React.useState('');
  const toggleActiveTopStrip = (name: string) => () => setActiveTopStrip(name);

  return (
    <NavContainer>
      <TopNavStripContainer>
        <TopNavStripWrapper>
          <TopNavStripGroup left>
            <TopNavStripItem popupBeginsFrom="left" toggleActive={toggleActiveTopStrip} active={activeTopStrip === 'Магазини'} url="#" label="Магазини" menuItems={[
              {
                label: 'Магазин 1',
                url: '#'
              },
              {
                label: 'Магазин 2',
                url: '#'
              }
            ]}></TopNavStripItem>
          </TopNavStripGroup>
          <TopNavStripGroup>
            <TopNavStripItem icon={<UserIcon />} toggleActive={toggleActiveTopStrip} active={activeTopStrip === 'Профил'} url="#" label="Профил" menuItems={[
              {
                label: 'Опция 1',
                url: '#'
              },
              {
                label: 'Опция 2',
                url: '#'
              },
              {
                label: 'Опция 3',
                url: '#'
              },
              {
                label: 'Опция 4',
                url: '#'
              }
            ]}></TopNavStripItem>
          </TopNavStripGroup>
        </TopNavStripWrapper>
      </TopNavStripContainer>
      <CategoriesStripContainer>
        <LogoContainer>
          <Link href="/" passHref>
            <LogoLink aria-label="Homepage">
              <Logo />
            </LogoLink>
          </Link>
        </LogoContainer>
        <NavCategoriesList>
          {menu_items.map(menu => (
            <NavCategoriesListItem item={menu} key={menu.menu_name} active={active === menu.menu_name} toggleActive={toggleActive} />
          ))}
        </NavCategoriesList>
        <SearchBar />
      </CategoriesStripContainer>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  background: #fff;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
  display: block;
`;

const TopNavStripContainer = styled.div`
  height: 40px;
  box-shadow: inset 0 -1px 0 0 #e5e5e5;
  background: #fff;
  font-size: 0;
  margin-left: -8px;
  margin-right: -8px;
  padding-left: 16px;
  align-items: center;
  display: flex;
  &::before {
    content: "";
    display: table;
  }
  &::after {
    clear: both;
    content: "";
    display: table;
  }
`;

const TopNavStripGroup: any = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-right: 24px;
  display: inline-block;
  float: ${(props: any) => props.left ? 'left' : 'right'};
`;

const TopNavStripWrapper = styled.div`
    font-size: 14px;
    line-height: 1.714285714285714;
    padding-right: 0;
    padding-left: 0;
    width: 100%;
    display: inline-block;
    position: relative;
    min-height: 1px;
`;

const CategoriesStripContainer = styled.div`
  position: relative;
  min-height: 48px;
  /* min-height: 72px; */ /* FOR MOBILE */
  box-shadow: inset 0 -1px 0 0 #e5e5e5;
  margin-left: -8px;
  margin-right: -8px;
  padding-left: 8px;
  box-sizing: border-box;
  &::before {
    content: "";
    display: table;
    box-sizing: inherit;
  }
`;

const NavCategoriesList = styled.ul`
list-style: none;
padding-inline-start: 0;
margin: 0;
padding: 0;
border: 0;
text-align: center;
position: relative;
padding-right: 50px;
box-sizing: border-box;
`;

const LogoContainer = styled.div`
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const LogoLink = styled.a`
  display: inline-block;
  color: #111;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
`;

export default Navbar;
