import { useEffect, useMemo, useState } from 'react'
import './BackgroundObg.css'

type Obg = { src: string; top: number; left: number; rotate: number; scale: number }

const SOURCES = [
  '/images/obg/1.png',
  '/images/obg/2.png',
  '/images/obg/3.png',
  '/images/obg/4.png',
  '/images/obg/5.png',
  '/images/obg/6.png',
  '/images/obg/7.png',
]

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export default function BackgroundObg() {
  const [objs, setObjs] = useState<Obg[]>([])

  const generate = useMemo(() => () => {
    const positions: { top: number; left: number }[] = []
    const corners = [
      { topBase: 8, leftBase: 8 },      // top-left
      { topBase: 8, leftBase: 92 },     // top-right
      { topBase: 92, leftBase: 8 },     // bottom-left
      { topBase: 92, leftBase: 92 },    // bottom-right
    ]
    const jitter = 4
    for (let i = 0; i < SOURCES.length; i++) {
      const c = corners[i % corners.length]
      let attempt = 0
      let placed = { top: 0, left: 0 }
      const minDist = 18 // percent distance threshold to avoid clustering
      while (attempt < 20) {
        const top = c.topBase + randomBetween(-jitter, jitter)
        const left = c.leftBase + randomBetween(-jitter, jitter)
        const ok = positions.every(p => Math.hypot(p.top - top, p.left - left) >= minDist)
        if (ok) { placed = { top, left }; break }
        attempt++
      }
      positions.push(placed)
    }

    return positions.map((p, i) => ({
      src: SOURCES[i],
      top: Math.min(94, Math.max(6, p.top)),
      left: Math.min(94, Math.max(6, p.left)),
      rotate: randomBetween(-25, 25),
      scale: randomBetween(1, 3),
    }))
  }, [])

  useEffect(() => {
    setObjs(generate())
    const onResize = () => setObjs(generate())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [generate])

  return (
    <div className="obg-root" aria-hidden>
      {objs.map((o, idx) => (
        <img
          key={idx}
          src={o.src}
          className="obg-item"
          style={{ top: `${o.top}%`, left: `${o.left}%`, transform: `translate(-50%, -50%) rotate(${o.rotate}deg) scale(${o.scale})` }}
          alt=""
        />)
      )}
    </div>
  )
}


