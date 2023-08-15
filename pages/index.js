// function EachPost(props) {
//   return (
//     <article>
//       <a href={props.url}>
//         <h3>{props.title}</h3>
//       </a>
//     </article>
//   );
// }

// function Decoration(props) {
//   return <div style={{ color: "red" }}>{props.children}</div>;
// }

// export default function Posts() {
//   return (
//     <Decoration>
//       <h2>おすすめの記事</h2>
//       <EachPost title="スケジュール管理と猫の理論" url="/blog/schedule" />
//       <EachPost title="音楽が呼び起こす美味しいもの記憶" url="/blog/music" />
//     </Decoration>
//   );
// }

import Hero from 'components/hero'

export default function Home() {
  return <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
}
