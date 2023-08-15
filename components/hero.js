export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div>
      <h1 style={{ color: 'red', fontSize: '80px' }}>{title}</h1>
      <p>{subtitle}</p>
      {imageOn && <figure>[画像]</figure>}
      <div
        className="link_wrap"
        style={{ border: '1px solid #000', display: 'inline-block' }}
      >
        <span>普通のリンク</span>
        <br />

        <a href="/">HOME</a>
        <br />
        <a href="about">ABOUT</a>
        <br />
        <a href="blog">BLOG</a>
      </div>
    </div>
  )
}
