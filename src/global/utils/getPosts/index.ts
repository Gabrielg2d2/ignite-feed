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
}: IGetPosts): Promise<IPostProps[] | undefined> {
  try {
    const response = await apiGet<IPostProps[]>('/posts')

    const data = response.data ?? []

    if (response.status === 200) {
      setPost(data)
    }

    return data
  } catch (error) {
    setPost([])
  }
}
