import Link from 'next/link'
import styles from 'styles/nav.module.scss'

export default function Nav() {
  return (
    <ul className={styles.list}>
      <li>
        <Link href="/">
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <span>About</span>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <span>Blog</span>
        </Link>
      </li>
      <li>
        <Link href="/three">
          <span>Practice</span>
        </Link>
      </li>
    </ul>
  )
}
