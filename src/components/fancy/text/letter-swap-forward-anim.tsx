"use client"

import { useEffect, useState } from "react"
import { AnimationOptions, motion, stagger, useAnimate, useReducedMotion } from "motion/react"

interface TextProps {
  label: string
  reverse?: boolean
  transition?: AnimationOptions
  staggerDuration?: number
  staggerFrom?: "first" | "last" | "center" | number
  className?: string
  onClick?: () => void
}

/**
 * Returns true if the user has either the OS-level prefers-reduced-motion
 * set, or has toggled the accessibility panel's "Reduce motion" option.
 */
function useMotionDisabled() {
  const prefersReduced = useReducedMotion()
  const [classFlag, setClassFlag] = useState(false)
  useEffect(() => {
    const check = () =>
      setClassFlag(
        document.documentElement.classList.contains("a11y-reduce-motion"),
      )
    check()
    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    return () => observer.disconnect()
  }, [])
  return Boolean(prefersReduced) || classFlag
}

const LetterSwapForward = ({
  label,
  reverse = true,
  transition = {
    type: "spring",
    duration: 0.7,
  },
  staggerDuration = 0.03,
  staggerFrom = "first",
  className,
  onClick,
  ...props
}: TextProps) => {
  const [scope, animate] = useAnimate()
  const [blocked, setBlocked] = useState(false)
  const motionDisabled = useMotionDisabled()

  const hoverStart = () => {
    if (blocked) return
    // Skip the letter-swap entirely when reduced motion is requested —
    // the button still works, it just doesn't animate the label.
    if (motionDisabled) return

    setBlocked(true)

    // Function to merge user transition with stagger and delay
    const mergeTransition = (baseTransition: AnimationOptions) => ({
      ...baseTransition,
      delay: stagger(staggerDuration, {
        from: staggerFrom,
      }),
    })

    animate(
      ".letter",
      { y: reverse ? "100%" : "-100%" },
      mergeTransition(transition)
    ).then(() => {
      animate(
        ".letter",
        {
          y: 0,
        },
        {
          duration: 0,
        }
      ).then(() => {
        setBlocked(false)
      })
    })

    animate(
      ".letter-secondary",
      {
        top: "0%",
      },
      mergeTransition(transition)
    ).then(() => {
      animate(
        ".letter-secondary",
        {
          top: reverse ? "-100%" : "100%",
        },
        {
          duration: 0,
        }
      )
    })
  }

  return (
    <span
      className={`flex justify-center items-center relative overflow-hidden  ${className} `}
      onMouseEnter={hoverStart}
      onClick={onClick}
      ref={scope}
      {...props}
    >
      <span className="sr-only">{label}</span>

      {label.split("").map((letter: string, i: number) => {
        return (
          <span
            className="whitespace-pre relative flex"
            key={i}
            aria-hidden={true}
          >
            <motion.span className={`relative letter`} style={{ top: 0 }}>
              {letter}
            </motion.span>
            <motion.span
              className="absolute letter-secondary "
              style={{ top: reverse ? "-100%" : "100%" }}
            >
              {letter}
            </motion.span>
          </span>
        )
      })}
    </span>
  )
}

export default LetterSwapForward
