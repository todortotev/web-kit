import React from 'react';
import styled, { css } from 'styled-components';
import { NavCategoriesListItemProps } from './types';
import extractPathFromUrl from '../../utils/extractPathFromURL';
import Link from 'next/link';

const NavCategoriesListItem = (props: NavCategoriesListItemProps) => {
  const { item, toggleActive } = props;
  const onMouseLeave = () => toggleActive('')();
  return (
    <ListItem onMouseEnter={toggleActive(item.menu_name)} active={props.active} onMouseLeave={onMouseLeave}>
      <Link passHref href={extractPathFromUrl(item.menu_url)} as={item.menu_url}>
        <>
          <ListLink aria-label={item.menu_name}>
            {item.menu_name}
          </ListLink>
          <AbsoluteWrapper active={props.active}>
            <MenuContainer>
              {Array.isArray(item.menus) ? item.menus.map((categories) => {
                return categories.map((category, i: number) => {
                  return (
                    <NavMenuColumn key={`${item.menu_name}__${i}`} hasLeftBorder={category.menu_type === 'hasLeftBorder'}>
                      {Array.isArray(category.menus) ? category.menus.map((subcategory) => (
                        <>
                          <Link passHref href={extractPathFromUrl(subcategory.menu_url)} as={subcategory.menu_url}>
                            <RowHeader key={subcategory.menu_name} aria-label={subcategory.menu_name}>
                              {subcategory.menu_name}
                            </RowHeader>
                          </Link>
                          {Array.isArray(subcategory.menus) ? subcategory.menus.map((subcategoryItem) => {
                            return (
                              <Link passHref href={extractPathFromUrl(subcategoryItem.menu_url)} as={subcategoryItem.menu_url}>
                                <SubcategoryLink key={subcategoryItem.menu_name} aria-label={subcategoryItem.menu_name}>
                                  {subcategoryItem.menu_name}
                                </SubcategoryLink>
                              </Link>
                            )
                          }) : null}
                        </>
                      )) : null}
                    </NavMenuColumn>
                  )
                })
              }) : null}
            </MenuContainer>
          </AbsoluteWrapper>
        </>
      </Link>
    </ListItem>
  )
}

const ListItem: any = styled.li`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  display: inline-block;
  box-shadow: ${(props: any) => props.active ? 'inset 0 -2px 0 0 #111' : 'none'};
`;

const ListLink = styled.a`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  letter-spacing: .5px;
  text-transform: uppercase;
  vertical-align: middle;
  padding: 24px 20px;
  display: inline-block;
  color: #111;
  cursor: pointer;
  text-decoration: none;
`;

const AbsoluteWrapper: any = styled.div`
  right: 0;
  text-align: left;
  position: absolute;
  left: 0;
  top: 100%;
  max-height: calc(100vh - 112px);
  max-width: 100vw;
  opacity: 0;
  visibility: hidden;
  overflow: auto;
  z-index: 9000;
  transition: opacity .1s linear .4s,visibility 0ms linear .41s;
  box-shadow: inset 0 -1px 0 0 #e5e5e5;
  background: #fff;
  ${(props: any) => props.active && css`
  opacity: 1;
  visibility: visible;
  transition: opacity .1s,visibility 0ms;
  transition-delay: .3s;
  `}
`;

const MenuContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  text-align: left;
  padding-bottom: 40px;
  padding-top: 40px;
  display: table;
`;

const NavMenuColumn: any = styled.div`
  width: 200px;
  vertical-align: top;
  padding-right: 16px;
  padding-left: 16px;
  display: table-cell;
  ${(props: any) => props.hasLeftBorder && css`
    padding-left: 32px;
    box-shadow: inset 1px 0 0 0 #e5e5e5;
  `}
`;

const RowHeader = styled.a`
  font-weight: 600;
  letter-spacing: .5px;
  font-size: 16px;
  line-height: 16px;
  margin-top: 20px;
  margin-bottom: 16px;
  display: block;
  white-space: nowrap;
  color: #111;
  cursor: pointer;
  text-decoration: none;
`;

const SubcategoryLink = styled.a`
  display: block;
    white-space: nowrap;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 8px;
    font-weight: 400;
    color: #111;
    cursor: pointer;
    text-decoration: none;
`;



export default NavCategoriesListItem;
