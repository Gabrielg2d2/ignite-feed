import styles from './Avatar.module.css'

interface IAvatarProps {
  src: string
  alt: string
}

export function Avatar({ src, alt }: IAvatarProps): JSX.Element {
  return (
    <img
      data-testid="image-avatar"
      className={styles.avatar}
      src={src}
      alt={alt}
    />
  )
}
