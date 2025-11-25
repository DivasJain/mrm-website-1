"use client"

import type React from "react"
import { useState } from "react"

interface ProductImageSliderProps {
  images?: string[]
}

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({ images = [] }) => {
  const [currentImage, setCurrentImage] = useState(0)

  // Default image if no images provided
  const defaultImages = [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ]

  const displayImages = images.length > 0 ? images : defaultImages

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
        <img
          src={displayImages[currentImage] || "/placeholder.svg"}
          alt="Product"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Thumbnail Navigation */}
      {displayImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                currentImage === index ? "border-amber-600" : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductImageSlider
