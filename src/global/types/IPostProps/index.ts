export interface IPostProps {
  id: number
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
}
