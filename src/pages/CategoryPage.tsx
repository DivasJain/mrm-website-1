import { useParams } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductsContent from "@/components/ProductsContent"
import { productsData, type ProductCategory } from "@/data/enhanced-products"

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>()

  // Validate category
  if (!slug || !Object.keys(productsData).includes(slug)) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <p className="text-muted-foreground">The requested product category does not exist.</p>
        </div>
        <Footer />
      </div>
    )
  }

  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1)

  function getCategoryDescription(category: ProductCategory): string {
    const descriptions = {
      plyandboards: "Premium plywood and blockboards for construction and furniture applications",
      laminateliners: "Laminate liners for interior surface protection and finishing",
      laminates: "Designer laminates that transform ordinary surfaces into extraordinary spaces",
      louvers: "Elegant architectural louvers combining functionality with aesthetic appeal",
      veneers: "Premium natural wood veneers bringing authentic wood beauty to your projects",
    }
    return descriptions[category]
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in text-balance">
            {categoryName}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in animate-stagger-2 text-pretty">
            {getCategoryDescription(slug as ProductCategory)}
          </p>
        </div>
      </section>

      {/* Products Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ProductsContent category={slug as ProductCategory} />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CategoryPage