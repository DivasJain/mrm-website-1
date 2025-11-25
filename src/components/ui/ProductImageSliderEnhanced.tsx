"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductImageSliderEnhancedProps {
  images?: string[]
  productName?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

const ProductImageSliderEnhanced: React.FC<ProductImageSliderEnhancedProps> = ({
  images = [],
  productName = "Product",
  autoPlay = false,
  autoPlayInterval = 5000,
}) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Default image if no images provided
  const defaultImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ]

  const displayImages = images.length > 0 ? images : defaultImages

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || displayImages.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % displayImages.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isAutoPlaying, displayImages.length, autoPlayInterval])

  // Navigation functions
  const goToPrevious = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + displayImages.length) % displayImages.length)
    setIsAutoPlaying(false)
  }, [displayImages.length])

  const goToNext = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % displayImages.length)
    setIsAutoPlaying(false)
  }, [displayImages.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentImage(index)
    setIsAutoPlaying(false)
  }, [])

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        goToNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToPrevious, goToNext])

  if (displayImages.length === 0) {
    return (
      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    )
  }

  return (
    <div className="relative group">
      {/* Main Image Container */}
      <div
        className="relative aspect-square overflow-hidden rounded-lg shadow-lg bg-gray-100"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(autoPlay)}
      >
        {/* Main Image */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {displayImages.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={image || "/placeholder.svg"}
                alt={`${productName} - Image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {displayImages.length > 1 && (
          <>
            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentImage + 1} / {displayImages.length}
        </div>

        {/* Auto-play indicator */}
        {isAutoPlaying && displayImages.length > 1 && (
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
            Auto-playing
          </div>
        )}
      </div>

      {/* Dot Indicators */}
      {displayImages.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                currentImage === index
                  ? "bg-amber-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Product Name */}
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600 font-medium">{productName}</p>
      </div>
    </div>
  )

  return (
    <div className="relative group">
      {/* Main Image Container */}
      <div
        className="relative aspect-square overflow-hidden rounded-lg shadow-lg bg-gray-100"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(autoPlay)}
      >
        {/* Main Image */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {displayImages.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={image || "/placeholder.svg"}
                alt={`${productName} - Image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {displayImages.length > 1 && (
          <>
            {/* Left Arrow */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentImage + 1} / {displayImages.length}
        </div>

        {/* Auto-play indicator */}
        {isAutoPlaying && displayImages.length > 1 && (
          <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
            Auto-playing
          </div>
        )}
      </div>

      {/* Dot Indicators */}
      {displayImages.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                currentImage === index
                  ? "bg-amber-600 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Product Name */}
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600 font-medium">{productName}</p>
      </div>
    </div>
  )
}

export default ProductImageSliderEnhanced