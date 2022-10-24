export interface ICommentProps {
  id: string
  avatar: {
    src: string
    alt: string
  }
  username: string
  time: string
  message: string
  likes: number
}

export interface IPostProps {
  id: string
  avatar: {
    src: string
    alt: string
  }
  username: string
  userProfession: string
  userSite: string
  userHashtag: string[]
  publicationDate: string
  messagePost: string
  comments: ICommentProps[]
}
