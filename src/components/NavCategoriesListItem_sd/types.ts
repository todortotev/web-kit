import { MenuItem } from '../../widgets/Navbar_sd/types';

export interface NavCategoriesListItemProps {
  item: MenuItem;
  active: boolean;
  toggleActive: (name: string) => () => void;
}
