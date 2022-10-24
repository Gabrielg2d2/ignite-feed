import styles from './Avatar.module.css'

interface IAvatarProps {
  src: string
  alt: string
  variant?: 'primary' | 'secondary'
}

export function Avatar({
  src,
  alt,
  variant = 'primary'
}: IAvatarProps): JSX.Element {
  return (
    <img
      data-testid="image-avatar"
      className={variant === 'primary' ? styles.avatar : styles.avatarSecondary}
      src={src}
      alt={alt}
    />
  )
}
