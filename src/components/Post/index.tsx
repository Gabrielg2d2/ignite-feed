import { ChangeEvent, useState } from 'react'
import { IPostProps } from '../../global/types/IPostProps'
import { formatPublishDate } from '../../global/utils/formatPublishDate'
import { postNewComment } from '../../useCases/postNewComment'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import { handleCreateNewComment } from './functions/handleCreateNewComment'
import { searchCommentsByPostId } from './functions/searchCommentsByPostId'
import { usePost } from './hooks/usePost'

import styles from './Post.module.css'

export function Post({
  id = '',
  avatar,
  username,
  userProfession,
  userSite,
  userHashtag,
  publicationDate,
  messagePost
}: IPostProps): JSX.Element {
  const { comments, setComments } = usePost({ id })
  const [newComment, setNewComment] = useState('')

  function handleChangeNewComment(
    event: ChangeEvent<HTMLTextAreaElement>
  ): void {
    setNewComment(event.target.value)
  }

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

        <time dateTime={publicationDate}>
          Publicado em {formatPublishDate(publicationDate)}
        </time>
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
      <form
        aria-label="form comment"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={async (event) =>
          await handleCreateNewComment({
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
          })
        }
        className={styles.commentForm}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Comente aqui!"
          value={newComment}
          onChange={handleChangeNewComment}
        />
        <footer>
          {newComment && (
            <button data-testid="button_submit_form_comment" type="submit">
              Publicar
            </button>
          )}
        </footer>
      </form>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </article>
  )
}
