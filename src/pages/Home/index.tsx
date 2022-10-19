import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import styles from './Home.module.css'

export function PageHome(): JSX.Element {
  return (
    <div data-testid="page-home">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, aliquam error aperiam, fugiat quos, commodi
            necessitatibus eligendi odit tempore reiciendis illo unde magnam
            adipisci? Modi qui recusandae id tenetur inventore.
          </div>

          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, aliquam error aperiam, fugiat quos, commodi
            necessitatibus eligendi odit tempore reiciendis illo unde magnam
            adipisci? Modi qui recusandae id tenetur inventore.
          </div>
        </main>
      </div>
    </div>
  )
}
