import React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './types';
import useClickOutside from '../../hooks/useClickOutside';
import menuToList from '../../utils/menuToList_sd';
import UserIcon from '../../icons/UserIcon_sd';
import Arrow from '../../icons/Arrow';

const MobileNavList = (props: Props) => {
  const { menu_items, open, onClose } = props;
  const containerRef = React.useRef(null);
  const menuList = menuToList(menu_items);
  const [activeMenu, setActiveMenu] = React.useState(menuList);
  const [activeMenuParent, setActiveMenuParent] = React.useState<any>(null);
  useClickOutside(containerRef, onClose);

  // TODO: Prerender for SEO and animations
  const toggleMenu = (menu: any) => (e: any) => {
    if (menu.menus) {
      setParentMenu();
      setActiveMenu(menu.menus);
      return;
    }
    if (Array.isArray(menu)) {
      setParentMenu()
      setActiveMenu(menu)
      return;
    }
  };

  const setParentMenu = () => {
    if (activeMenu.menus) {
      setActiveMenuParent(activeMenu.parent);
    }
    if (Array.isArray(activeMenu)) {
      setActiveMenuParent(activeMenu[0].parent);
    }
  }

  const getMenuByParent = (parent: any) => (res: any, node: any) => {
    if (node.parent === parent) {
      return [...res, node];
    }
    if (Array.isArray(node)) {
      return node.reduce(getMenuByParent(parent), res);
    }
    if (node.menus) {
      return node.menus.reduce(getMenuByParent(parent), res);
    }
    return res;
  }

  const goBack = (e: any) => {
    if (!activeMenuParent) {
      return setActiveMenu(menuList);
    }
    setActiveMenu(menuList.reduce(getMenuByParent(activeMenuParent), []));
    setParentMenu();
  };

  const isRoot = () => activeMenu.length === menuList.length && activeMenu[0].menu_name === menuList[0].menu_name;

  return (
    <Container open={open} ref={containerRef}>
      <List>
        {isRoot() ? null : <ListItem back onClick={goBack}><div><Arrow height="10px" /><span>Назад</span></div></ListItem>}
        {isRoot() ? <ListItem special><div><UserIcon /> Профил</div><Arrow height="10px" /></ListItem> : null}
        {activeMenu.map((m: any) => {
          if (Array.isArray(m)) {
            return m.map((menuArr: any) => {
              return menuArr.menus.map((menu: any) => {
                return (<ListItem onClick={toggleMenu(menu)}><div>{menu.menu_name}</div>{menu.menus ? <Arrow height="10px" /> : null}</ListItem>)
              })
            })
          } else {
            return (
              <ListItem onClick={toggleMenu(m)}><div>{m.menu_name}</div>{m.menus ? <Arrow height="10px" /> : null}</ListItem>
            )
          }
        })}
      </List>
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

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
`;

const ListItem: any = styled.li`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
  background-color: ${(props: any) => props.back || props.special ? '#fff' : '#f7f7f7'};
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: ${(props: any) => props.back ? 'center' : 'space-between'};
  padding: 14px 20px;
  box-sizing: border-box;
  text-transform: ${(props: any) => props.special ? 'none' : 'uppercase'};
  align-items: center;
  cursor: pointer;
  & div svg {
    margin-right: ${(props: any) => props.back || props.special ? '8px' : '0'};
    transform: ${(props: any) => props.back ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export default MobileNavList;
