import { useParams } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductDetailContent from "@/components/ProductDetailContent"
import { productsData, type ProductCategory } from "@/data/enhanced-products"
import { slugify } from "@/lib/products"

const ProductPage = () => {
  const { slug, id: productSlug } = useParams<{ slug: string; id: string }>()

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

  // Find product by slug
  const products = productsData[slug as ProductCategory]
  const product = products.find((p) => slugify(p.name) === productSlug)

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground">The requested product does not exist.</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <a href="/" className="hover:text-amber-600 transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="/products" className="hover:text-amber-600 transition-colors">
              Products
            </a>
            <span>/</span>
            <a href={`/products/${slug}`} className="hover:text-amber-600 transition-colors">
              {slug.charAt(0).toUpperCase() + slug.slice(1)}
            </a>
            <span>/</span>
            <span className="text-gray-800 font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ProductDetailContent product={product} category={slug} />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProductPage