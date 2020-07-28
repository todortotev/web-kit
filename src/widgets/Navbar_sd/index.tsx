import React from 'react';
import NavCategoriesList from '../../components/NavCategoriesList_sd';
import NavCategoriesListItem from '../../components/NavCategoriesListItem_sd';
import { Props } from './types';

const Navbar = (props: Props) => {
  const { menu_items } = props;
  const [active, setActive] = React.useState('');
  const toggleActive = (name: string) => () => setActive(name);
  return (
    <NavCategoriesList>
      {menu_items.map(menu => (
        <NavCategoriesListItem item={menu} key={menu.menu_name} active={active === menu.menu_name} toggleActive={toggleActive} />
      ))}
    </NavCategoriesList>
  )
}

export default Navbar;
