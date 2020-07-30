import React from 'react';
import styled from 'styled-components';
import NavCategoriesListItem from '../../components/NavCategoriesListItem_sd';
import SearchBar from '../../components/SearchBar_sd';
import Logo from '../../icons/Logo_sd';
import { Props } from './types';
import Link from 'next/link';

const Navbar = (props: Props) => {
  const { menu_items } = props;
  const [active, setActive] = React.useState('');
  const toggleActive = (name: string) => () => setActive(name);
  return (
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
  )
}

const CategoriesStripContainer = styled.div`
  position: relative;
  min-height: 48px;
  /* min-height: 72px; */ /* FOR MOBILE */
  box-shadow: inset 0 -1px 0 0 #e5e5e5;
  margin-left: -8px;
  margin-right: -8px;
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
  padding: 0 20px;
  display: inline-block;
  color: #111;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
`;

export default Navbar;
