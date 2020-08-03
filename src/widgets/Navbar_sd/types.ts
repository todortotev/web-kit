// export type MenuItem = {
//   menu_name: string;
//   menu_url: string;
//   menus?: MenuItem | Menus | Menus[] | Menus[][];
// }

// export type Menus = {
//   menu_name?: string;
//   menu_url?: string;
//   menu_type?: 'hasLeftBorder' | '';
//   menus?: MenuItem | MenuItem[];
// }

export interface Props {
  menu_items: MenuItem[];
  top_nav_strip: TopNavStrip;
}

export type TopNavStrip = {
  shops: TopNavStripItem;
  userAccount: TopNavStripItem;
  basket: TopNavStripItem;
  locations: TopNavStripItem;
}

export interface TopNavStripItem {
  label: string;
  url: string;
  items?: TopNavStripItem[];
}

export type MenuItem = {
  menu_name: string;
  menu_url: string;
  menus: MenuColumn[][];
}

export type MenuColumn = {
  menu_type?: 'hasLeftBorder' | '';
  menus?: MenuRow[];
}

export type MenuRow = {
  menu_name: string;
  menu_url: string;
  menus?: MenuSubcategory[];
}

export type MenuSubcategory = {
  menu_name: string;
  menu_url: string;
}
