import styles from '../../Comment.module.css'

interface IContainerProps {
  children: React.ReactNode
}

export function Container({
  children,
  ...props
}: IContainerProps): JSX.Element {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  )
}
