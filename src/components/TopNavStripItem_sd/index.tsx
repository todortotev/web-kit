import React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './types';
import Link from 'next/link';

const TopNavStripItem_sd = (props: Props) => {
  const { icon, label, menuItems, url, active, toggleActive, popupBeginsFrom = 'center' } = props;
  return (
    <Container onMouseOver={toggleActive(label)} active={active} hasMenuItems={menuItems && menuItems.length}>
      <Link passHref href={url}>
        <ItemLink active={active}>
          {icon ? icon : null}
          {label}
        </ItemLink>
      </Link>
      <MenuItemsPopup active={active} popupBeginsFrom={popupBeginsFrom}>
        <MenuItemsContent>
          <MenuItemsList>
            {menuItems && menuItems.map(item => (
              <li>
                <Link href={item.url} passHref>
                  <a aria-label={item.label}>
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </MenuItemsList>
        </MenuItemsContent>
      </MenuItemsPopup>
    </Container>
  )
}

const Container: any = styled.li`
  margin-top: 0;
  margin-bottom: 0;
  position: relative;
  vertical-align: middle;
  display: inline-block;
  box-sizing: border-box;
  box-shadow: ${(props: any) => props.active && props.hasMenuItems ? 'inset 0 -2px 0 0 #111' : 'none'};
`;

const ItemLink: any = styled.a`
  font-size: 14px;
  height: 100%;
  line-height: 2;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
  background: 0 0;
  border-radius: 2px;
  cursor: pointer;
  transition: all .2s ease;
  color: ${(props: any) => props.active ? '#111' : '#757575'};
  font-weight: 400;
  padding-right: 12px;
  padding-left: 12px;
  padding-bottom: 8px;
  padding-top: 8px;
  & svg {
    width: 14px;
    height: 14px;
    margin-right: 6px;
    fill: ${(props: any) => props.active ? '#111' : '#757575'};
  }
`;

const MenuItemsPopup: any = styled.div`
  display: ${(props: any) => props.active ? 'block' : 'none'};
  background: transparent;
  padding-top: 14px;
  top: 30px;
  position: absolute;
  z-index: 101;
  ${(props: any) => props.popupBeginsFrom === 'center' && css`
    left: 50%;
    transform: translateX(-50%);
  `};
`;

const MenuItemsContent = styled.div`
  background: #fff;
  min-width: 180px;
  box-shadow: inset 0 0 0 0 #e5e5e5, inset -1px 0 0 0 #e5e5e5, inset 0 -1px 0 0 #e5e5e5, inset 1px 0 0 0 #e5e5e5;
`;

const MenuItemsList = styled.ul`
  padding: 20px 28px;
  list-style: none;
  margin-top: 0;
  margin-bottom: 0;
  z-index: 4;
  & a {
    font-size: 12px;
    line-height: 2;
    font-weight: 400;
    color: #111;
    cursor: pointer;
    text-decoration: none;
  }
`;

export default TopNavStripItem_sd;
