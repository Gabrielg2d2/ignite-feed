import { FormEvent } from 'react'
import { ICommentProps } from '../../../../global/types/IPostProps'
import { IPostNewComment } from '../../../../useCases/postNewComment'
import { INewCommentProps } from '../searchCommentsByPostId'

interface IHandleCreateNewCommentProps {
  event: FormEvent<HTMLFormElement>
  id: string
  avatar?: {
    src: string
    alt: string
  }
  username: string
  publicationDate: string
  setComments: (comments: ICommentProps[]) => void
  postNewComment: ({ newComment }: IPostNewComment) => Promise<number>
  searchCommentsByPostId: ({
    id,
    setComments
  }: INewCommentProps) => Promise<void>
  newComment: string
  setNewComment: (newComment: string) => void
}

export const handleCreateNewComment = async ({
  event,
  id,
  avatar,
  username,
  publicationDate,
  setComments,
  postNewComment,
  searchCommentsByPostId,
  newComment,
  setNewComment
}: IHandleCreateNewCommentProps): Promise<void> => {
  event.preventDefault()

  const newObjComment = {
    idpost: id,
    avatar,
    username,
    time: publicationDate,
    message: newComment,
    likes: 0
  }

  const responseStatus = await postNewComment({ newComment: newObjComment })

  if (responseStatus === 201) {
    setNewComment('')
    return await searchCommentsByPostId({ id, setComments })
  }
}
