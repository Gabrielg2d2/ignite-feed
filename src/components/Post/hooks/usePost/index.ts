import { useEffect, useState } from 'react'
import { ICommentProps } from '../../../../global/types/IPostProps'
import { searchCommentsByPostId } from '../../functions/searchCommentsByPostId'

interface IUsePostProps {
  id: string
}

interface IUsePostPropsReturn {
  comments: ICommentProps[]
  setComments: (comments: ICommentProps[]) => void
}

export function usePost({ id }: IUsePostProps): IUsePostPropsReturn {
  const [comments, setComments] = useState<ICommentProps[]>([])

  useEffect(() => {
    void (async () => {
      await searchCommentsByPostId({ id, setComments })
    })()
  }, [id])

  return { comments, setComments }
}
