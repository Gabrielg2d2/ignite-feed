import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { usePageHome } from './hook/usePageHome'

import styles from './Home.module.css'

export function PageHome(): JSX.Element {
  const { listPosts } = usePageHome()

  return (
    <div data-testid="page-home">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>{listPosts}</main>
      </div>
    </div>
  )
}
