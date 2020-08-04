import React from "react";
import Navbar_sd from "../../src/widgets/Navbar_sd";
import { Props as NavbarProps } from '../../src/widgets/Navbar_sd/types';
import TopCta from '../../src/components/TopCta_sd';
import BannerGroup from '../../src/widgets/BannerGroup_sd';
import { Props as BannerGroupProps } from '../../src/widgets/BannerGroup_sd/types';

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

const BannerMockProps1: BannerGroupProps = {
  bannerGroupTitle: 'Специални предложения',
  items: [
    {
      banner_url: '#',
      img_url: 'https://static.nike.com/a/images/f_auto/dpr_2.0/h_700,c_limit/8255c8a6-d6c7-49e0-b54b-f81fb195fcfc/nike-just-do-it.jpg',
      button_title: 'Zoom freak 2',
      button_caption: 'Купи'
    },
    {
      banner_url: '#',
      img_url: 'https://static.nike.com/a/images/f_auto/dpr_2.0/h_700,c_limit/7dfdae9e-770a-455d-9b8a-b1407f76eebd/nike-just-do-it.jpg',
      button_title: 'UltraBreath Sport Bra',
      button_caption: 'Купи',
      inverted: true
    },
  ]
}

const BannerMockProps2: BannerGroupProps = {
  bannerGroupTitle: 'Още от нас',
  items: [
    {
      banner_url: '#',
      img_url: 'https://static.nike.com/a/images/f_auto/dpr_2.0/h_540,c_limit/0bafb728-2ae2-416f-bb18-5935801c8071/nike-just-do-it.png',
      button_caption: 'Мъже',
      inverted: true
    },
    {
      banner_url: '#',
      img_url: 'https://static.nike.com/a/images/f_auto/dpr_2.0/h_540,c_limit/2c8754ce-6287-4e77-a198-1ad483fba257/nike-just-do-it.png',
      button_caption: 'Жени',
      inverted: true
    },
    {
      banner_url: '#',
      img_url: 'https://static.nike.com/a/images/f_auto/dpr_2.0/h_540,c_limit/414db494-7ebc-4d53-bbff-58d50b380a24/nike-just-do-it.png',
      button_caption: 'Деца',
      inverted: true
    }
  ]
}

const BannerMockProps3: BannerGroupProps = {
  bannerGroupTitle: 'Нови',
  items: [
    {
      banner_url: '#',
      img_url: 'https://i.imgur.com/TN1nYId.png',
      button_title: 'Нова колекция',
      button_caption: 'Купи'
    }
  ]
}


export default { title: 'IndexPage.sd' };

export const Scene = () => (
  <>
    <Navbar_sd {...MockNavbarProps}></Navbar_sd>
    <TopCta />
    <BannerGroup {...BannerMockProps3} />
    <BannerGroup {...BannerMockProps1} />
    <BannerGroup {...BannerMockProps2} />
    <style>{`body { margin : 0; font-family: Helvetica}`}</style>
  </>
);
