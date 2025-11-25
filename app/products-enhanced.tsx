import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductsContent from "@/components/ProductsContent"

export const metadata = {
  title: "MRM Products - Premium Plywood, Laminates, Blockboards & Louvers",
  description:
    "Explore MRM's comprehensive range of premium building materials including BWP plywood, designer laminates, blockboards, and charcoal louvers with industry-leading warranties.",
}

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductsContent />
      <Footer />
    </div>
  )
}

export default ProductsPage
