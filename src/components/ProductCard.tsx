import type React from "react"
import type { Product } from "@/data/enhanced-products"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const primaryImage =
    product.productImages?.[0] ||
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={primaryImage || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.warranty && (
          <div className="absolute top-3 left-3">
            <span className="bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
              {product.warranty}
            </span>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
        {product.description && <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>}
        {product.tags && product.tags.length > 0 && (
          <div className="flex gap-1 flex-wrap mb-3">
            {product.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
        <button className="text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors duration-200">
          View Details →
        </button>
      </CardContent>
    </Card>
  )
}

export default ProductCard
