import styles from '../../Comment.module.css'

interface IContainerProps {
  id: string
  children: React.ReactNode
}

export function Container({ children, id }: IContainerProps): JSX.Element {
  return (
    <div id={id} className={styles.container}>
      {children}
    </div>
  )
}
