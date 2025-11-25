"use client"

import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface EnhancedCardProps {
  title?: string
  children: ReactNode
  className?: string
  hover?: boolean
  animation?: "fade" | "slide-up" | "scale" | "bounce"
  delay?: number
}

export function EnhancedCard({
  title,
  children,
  className,
  hover = true,
  animation = "fade",
  delay = 0,
}: EnhancedCardProps) {
  const animationClass = {
    fade: "animate-fade-in",
    "slide-up": "animate-fade-in-up",
    scale: "animate-scale-in",
    bounce: "animate-bounce-in",
  }[animation]

  const delayClass = delay > 0 ? `animate-stagger-${Math.min(delay, 6)}` : ""

  return (
    <Card className={cn("opacity-0", animationClass, delayClass, hover && "hover-lift", className)}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  )
}
