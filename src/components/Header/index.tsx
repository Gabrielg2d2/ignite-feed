import styles from './Header.module.css'
import igniteLogo from '../../assets/ignite-logo.svg'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo Ignite-lab" />
      <strong>Ignite Feed</strong>
    </header>
  )
}
