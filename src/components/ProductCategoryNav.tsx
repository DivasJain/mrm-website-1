"use client"

import type React from "react"
import { useState } from "react"
import type { ProductCategory } from "@/data/enhanced-products"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

// Custom scrollbar hide utility
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`

interface ProductCategoryNavProps {
  activeCategory: ProductCategory
  onChange: (category: ProductCategory) => void
}

const categories: { key: ProductCategory; label: string; description: string; icon: string }[] = [
  { key: "plyandboards", label: "Ply and Boards", description: "Premium plywood and blockboards", icon: "🏗️" },
  { key: "laminateliners", label: "Laminate Liners", description: "Interior surface protection", icon: "🛡️" },
  { key: "laminates", label: "Laminates", description: "Designer surface solutions", icon: "✨" },
  { key: "louvers", label: "Louvers", description: "Architectural design elements", icon: "🏛️" },
  { key: "veneers", label: "Veneers", description: "Natural wood finishes", icon: "🌳" },
]

const ProductCategoryNav: React.FC<ProductCategoryNavProps> = ({ activeCategory, onChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  const handleCategoryChange = (category: ProductCategory) => {
    onChange(category)
    setIsMobileMenuOpen(false)

    // Smooth scroll to products section
    const productsSection = document.querySelector('[data-products-section]')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Hidden scrollbar styles */}
      <style jsx>{scrollbarHideStyles}</style>

      {/* Desktop Navigation */}
      <section className="hidden md:block py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-3">Product Categories</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto rounded-full"></div>
          </div>
          <div className="flex justify-between w-full gap-4">
            {categories.map((category) => (
              <Button
                key={category.key}
                onClick={() => handleCategoryChange(category.key)}
                variant={activeCategory === category.key ? "default" : "outline"}
                size="lg"
                className={`flex-1 h-auto py-6 px-6 font-semibold transition-all duration-200 text-center text-base rounded-xl ${
                  activeCategory === category.key
                    ? "bg-amber-600 text-white shadow-lg border-amber-600"
                    : "hover:bg-amber-50 hover:border-amber-200 text-gray-700 border-gray-200"
                }`}
                aria-label={`Switch to ${category.label} category`}
              >
                <span className="font-semibold whitespace-nowrap">{category.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMobileMenu} />
      )}

      {/* Mobile Slide-out Menu */}
      <div className={`fixed bottom-20 left-4 right-4 sm:left-6 sm:right-6 bg-white rounded-2xl shadow-2xl z-50 transition-all duration-300 transform ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      } max-h-[32rem] overflow-hidden`}>
        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-amber-50 to-orange-50">
          <h3 className="font-bold text-gray-800 text-center text-lg">Product Categories</h3>
          <div className="w-16 h-1 bg-amber-600 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="max-h-80 overflow-y-auto">
          {categories.map((category, index) => (
            <Button
              key={category.key}
              onClick={() => handleCategoryChange(category.key)}
              variant={activeCategory === category.key ? "primary" : "ghost"}
              className={`w-full py-6 px-6 h-auto text-left transition-all duration-200 flex items-center justify-between ${
                activeCategory === category.key
                  ? "bg-amber-600 text-white shadow-lg"
                  : "hover:bg-amber-50 text-gray-700"
              } ${index === 0 ? 'rounded-t-2xl' : ''} ${index === categories.length - 1 ? 'rounded-b-2xl' : ''}`}
              aria-label={`Switch to ${category.label} category`}
            >
              <div className="flex-1 min-w-0">
                <div className="font-bold text-lg mb-2 truncate">{category.label}</div>
                <div className="text-base leading-tight opacity-80">
                  {category.description}
                </div>
              </div>

              {activeCategory === category.key && (
                <div className="w-4 h-12 bg-white rounded-full flex-shrink-0" />
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-100">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between w-full">
          <div className="flex items-center space-x-4 min-w-0 flex-1">
            <div className="min-w-0 flex-1">
              <div className="font-bold text-gray-800 text-base truncate">Product Categories</div>
              <div className="text-base text-amber-600 font-semibold truncate">
                {categories.find(cat => cat.key === activeCategory)?.label}
              </div>
            </div>
          </div>

          <Button
            onClick={toggleMobileMenu}
            variant="ghost"
            size="icon"
            className="p-3 flex-shrink-0 hover:bg-amber-50"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </>
  )
}

export default ProductCategoryNav
