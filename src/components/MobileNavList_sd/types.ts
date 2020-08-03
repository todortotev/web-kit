import { MenuItem } from '../../widgets/Navbar_sd/types';

export interface Props {
  menu_items: MenuItem[];
  open: boolean;
  onClose: (...args: any) => any;
}
