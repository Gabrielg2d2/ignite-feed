import { Trash } from 'phosphor-react'
import { timeFormatted } from '../../../../global/utils/timeFormatted'
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
          <time dateTime={time}>
            Cerca de{' '}
            {timeFormatted({
              biggestDate: new Date().toString(),
              smallestDate: time
            })}
          </time>
        </div>
        <button className={styles.buttonDelete}>
          <Trash size={24} />
        </button>
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  )
}
