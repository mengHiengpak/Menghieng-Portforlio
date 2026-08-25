import { useEffect, useRef } from "react"
import { twMerge } from "tailwind-merge"

export function GlyphMatrix({
  glyphs = "01·•+*/<>=",
  cellSize = 14,
  mutationRate = 0.04,
  interval = 90,
  fadeBottom = 0.6,
  color = "#ffffff",
  className,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const canvas = document.createElement("canvas")
    container.appendChild(canvas)
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let rafId
    let timerId
    let cells = []
    let rows = 0
    let cols = 0

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { width, height } = container.getBoundingClientRect()
      if (width === 0 || height === 0) return

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      cols = Math.ceil(width / cellSize)
      rows = Math.ceil(height / cellSize)
      cells = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => ({ char: "", alpha: 0 }))
      )

      ctx.font = `${Math.max(9, Math.floor(cellSize * 0.72))}px monospace`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = color
    }

    const mutate = () => {
      const mutations = Math.max(1, Math.floor(rows * cols * mutationRate))
      for (let i = 0; i < mutations; i++) {
        const row = Math.floor(Math.random() * rows)
        const col = Math.floor(Math.random() * cols)
        const cell = cells[row]?.[col]
        if (!cell) continue
        cell.char = glyphs[Math.floor(Math.random() * glyphs.length)]
        cell.alpha = 1
      }
    }

    const draw = () => {
      const width = parseFloat(canvas.style.width)
      const height = parseFloat(canvas.style.height)
      ctx.clearRect(0, 0, width, height)

      const fadeStartRow = fadeBottom > 0 ? rows * (1 - fadeBottom) : rows

      for (let r = 0; r < rows; r++) {
        let fade = 1
        if (r >= fadeStartRow) {
          fade = 1 - (r - fadeStartRow) / Math.max(1, rows - fadeStartRow)
        }
        for (let c = 0; c < cols; c++) {
          const cell = cells[r][c]
          if (cell.alpha <= 0 || !cell.char) continue

          ctx.globalAlpha = cell.alpha * fade
          ctx.fillText(
            cell.char,
            c * cellSize + cellSize / 2,
            r * cellSize + cellSize / 2
          )
          cell.alpha -= 0.02
        }
      }
      ctx.globalAlpha = 1
      rafId = requestAnimationFrame(draw)
    }

    setup()
    timerId = setInterval(mutate, interval)
    rafId = requestAnimationFrame(draw)

    const observer = new ResizeObserver(setup)
    observer.observe(container)

    return () => {
      cancelAnimationFrame(rafId)
      clearInterval(timerId)
      observer.disconnect()
      canvas.remove()
    }
  }, [glyphs, cellSize, mutationRate, interval, fadeBottom, color])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={twMerge("h-full w-full overflow-hidden", className)}
    />
  )
}
