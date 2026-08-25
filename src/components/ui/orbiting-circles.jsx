import React from "react"

import { twMerge } from "tailwind-merge"

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 48,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index
        return (
          <div
            style={
              {
                "--duration": calculatedDuration,
                "--radius": radius,
                "--angle": angle,
                "--icon-size": `${iconSize}px`,
                ...(reverse ? { animationDirection: "reverse" } : {}),
              }
            }
            className={twMerge(
              `animate-orbit absolute [left:50%] [top:50%] size-(--icon-size) [margin-left:calc(-1*var(--icon-size)/2)] [margin-top:calc(-1*var(--icon-size)/2)] transform-gpu flex items-center justify-center rounded-full`,
              className
            )}
            {...props}
          >
            {child}
          </div>
        )
      })}
    </>
  )
}
