import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { config, useSpring, animated } from '@react-spring/three'

function Box(props) {
  const ref = useRef()

  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)

  useFrame(() => (ref.current.rotation.x += 0.01))

  const { scale } = useSpring({
    scale: clicked ? 2 : 1,
    config: config.wobbly,
    duration: 300,
  })

  return (
    <animated.mesh
      {...props}
      ref={ref}
      scale={scale}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => {
        setHovered(true)
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        setHovered(false)
        if (clicked) setClicked(false)
        document.body.style.cursor = ''
      }}
      receiveShadow={true}
      castShadow={true}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </animated.mesh>
  )
}

function App() {
  return (
    <>
      <h1>Three.js アニメーション</h1>
      <p>マウスでホバーしたりクリックしたりしてみてください。</p>
      <div id="canvas-container">
        <Canvas>
          <Box position={[-1.6, 0, 0]} />
          <Box position={[1.6, 0, 0]} />
          <ambientLight intensity={3.5} />
        </Canvas>
      </div>
    </>
  )
}

export default App
