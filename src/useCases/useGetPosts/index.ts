import { useEffect, useState } from 'react'
import { IPostProps } from '../../global/types/IPostProps'
import { getPosts } from '../getPosts'

interface IUserGetPosts {
  posts: IPostProps[]
}

export function useGetPosts(): IUserGetPosts {
  const [posts, setPost] = useState<IPostProps[]>([])

  useEffect(() => {
    void (async () => await getPosts({ setPost }))()
  }, [])

  return { posts }
}
