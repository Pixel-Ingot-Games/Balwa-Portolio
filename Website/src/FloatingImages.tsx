import { useEffect, useMemo, useRef, useState } from 'react'
import './FloatingImages.css'

type Sprite = {
  id: number
  img: HTMLImageElement
  x: number
  y: number
  vx: number
  vy: number
  size: number
}

async function discoverImages(): Promise<string[]> {
  try {
    const res = await fetch('/images/floating/manifest.json', { cache: 'no-store' })
    if (res.ok) {
      const files: string[] = await res.json()
      return files.map((f) => (f.startsWith('/') ? f : `/images/floating/${f}`))
    }
  } catch {}

  const candidates: string[] = []
  const exts = ['png', 'svg', 'webp', 'jpg', 'jpeg']
  for (let i = 1; i <= 20; i++) {
    for (const ext of exts) candidates.push(`/images/floating/${i}.${ext}`)
  }

  const checks = await Promise.all(
    candidates.map(
      (src) =>
        new Promise<string | null>((resolve) => {
          const img = new Image()
          img.onload = () => resolve(src)
          img.onerror = () => resolve(null)
          img.src = src
        })
    )
  )
  return checks.filter((s): s is string => Boolean(s))
}

export default function FloatingImages({ count = 10 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const [sources, setSources] = useState<string[] | null>(null)
  const [ready, setReady] = useState(false)
  const spritesRef = useRef<Sprite[]>([])

  useEffect(() => {
    let mounted = true
    discoverImages().then(async (paths) => {
      if (!mounted) return
      if (paths.length === 0) return
      // Preload
      const imgs = await Promise.all(
        paths.map(
          (src) =>
            new Promise<HTMLImageElement>((resolve) => {
              const img = new Image()
              img.onload = () => resolve(img)
              img.src = src
            })
        )
      )
      if (!mounted) return
      setSources(imgs.map((i) => i.src))
    })
    return () => {
      mounted = false
    }
  }, [])

  const pick = useMemo(() => {
    return (arr: string[]) => arr[Math.floor(Math.random() * arr.length)]
  }, [])

  useEffect(() => {
    if (!sources || sources.length === 0) return
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    ctxRef.current = ctx

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    onResize()
    window.addEventListener('resize', onResize)

    // Seed sprites
    const sprites: Sprite[] = []
    for (let i = 0; i < count; i++) {
      const src = pick(sources)
      const img = new Image()
      img.src = src
      const size = 60 + Math.random() * 90
      const speed = 10 + Math.random() * 30
      const angle = Math.random() * Math.PI * 2
      sprites.push({
        id: i,
        img,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * (speed / 60),
        vy: Math.sin(angle) * (speed / 60),
        size
      })
    }
    spritesRef.current = sprites
    setReady(true)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [sources, count, pick])

  useEffect(() => {
    if (!ready) return
    let raf = 0
    const step = () => {
      const ctx = ctxRef.current
      const canvas = canvasRef.current
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const sprites = spritesRef.current
      for (const s of sprites) {
        s.x += s.vx
        s.y += s.vy
        if (s.x < -s.size) s.x = canvas.width + s.size
        if (s.x > canvas.width + s.size) s.x = -s.size
        if (s.y < -s.size) s.y = canvas.height + s.size
        if (s.y > canvas.height + s.size) s.y = -s.size
        ctx.save()
        ctx.globalAlpha = 0.9
        ctx.translate(s.x, s.y)
        ctx.drawImage(s.img, -s.size / 2, -s.size / 2, s.size, s.size)
        ctx.restore()
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [ready])

  return <canvas className="floating-images" ref={canvasRef} aria-hidden />
}


