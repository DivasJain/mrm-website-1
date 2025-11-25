"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ResponsiveSectionProps {
  children: ReactNode
  className?: string
  background?: "default" | "muted" | "primary"
  padding?: "sm" | "md" | "lg" | "xl"
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
}

export function ResponsiveSection({
  children,
  className,
  background = "default",
  padding = "lg",
  maxWidth = "full",
}: ResponsiveSectionProps) {
  const backgroundClass = {
    default: "",
    muted: "bg-muted/30",
    primary: "bg-primary text-primary-foreground",
  }[background]

  const paddingClass = {
    sm: "py-8 sm:py-12",
    md: "py-12 sm:py-16",
    lg: "py-16 sm:py-20",
    xl: "py-20 sm:py-24",
  }[padding]

  const maxWidthClass = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    "2xl": "max-w-8xl",
    full: "",
  }[maxWidth]

  return (
    <section className={cn(paddingClass, backgroundClass, className)}>
      <div className={cn("container mx-auto container-padding", maxWidthClass)}>{children}</div>
    </section>
  )
}
