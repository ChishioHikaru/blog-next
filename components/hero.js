import styles from 'styles/hero.module.scss'

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        {imageOn && <figure>[画像]</figure>}
        {/* <div
        className="link_wrap"
        style={{ border: '1px solid #000', display: 'inline-block' }}
      >
        <span>通常のリンク</span>
        <br />
        <a href="about">ABOUT</a>
        <br />
        <a href="blog">BLOG</a>
      </div> */}
      </div>
    </div>
  )
}
