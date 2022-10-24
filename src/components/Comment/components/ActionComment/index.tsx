import { ThumbsUp } from 'phosphor-react'
import styles from '../../Comment.module.css'

interface IActionComment {
  likes: number
}

export function ActionComment({ likes }: IActionComment): JSX.Element {
  return (
    <div className={styles.actions}>
      <ThumbsUp size={20} />
      <span>Aplaudir - {likes}</span>
    </div>
  )
}
