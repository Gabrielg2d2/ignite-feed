import styles from './Header.module.css'
import igniteLogo from '../../assets/ignite-logo.svg'

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo Ignite-lab" />
      <strong>Ignite Feed</strong>
    </header>
  )
}
