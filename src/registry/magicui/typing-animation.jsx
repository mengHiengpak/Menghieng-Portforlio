import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

export function TypingAnimation({
  children,
  className,
  duration = 100,
  as: Component = "h1",
}) {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    const startTime = window.performance.now()

    const animateText = (currentTime) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(
        elapsedTime / (duration * children.length),
        1
      )
      setDisplayedText(
        children.slice(0, Math.floor(progress * children.length))
      )
      if (progress < 1) {
        window.requestAnimationFrame(animateText)
      }
    }

    window.requestAnimationFrame(animateText)
  }, [children, duration])

  return (
    <Component
      className={twMerge(
        "text-4xl font-bold tracking-[-0.02em]",
        className
      )}
    >
      {displayedText}
    </Component>
  )
}
