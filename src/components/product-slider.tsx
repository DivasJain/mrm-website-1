"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: number
  name: string
  description: string
  image: string
  category: string
}

interface ProductSliderProps {
  products: Product[]
}

export function ProductSlider({ products }: ProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying, products.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === products.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  const getVisibleProducts = () => {
    const visibleCount = 3
    const result = []

    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % products.length
      result.push(products[index])
    }

    return result
  }

  return (
    <div className="relative w-full">
      {/* Desktop View - 3 cards */}
      <div className="hidden md:block">
        <div className="grid grid-cols-3 gap-6">
          {getVisibleProducts().map((product, index) => (
            <Card
              key={`${product.id}-${currentIndex}-${index}`}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                index === 1 ? "scale-105 shadow-lg" : "scale-100"
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-primary font-medium mb-2">{product.category}</div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{product.description}</p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mobile View - 1 card */}
      <div className="md:hidden">
        <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
          <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
            <img
              src={products[currentIndex].image || "/placeholder.svg"}
              alt={products[currentIndex].name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <CardContent className="p-6">
            <div className="text-sm text-primary font-medium mb-2">{products[currentIndex].category}</div>
            <h3 className="text-xl font-semibold mb-2">{products[currentIndex].name}</h3>
            <p className="text-muted-foreground mb-4 text-pretty">{products[currentIndex].description}</p>
            <Button
              variant="outline"
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 bg-transparent"
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
        onClick={goToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
