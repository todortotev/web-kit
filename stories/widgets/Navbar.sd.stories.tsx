import React from "react";
import Navbar_sd from "../../src/widgets/Navbar_sd";
import { Props } from '../../src/widgets/Navbar_sd/types';

const MockProps: Props = {
  top_nav_strip: {
    shops: {
      label: 'Магазини',
      url: '#',
      items: [
        {
          label: 'Магазин 1',
          url: '#'
        },
        {
          label: 'Магазин 2',
          url: '#'
        }
      ]
    },
    userAccount: {
      label: 'Профил',
      url: '#',
      items: [
        {
          label: 'Опция 1',
          url: '#'
        },
        {
          label: 'Опция 2',
          url: '#'
        },
        {
          label: 'Опция 3',
          url: '#'
        },
        {
          label: 'Опция 4',
          url: '#'
        }
      ]
    },
    basket: {
      label: 'Кошница',
      url: '#'
    },
    locations: {
      label: 'България',
      url: '#',
      items: [
        {
          label: 'България',
          url: '#',
        },
        {
          label: 'Greece',
          url: '#',
        },
        {
          label: 'Romania',
          url: '#',
        }
      ]
    }
  },
  menu_items: [
    {
      menu_name: 'test 1',
      menu_url: '#',
      menus: [
        [
          {
            menus: [
              {
                menu_name: 'test 1 col 0 row 1',
                menu_url: '#'
              },
              {
                menu_name: 'test 1 col 0 row 2',
                menu_url: '#'
              },
              {
                menu_name: 'test 1 col 0 row 3',
                menu_url: '#'
              },
              {
                menu_name: 'test 1 col 0 row 4',
                menu_url: '#'
              }
            ]
          },
          {
            menu_type: 'hasLeftBorder',
            menus: [
              {
                menu_name: 'test 1 col 1 row 1',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'test 1 col 1 row 1 subcat 1',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 1 col 1 row 1 subcat 2',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 1 col 1 row 1 subcat 3',
                    menu_url: '#'
                  }
                ]
              },
              {
                menu_name: 'test 1 col 1 row 2',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'test 1 col 1 row 2 subcat 1',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 1 col 1 row 2 subcat 2',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 1 col 1 row 2 subcat 3',
                    menu_url: '#'
                  }
                ]
              }
            ]
          }
        ],
        [
          {
            menus: [
              {
                menu_name: 'test 1 col 2 row 1',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'test 1 col 2 row 1 subcat 1',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 1 col 2 row 1 subcat 2',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 1 col 2 row 1 subcat 3',
                    menu_url: '#'
                  }
                ]
              }
            ]
          }
        ]
      ]
    },
    {
      menu_name: 'test 2',
      menu_url: '#',
      menus: [
        [
          {
            menu_type: 'hasLeftBorder',
            menus: [
              {
                menu_name: 'test 2 col 1 row 1',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'test 2 col 1 row 1 subcat 1',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 2 col 1 row 1 subcat 2',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 2 col 1 row 1 subcat 3',
                    menu_url: '#'
                  }
                ]
              }
            ]
          }
        ]
      ]
    },
    {
      menu_name: 'test 3',
      menu_url: '#',
      menus: [
        [
          {
            menus: [
              {
                menu_name: 'test 3 col 1 row 1',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'test 3 col 1 row 1 subcat 1',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 3 col 1 row 1 subcat 2',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 3 col 1 row 1 subcat 3',
                    menu_url: '#'
                  }
                ]
              }
            ]
          }
        ]
      ]
    },
    {
      menu_name: 'test 4',
      menu_url: '#',
      menus: [
        [
          {
            menus: [
              {
                menu_name: 'test 4 col 1 row 1',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'test 4 col 1 row 1 subcat 1',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 4 col 1 row 1 subcat 2',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 4 col 1 row 1 subcat 3',
                    menu_url: '#'
                  }
                ]
              }
            ]
          }
        ]
      ]
    },
    {
      menu_name: 'test 5',
      menu_url: '#',
      menus: [
        [
          {
            menu_type: 'hasLeftBorder',
            menus: [
              {
                menu_name: 'test 5 col 1 row 1',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'test 5 col 1 row 1 subcat 1',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 5 col 1 row 1 subcat 2',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 5 col 1 row 1 subcat 3',
                    menu_url: '#'
                  }
                ]
              }
            ]
          }
        ]
      ]
    },
    {
      menu_name: 'test 6',
      menu_url: '#',
      menus: [
        [
          {
            menu_type: 'hasLeftBorder',
            menus: [
              {
                menu_name: 'test 6 col 1 row 1',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'test 6 col 1 row 1 subcat 1',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 6 col 1 row 1 subcat 2',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'test 6 col 1 row 1 subcat 3',
                    menu_url: '#'
                  }
                ]
              }
            ]
          }
        ]
      ]
    }
  ]
}

export default { title: "Navbar.sd", component: Navbar_sd };

export const Scene = () => (
  <>
    <Navbar_sd {...MockProps}></Navbar_sd>
    <style>{`body { margin : 0; font-family: Helvetica}`}</style>
  </>
);
