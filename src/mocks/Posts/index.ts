export const mockPosts = [
  {
    id: '1',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/101529710?v=4',
      alt: 'Avatar do usuário'
    },
    username: 'Lucas Santos',
    userProfession: 'Desenvolvedor Front-end',
    userSite: 'www.lucassantos.dev',
    userHashtag: ['#react', '#typescript', '#nextjs'],
    publicationDate: '2021-08-01T00:00:00.000Z',
    messagePost:
      'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
    comments: [
      {
        id: '1',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/101529710?v=4',
          alt: 'Avatar do usuário'
        },
        username: 'Laura Santos',
        time: '2021-08-01T00:00:00.000Z',
        message: 'Muito bom, parabéns!',
        likes: 3
      },
      {
        id: '2',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/101529710?v=4',
          alt: 'Avatar do usuário'
        },
        username: 'Marcelo Mota',
        time: '2021-08-01T00:00:00.000Z',
        message: 'Muito bom, parabéns!',
        likes: 0
      }
    ]
  },
  {
    id: '2',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/101529710?v=4',
      alt: 'Avatar do usuário'
    },
    username: 'Maria Silva',
    userProfession: 'Desenvolvedor Back-end',
    userSite: 'www.mariasilva.dev',
    userHashtag: ['#nodejs', '#typescript', '#C#'],
    publicationDate: '2021-08-01T00:00:00.000Z',
    messagePost:
      'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀Portfólio finalmente pronto 🚀',
    comments: []
  }
]
