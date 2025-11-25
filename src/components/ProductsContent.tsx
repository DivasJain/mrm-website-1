import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { productsData, type ProductCategory } from "@/data/enhanced-products"
import ProductCategoryNav from "@/components/ProductCategoryNav"
import { slugify } from "@/lib/products"

interface ProductsContentProps {
  category?: ProductCategory
}

const ProductsContent = ({ category }: ProductsContentProps) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(category || "plyandboards")
  const [thicknessFilter, setThicknessFilter] = useState<string>("all")
  const [warrantyFilter, setWarrantyFilter] = useState<string>("all")
  const [finishFilter, setFinishFilter] = useState<string>("all")

  const products = productsData[selectedCategory]

  useEffect(() => {
    setThicknessFilter("all")
    setWarrantyFilter("all")
    setFinishFilter("all")
  }, [selectedCategory])

  const getFilterOptions = () => {
    const thicknesses = new Set<string>()
    const warranties = new Set<string>()
    const finishes = new Set<string>()

    products.forEach((product) => {
      product.thicknessOptions?.forEach((thickness) => thicknesses.add(`${thickness}mm`))
      if (product.warranty) warranties.add(product.warranty)
      if (product.specifications?.finish) finishes.add(product.specifications.finish)
    })

    return {
      thicknesses: Array.from(thicknesses).sort(),
      warranties: Array.from(warranties),
      finishes: Array.from(finishes),
    }
  }

  const filterOptions = getFilterOptions()

  const filteredProducts = products.filter((product) => {
    if (thicknessFilter !== "all" && !product.thicknessOptions?.some((t) => `${t}mm` === thicknessFilter)) {
      return false
    }
    if (warrantyFilter !== "all" && product.warranty !== warrantyFilter) {
      return false
    }
    if (finishFilter !== "all" && product.specifications?.finish !== finishFilter) {
      return false
    }
    return true
  })

  return (
    <div className="space-y-8" data-products-section>
      {/* Category Navigation - only show if no specific category */}
      {!category && <ProductCategoryNav activeCategory={selectedCategory} onChange={setSelectedCategory} />}

      {category && (
        <div className="bg-muted/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Filter Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Thickness Filter */}
            {filterOptions.thicknesses.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Thickness</label>
                <Select value={thicknessFilter} onValueChange={setThicknessFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Thicknesses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Thicknesses</SelectItem>
                    {filterOptions.thicknesses.map((thickness) => (
                      <SelectItem key={thickness} value={thickness}>
                        {thickness}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Warranty Filter */}
            {filterOptions.warranties.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Warranty</label>
                <Select value={warrantyFilter} onValueChange={setWarrantyFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Warranties" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Warranties</SelectItem>
                    {filterOptions.warranties.map((warranty) => (
                      <SelectItem key={warranty} value={warranty}>
                        {warranty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Finish Filter */}
            {filterOptions.finishes.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Finish</label>
                <Select value={finishFilter} onValueChange={setFinishFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Finishes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Finishes</SelectItem>
                    {filterOptions.finishes.map((finish) => (
                      <SelectItem key={finish} value={finish}>
                        {finish}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredProducts.map((product, index) => (
          <Link
            key={index}
            to={`/products/${category || selectedCategory}/${slugify(product.name)}`}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col">
              {/* Image Section */}
              <div className="relative w-full overflow-hidden bg-white flex items-center justify-center p-1">
                {/* ✅ Always pull directly from /assets */}
                {(() => {
                  const primaryImg = product.image?.startsWith("/")
                    ? product.image
                    : `/assets/${product.image || "placeholder.svg"}`

                  return (
                    <img
                      src={primaryImg}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  )
                })()}

              </div>

              <CardContent className="p-3 pt-2 flex-1 flex flex-col">
                {/* Main content container */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-2 leading-tight">{product.name}</h3>
                  <p className="text-muted-foreground mb-2.5 text-sm text-pretty leading-relaxed line-clamp-3">{product.description}</p>

                  <div className="space-y-1 mb-2.5">
                    {product.thicknessOptions && (
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Thickness:</span> {product.thicknessOptions.join(", ")}mm
                      </div>
                    )}
                    {product.specifications?.finish && (
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Finish:</span> {product.specifications.finish}
                      </div>
                    )}
                  </div>

                  {product.warranty && (
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {product.warranty}
                    </Badge>
                  )}

                  {product.tags && (
                    <div className="flex flex-wrap gap-1 mb-2.5">
                      {product.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs px-2 py-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Button container - pushed to bottom */}
                <div className="mt-auto">
                  <span className="text-primary font-semibold text-sm group-hover:text-primary/80 transition-colors">
                    View Details →
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No products match your current filters.</p>
          <Button
            variant="link"
            onClick={() => {
              setThicknessFilter("all")
              setWarrantyFilter("all")
              setFinishFilter("all")
            }}
            className="mt-4"
          >
            Clear all filters
          </Button>
        </div>
      )}

      {/* Category Info */}
      <div className="bg-muted/30 rounded-xl p-6">
        <h3 className="text-xl font-bold text-foreground mb-3">
          About {(category || selectedCategory).charAt(0).toUpperCase() + (category || selectedCategory).slice(1)}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{getCategoryDescription(category || selectedCategory)}</p>
      </div>
    </div>
  )
}

function getCategoryDescription(category: ProductCategory): string {
  const descriptions = {
    plyandboards:
      "Our premium plywood and blockboards range offers exceptional durability and versatility for all construction and furniture applications. From BWP grade plywood for exterior use to MR grade for interior applications, and high-strength blockboards for superior stability, we provide solutions for every need.",
    laminateliners:
      "MRM Laminate Liners made from kraft paper for wardrobes, cabinets & drawers. 8x4 ft sheets in 0.7mm & 0.8mm thickness. Available at M Cube Spaces and our Experience Center.",
    laminates:
      "Designer laminates that transform ordinary surfaces into extraordinary spaces. Available in woodgrain, stone, and solid color finishes to match any design aesthetic and functional requirement.",
    louvers:
      "Elegant architectural louvers that combine functionality with aesthetic appeal. Perfect for feature walls, ceiling designs, and ventilation applications in modern interiors.",
    veneers:
      "Premium natural wood veneers that bring the beauty of real wood to your projects. Carefully selected and processed to maintain the natural grain patterns and characteristics of each wood species.",
  }
  return descriptions[category]
}

export default ProductsContent
