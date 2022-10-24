import { IPostProps } from '../../global/types/IPostProps'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

import styles from './Post.module.css'

export function Post({
  avatar,
  username,
  userProfession,
  userSite,
  userHashtag,
  publicationDate,
  messagePost,
  comments
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

      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </article>
  )
}
