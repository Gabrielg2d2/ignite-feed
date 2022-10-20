import { useState } from 'react'
import { Header } from '../../components/Header'
import { Post } from '../../components/Post'
import { Sidebar } from '../../components/Sidebar'
import { IPostProps } from '../../global/types/IPostProps'

import styles from './Home.module.css'

import { mockPosts } from '../../mocks/Posts'

export function PageHome(): JSX.Element {
  const [posts] = useState<IPostProps[]>(mockPosts)

  const listPosts = posts.map((post) => (
    <Post
      key={post.id}
      avatar={post.avatar}
      username={post.username}
      userProfession={post.userProfession}
      userSite={post.userSite}
      userHashtag={post.userHashtag}
      publicationDate={post.publicationDate}
      messagePost={post.messagePost}
    />
  ))

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
