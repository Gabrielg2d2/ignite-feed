import { Dispatch } from 'react'
import { api } from '../../../service/api'
import { IPostProps } from '../../types/IPostProps'

interface IGetPosts {
  setPost: Dispatch<IPostProps[]>
  apiGet?: typeof api.get
}

export async function getPosts({
  setPost,
  apiGet = api.get
}: IGetPosts): Promise<void> {
  try {
    const response = await apiGet<IPostProps[]>('/posts')

    if (response.status === 200) {
      setPost(response.data)
    }
  } catch (error) {
    setPost([])
  }
}
