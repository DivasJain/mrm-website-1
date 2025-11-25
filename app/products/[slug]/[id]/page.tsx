import { notFound } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductDetailContent from "@/components/ProductDetailContent"
import { productsData, type ProductCategory } from "@/data/enhanced-products"
import { slugify } from "@/lib/products"

interface ProductPageProps {
  params: {
    slug: string
    id: string
  }
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { slug, id: productSlug } = params

  // Validate category
  if (!Object.keys(productsData).includes(slug)) {
    notFound()
  }

  // Find product by slug
  const products = productsData[slug as ProductCategory]
  const product = products.find((p) => slugify(p.name) === productSlug)

  if (!product) {
    notFound()
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
