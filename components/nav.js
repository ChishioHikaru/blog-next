import Link from 'next/link'

export default function Nav() {
  return (
    <ul>
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
    </ul>
  )
}
