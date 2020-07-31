export interface Props {
  icon?: JSX.Element;
  label: string;
  hideLabel?: boolean;
  url: string;
  menuItems?: MenuItem[];
  popupBeginsFrom?: 'left' | 'center';
  active: boolean;
  toggleActive: (name: string) => () => void;
}

export type MenuItem = {
  label: string,
  url: string;
}
