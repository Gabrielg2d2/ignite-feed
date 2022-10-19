import { Pencil } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar(): JSX.Element {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"
        alt="background image cover sidebar"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/101529710?v=4"
          alt="user avatar"
        />

        <strong>John Constantine</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <Pencil size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  )
}
