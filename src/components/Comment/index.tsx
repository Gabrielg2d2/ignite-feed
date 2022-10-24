import { ICommentProps } from '../../global/types/IPostProps'
import { Avatar } from '../Avatar'

import { ActionComment } from './components/ActionComment'
import { BodyComment } from './components/BodyComment'
import { Container } from './components/Container'

import styles from './Comment.module.css'

export function Comment({
  id,
  avatar,
  likes,
  message,
  time,
  username
}: ICommentProps): JSX.Element {
  return (
    <Container id={id}>
      <Avatar src={avatar.src} alt={avatar.alt} />

      <div className={styles.content}>
        <BodyComment username={username} time={time} message={message} />
        <ActionComment likes={likes} />
      </div>
    </Container>
  )
}
