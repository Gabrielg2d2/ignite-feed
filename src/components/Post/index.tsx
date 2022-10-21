import { Avatar } from '../Avatar'

import styles from './Post.module.css'

interface IPostProps {
  avatar?: {
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

export function Post({
  avatar,
  username,
  userProfession,
  userSite,
  userHashtag,
  publicationDate,
  messagePost
}: IPostProps): JSX.Element {
  return (
    <article className={styles.post}>
      <header className={styles.postHeader}>
        <div className={styles.author}>
          <Avatar src={avatar?.src ?? '#'} alt={avatar?.alt ?? 'no avatar'} />

          <div className={styles.authorInfo}>
            <strong>{username}</strong>
            <span>{userProfession}</span>
          </div>
        </div>

        <time dateTime={publicationDate}>Publicado em {publicationDate}</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera &nbsp;👋</p>

        <p>{messagePost}</p>

        <p>
          👉&nbsp;<a href="#"> {userSite} </a>
        </p>

        <p className={styles.hashtag}>
          {userHashtag.map((hashtag) => (
            <a key={hashtag} href="#">
              {hashtag}
            </a>
          ))}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Comente aqui!" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}
