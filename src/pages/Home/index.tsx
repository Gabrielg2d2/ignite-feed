import { Header } from '../../components/Header'
import { Post } from '../../components/Post'
import { Sidebar } from '../../components/Sidebar'
import { IPostProps } from '../../global/types/IPostProps'
import { useGetPosts } from '../../useCases/getPosts/intex'

import styles from './Home.module.css'

function listPostsRender(posts: IPostProps[]): JSX.Element[] {
  return posts.map((post) => <Post key={post.id} {...post} />)
}

export function PageHome(): JSX.Element {
  const { posts } = useGetPosts()

  const listPosts = listPostsRender(posts)

  return (
    <div data-testid="page-home">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>{listPosts}</main>
      </div>
    </div>
  )
}
