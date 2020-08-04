import React from 'react';
import styled, { css } from 'styled-components';
import NavCategoriesListItem from '../../components/NavCategoriesListItem_sd';
import TopNavStripItem from '../../components/TopNavStripItem_sd';
import SearchBar from '../../components/SearchBar_sd';
import Logo from '../../icons/Logo_sd';
import { Props } from './types';
import Link from 'next/link';
import UserIcon from '../../icons/UserIcon_sd';
import BasketIcon from '../../icons/Basket_sd';
import LocationPin from '../../icons/LocationPin_sd';
import HamburgerIcon from '../../icons/Hamburger_sd';
import IconButton from '../../components/IconButton';
import SearchIcon from '../../icons/SearchIcon';
import MobileNavList from '../../components/MobileNavList_sd';

const Navbar = (props: Props) => {
  const { menu_items, top_nav_strip } = props;
  const { shops, userAccount, basket, locations } = top_nav_strip;
  const [active, setActive] = React.useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const toggleActive = (name: string) => () => setActive(name);
  const noOp = (e: any) => console.log(e);

  const [activeTopStrip, setActiveTopStrip] = React.useState('');
  const toggleActiveTopStrip = (name: string) => () => setActiveTopStrip(name);

  return (
    <NavContainer>
      <TopNavStripContainer>
        <TopNavStripWrapper>
          <TopNavStripGroup left>
            <TopNavStripItem popupBeginsFrom="left" toggleActive={toggleActiveTopStrip} active={activeTopStrip === shops.label} url={shops.url} label={shops.label} menuItems={shops.items} />
          </TopNavStripGroup>
          <TopNavStripGroup>
            <TopNavStripItem icon={<UserIcon />} toggleActive={toggleActiveTopStrip} active={activeTopStrip === userAccount.label} url={userAccount.url} label={userAccount.label} menuItems={userAccount.items} />
            <TopNavStripItem icon={<BasketIcon />} toggleActive={toggleActiveTopStrip} active={activeTopStrip === basket.label} url={basket.url} label={basket.label} hideLabel />
            <TopNavStripItem icon={<LocationPin />} toggleActive={toggleActiveTopStrip} active={activeTopStrip === locations.label} url={locations.url} label={locations.label} menuItems={locations.items} />
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
        <MobileNavItemsContainer mobileMenuOpen={mobileMenuOpen}>
          <MobileNavItemsWrapper>
            <IconButton icon={<SearchIcon width="25px" height="25px" />} onClick={noOp} />
            <IconButton icon={<BasketIcon width="25px" height="25px" />} onClick={noOp} />
            <IconButton icon={<HamburgerIcon width="25px" height="25px" />} onClick={toggleMobileMenu} />
          </MobileNavItemsWrapper>
        </MobileNavItemsContainer>
        <MobileNavList menu_items={menu_items} open={mobileMenuOpen} onClose={closeMobileMenu} />
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
  box-sizing: border-box;
`;

const MobileNavItemsContainer: any = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
    padding-bottom: 8px;
    padding-top: 8px;
    &::before {
      content: "";
      display: block;
      z-index: -1;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      visibility: hidden;
      opacity: 0;
      transition: opacity .2s,visibility 0ms;
      ${(props: any) => props.mobileMenuOpen && css`
        background: rgba(0,0,0,.4);
        visibility: visible;
        z-index: 1;
        opacity: 1;
        transition: opacity .2s,visibility 0ms;
      `}
    }
  }
`;

const MobileNavItemsWrapper = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 24px;
  }
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
  @media (max-width: 1024px) {
    display: none;
  }
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
@media (max-width: 1024px) {
  display: none;
}
`;

const LogoContainer = styled.div`
  display: block;
  position: absolute;
  left: 12px;
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
