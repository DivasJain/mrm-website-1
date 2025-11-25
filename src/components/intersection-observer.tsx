"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface IntersectionObserverProps {
  children: ReactNode
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  className?: string
}

export function IntersectionObserver({
  children,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
  className = "",
}: IntersectionObserverProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, triggerOnce])

  return (
    <div ref={elementRef} className={`${className} ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
      {children}
    </div>
  )
}
