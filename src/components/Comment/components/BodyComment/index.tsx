import { Trash } from 'phosphor-react'
import styles from '../../Comment.module.css'

interface IBodyComment {
  username: string
  time: string
  message: string
}

export function BodyComment({
  username,
  time,
  message
}: IBodyComment): JSX.Element {
  return (
    <div className={styles.comment}>
      <div className={styles.author}>
        <div className={styles.user}>
          <strong>{username}</strong>
          <time dateTime={time}>{time}</time>
        </div>
        <Trash size={24} />
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  )
}
