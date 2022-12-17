import { IPostProps } from '../../../../global/types/IPostProps'
import { useGetPosts } from '../../../../useCases/getPosts'
import { Post } from '../../../../components/Post'

interface IUsePageHomeReturn {
  listPosts: JSX.Element[]
}

function listPostsRender(posts: IPostProps[]): JSX.Element[] {
  return posts.map((post) => <Post key={post.id} {...post} />)
}

export function usePageHome(): IUsePageHomeReturn {
  const { posts } = useGetPosts()
  const listPosts = listPostsRender(posts)
  return { listPosts }
}
