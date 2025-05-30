const projectsShort = [
  {
    id: 1,
    imageId: 1,
    image:
      'https://i.pinimg.com/originals/f0/be/01/f0be01db22cdbcc42b7a9774078ee73c.jpg',
    investment: 85434958,
    investors: 109631,
  },
  {
    id: 2,
    imageId: 2,
    image:
      'https://i.pinimg.com/originals/03/9a/68/039a685c96013f06984175f109db5290.jpg',
    investment: 22336001,
    investors: 78452,
    coinvester: {
      name: 'BlackPink',
      image:
        'data:image/jpeg;base64,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',
    },
  },
  {
    id: 3,
    imageId: 3,
    image:
      'https://i.pinimg.com/originals/01/0b/ea/010bea143ec7fd49f8d2a1170f008d3e.jpg',
    investment: 85434958,
    investors: 109631,
  },
  {
    id: 4,
    imageId: 4,
    image:
      'https://i.pinimg.com/originals/22/2f/e7/222fe7ea231f4a6f8e3f54c68a5608df.jpg',
    investment: 22336001,
    investors: 78452,
    coinvester: {
      name: 'G-IDLE',
      image:
        'data:image/png;base64,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',
    },
  },
  {
    id: 5,
    imageId: 5,
    image:
      'https://i.pinimg.com/originals/f6/93/1f/f6931f075c39a7aefcef8da536223837.jpg',
    investment: 85434958,
    investors: 109631,
  },
  {
    id: 6,
    imageId: 6,
    image:
      'https://go.zvuk.com/imgs/2023/04/17/08/5875303/89eebd61da6ba9adff572f39785be78b6c044751.jpg',
    investment: 22336001,
    investors: 78452,
    coinvester: {
      name: 'Le Serafim',
      image:
        'https://i.pinimg.com/736x/05/fe/63/05fe63e7bfb177de61e7fef3ff1783ba.jpg',
    },
  },
  {
    id: 7,
    imageId: 7,
    image:
      'https://i.pinimg.com/736x/24/9e/6f/249e6f3d30c501d5595a3fa7c26f3838.jpg',
    investment: 85434958,
    investors: 109631,
  },
  {
    id: 8,
    imageId: 8,
    image: 'https://i.ytimg.com/vi/mAnszPMGH2g/maxresdefault.jpg',
    investment: 22336001,
    investors: 78452,
  },
];

// export type ProjectSliderItem = {
//   projectImageId: number;
//   status: 'trending' | 'new' | 'ending' | 'rising';
//   description: string;
//   name: string;
//   valuation: string;
//   investorsCount: number;
//    investment: 85434958,
//   tags: ProjectCardTag[];
//   owner: {
//     name: string;
//     imageId: string;
//     bio: string;
//   };
// };

const projects = [
  {
    uuid: '1',
    projectImageId: 9,
    status: 'trending',
    description:
      'Инновационные идеи в секс индустри. Интеграция NFT в скидочную систему клуба. Использования криптовалюты для оплаты услуг.',
    name: 'VelvetVerse',
    coinvesterInfo:
      'При поддержке 34 млн ₽ от фонда основателей ведущих венчурных капиталистов LuxureEbka, Dirty D*ck; под руководством экспертов из Стэнфорда, UCSF, Duke',
    valuation: 85434958 * 2,
    investment: 85434958,
    tags: ['SEX', 'AI'],
    owner: {
      name: 'Лерой Чеобатто де Дубна Дженкинс',
      imageId: 10,
      bio:
        'Лерой Чеобатто де Дубна Дженкинс — предприниматель, визионер и основатель инновационного стартапа в сфере развлечений для взрослых.\n' +
        '\n' +
        'С богатым опытом в управлении элитными развлекательными проектами и глубоким пониманием рынка luxury-досуга, Лерой объединяет классический формат стрип-клуба с цифровыми технологиями, персонализированным сервисом и высоким уровнем клиентского опыта.\n' +
        '\n' +
        'Его стартап предлагает принципиально новый подход к индустрии ночных развлечений: эксклюзивные локации, интеграция NFT-членства, онлайн-платформа для бронирования шоу и прямые трансляции с возможностью взаимодействия с артистами — всё это создаёт уникальную экосистему для современного потребителя.',
    },
    investorsCount: 109631,
  },
  {
    uuid: '2',
    projectImageId: 11,
    name: 'CinemaNova',
    status: 'trending',
    description: 'Свежий взгляд на кинематограф',
    valuation: 85434958 * 3,
    investment: 85434958,
    coinvesterInfo:
      'При поддержке 28 млн ₽ от фонда основателей ведущих венчурных капиталистов Lux Capital; под руководством экспертов из Стэнфорда, UCSF, Duke',
    tags: ['CINEMA', 'ENTERPRISE'],
    owner: {
      name: 'Джорджо Папояни',
      imageId: 12,
      bio: 'Джорджо Папояни — молодой, талантливый режиссёр с глобальным видением и уникальным авторским голосом, стремящийся изменить современный кинематограф. Инвестируя в Джоджо Папояни, вы поддерживаете не просто талантливого режиссёра, а нового лидера мирового кинематографа — того, кто своими историями сможет тронуть миллионы и принести достойную прибыль при правильной поддержке.',
    },
    investorsCount: 109631,
  },
  {
    uuid: '3',
    projectImageId: 13,
    status: 'new',
    name: 'TolikScreener',
    valuation: 50000000 * 2,
    coinvesterInfo:
      'При поддержке $28 млн от фонда основателей ведущих венчурных капиталистов Lux Capital; под руководством экспертов из Стэнфорда, UCSF, Duke',
    description: 'Интеллектуальная система защиты данных на основе ИИ',
    investment: 50000000,
    tags: ['CYBERSECURITY', 'AI'],
    owner: {
      name: 'Антон Толик',
      imageId: 14,
      bio: 'Талантливый специалист по кибербезопасности. Разрабатывает сканер уязвимостей нового поколения с интеграцией искусственного интеллекта и поведенческого анализа. Решение для защиты бизнеса от современных киберугроз.',
    },
    investorsCount: 78432,
  },
  {
    uuid: '5',
    projectImageId: 15,
    status: 'rising',
    coinvesterInfo:
      'При поддержке $28 млн от фонда основателей ведущих венчурных капиталистов Lux Capital; под руководством экспертов из Стэнфорда, UCSF, Duke',
    description:
      'Персонализированная платформа для психического здоровья на основе ИИ',
    valuation: 25000000 * 4,
    investment: 25000000,
    tags: ['HEALTHTECH', 'AI'],
    owner: {
      name: 'Ева Сарнофф',
      imageId: 16,
      bio: 'Нейропсихолог и основательница NeuroMind. Разрабатывает платформу, которая использует машинное обучение для диагностики и сопровождения пользователей с проблемами психического здоровья. Проект с социальной миссией и коммерческим потенциалом.',
    },
    investorsCount: 45123,
  },
  {
    uuid: '7',
    projectImageId: 17,
    status: 'innovative',
    coinvesterInfo:
      'При поддержке $28 млн от фонда основателей ведущих венчурных капиталистов Lux Capital; под руководством экспертов из Стэнфорда, UCSF, Duke',
    description: 'Персонализированное лечение на основе генетического анализа',
    investment: 90000000,
    valuation: 90000000 * 5,
    tags: ['HEALTHTECH', 'GENETICS'],
    owner: {
      name: 'Данил Крыжнев',
      imageId: 18,
      bio: 'Молекулярный биолог и предприниматель. Основатель GenoTech — платформы, которая создаёт индивидуальные курсы лечения на основе генетических данных пациента. Первые клинические тесты показали эффективность выше 90%.',
    },
    investorsCount: 102345,
  },
  {
    uuid: '8',
    projectImageId: 19,
    status: 'sustainable',
    coinvesterInfo:
      'При поддержке $28 млн от фонда основателей ведущих венчурных капиталистов Lux Capital; под руководством экспертов из Стэнфорда, UCSF, Duke',
    description: 'Устойчивое городское сельское хозяйство будущего',
    investment: 40000000,
    valuation: 40000000 * 3,
    tags: ['AGRITECH', 'SUSTAINABLE'],
    owner: {
      name: 'Арина Белозёрова',
      imageId: 20,
      bio: 'Эко-технолог и инженер. Разрабатывает модульные вертикальные фермы для городской среды. Использует AI-контроль микроклимата и водосберегающие технологии. Проект масштабируется под потребности крупных мегаполисов.',
    },
    investorsCount: 67890,
  },
];

export const getShortProjects = () => {
  return projectsShort;
};

export const getProjects = () => {
  return projects;
};
