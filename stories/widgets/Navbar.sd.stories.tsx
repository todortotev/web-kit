import React from "react";
import Navbar_sd from "../../src/widgets/Navbar_sd";
import { Props as NavbarProps } from '../../src/widgets/Navbar_sd/types';

const MockNavbarProps: NavbarProps = {
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
      menu_name: 'Нови',
      menu_url: '#',
      menus: [
        [
          {
            menus: [
              {
                menu_name: 'Летни предложения',
                menu_url: '#'
              },
              {
                menu_name: 'Нови продукти',
                menu_url: '#'
              },
              {
                menu_name: 'Сезонни намаления',
                menu_url: '#'
              },
              {
                menu_name: 'Спорт',
                menu_url: '#'
              }
            ]
          },
          {
            menu_type: 'hasLeftBorder',
            menus: [
              {
                menu_name: 'Обувки',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Ежедневни обукви',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Ботуши',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Сандали',
                    menu_url: '#'
                  }
                ]
              },
              {
                menu_name: 'Аксесоари',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Чанти',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Колани',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Чорапи',
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
                menu_name: 'Облекло',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Блузи',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Тениски',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Панталони',
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
      menu_name: 'Мъже',
      menu_url: '#',
      menus: [
        [
          {
            menus: [
              {
                menu_name: 'Мъжко Облекло',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Блузи',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Панталони',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Анцузи',
                    menu_url: '#'
                  }
                ]
              }
            ]
          },
          {
            menus: [
              {
                menu_name: 'Мъжки Обувки',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Ежедневни',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Джапанки',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Сандали',
                    menu_url: '#'
                  }
                ]
              }
            ]
          },
          {
            menus: [
              {
                menu_name: 'Мъжки Аксесоари',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Раници',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Чорапи',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Портмонета',
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
      menu_name: 'Жени',
      menu_url: '#',
      menus: [
        [
          {
            menus: [
              {
                menu_name: 'Женско Облекло',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Блузи',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Панталони',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Анцузи',
                    menu_url: '#'
                  }
                ]
              }
            ]
          },
          {
            menus: [
              {
                menu_name: 'Женски Обувки',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Ежедневни',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Джапанки',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Сандали',
                    menu_url: '#'
                  }
                ]
              }
            ]
          },
          {
            menus: [
              {
                menu_name: 'Женски Аксесоари',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Раници',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Чорапи',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Портмонета',
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
      menu_name: 'Деца',
      menu_url: '#',
      menus: [
        [
          {
            menus: [
              {
                menu_name: 'Детско Облекло',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Блузи',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Панталони',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Анцузи',
                    menu_url: '#'
                  }
                ]
              }
            ]
          },
          {
            menus: [
              {
                menu_name: 'Детски Обувки',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Ежедневни',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Джапанки',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Сандали',
                    menu_url: '#'
                  }
                ]
              }
            ]
          },
          {
            menus: [
              {
                menu_name: 'Детски Аксесоари',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Раници',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Чорапи',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Портмонета',
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
      menu_name: 'Лято',
      menu_url: '#',
      menus: [
        [
          {
            menus: [
              {
                menu_name: 'Облекло',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Блузи',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Панталони',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Анцузи',
                    menu_url: '#'
                  }
                ]
              }
            ]
          },
          {
            menus: [
              {
                menu_name: 'Обувки',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Ежедневни',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Джапанки',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Сандали',
                    menu_url: '#'
                  }
                ]
              }
            ]
          },
          {
            menus: [
              {
                menu_name: 'Аксесоари',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Раници',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Чорапи',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Портмонета',
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
      menu_name: 'Колекции',
      menu_url: '#',
      menus: [
        [
          {
            menus: [
              {
                menu_name: 'Air Jordan',
                menu_url: '#'
              },
              {
                menu_name: 'React',
                menu_url: '#'
              },
              {
                menu_name: 'Pegasus',
                menu_url: '#'
              }
            ]
          },
          {
            menu_type: 'hasLeftBorder',
            menus: [
              {
                menu_name: 'Облекло',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Блузи',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Панталони',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Анцузи',
                    menu_url: '#'
                  }
                ]
              }
            ]
          },
          {
            menus: [
              {
                menu_name: 'Обувки',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Ежедневни',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Джапанки',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Сандали',
                    menu_url: '#'
                  }
                ]
              }
            ]
          },
          {
            menus: [
              {
                menu_name: 'Аксесоари',
                menu_url: '#',
                menus: [
                  {
                    menu_name: 'Раници',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Чорапи',
                    menu_url: '#'
                  },
                  {
                    menu_name: 'Портмонета',
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

export default { title: 'Navbar.sd' };

export const Scene = () => (
  <>
    <Navbar_sd {...MockNavbarProps}></Navbar_sd>
    <style>{`body { margin : 0; font-family: Helvetica}`}</style>
  </>
);
