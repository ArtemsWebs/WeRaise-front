export const defaultNavigationItems = [
  {
    name: 'Инвесторам',
    link: '/investor',
    children: [
      {
        group: 'all Investment',
        links: [
          { name: 'US marketplace', link: 'куда то! там' },
          {
            name: 'Europe marketplace',
            link: 'ку!да то там',
          },
          { name: 'Partnerships', link: '!куда то там' },
        ],
      },
      {
        group: 'Institutional',
        links: [
          { name: 'Republic Capital', link: 'куда то! там' },
          {
            name: 'Republic Digital',
            link: 'ку!да то там',
          },
        ],
      },

      {
        group: 'More',
        links: [
          { name: 'Wallet', link: 'куда то! там' },
          {
            name: 'Mobile app',
            link: 'ку!да то там',
          },
          { name: 'Learning center', link: '!куда то там' },
        ],
      },
    ],
    key: 'invest',
  },
  {
    name: 'Предпринимателям',
    link: '/business',
    // children: [
    //   { name: 'Что то там!', link: 'куда то там!!' },
    //   {
    //     name: 'Что то там!',
    //     link: 'куда то там',
    //   },
    //   { name: 'Что то там', link: 'куда то !!' },
    // ],
    key: 'business',
  },
];

export const ROW_SIZE = 5;
