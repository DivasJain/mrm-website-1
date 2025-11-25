import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ArrowDown } from "lucide-react"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/9115220/pexels-photo-9115220.jpeg')`,
          }}
        ></div>
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Premium Building Materials</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 text-pretty">
            MRM delivers excellence in plywood, laminates, and blockboards with unmatched quality and lifetime
            warranties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Explore Products
            </Link>
            <Link
              href="/download"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30"
            >
              Download Catalogue
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white w-8 h-8" />
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-balance">Why Choose MRM?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Three decades of excellence in manufacturing premium building materials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">25</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Years Warranty</h3>
              <p className="text-gray-600">Industry-leading warranty on our premium BWP plywood range</p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-slate-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">∞</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lifetime Range</h3>
              <p className="text-gray-600">Select products backed by lifetime warranty guarantee</p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Certified Quality</h3>
              <p className="text-gray-600">All products meet international quality standards and certifications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Range - Premium Alternating Layout */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Product Range</h2>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive solutions crafted for enduring performance and elevated design.
            </p>
          </div>

          {/* Row 1: Image Left, Text Right */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center mb-16">
            <div>
              <img
                src="/modern-plywood-store-exterior-downtown.jpg"
                alt="MRM Ply & Boards"
                className="rounded-xl shadow-lg object-cover w-full h-64 md:h-[420px]"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">MRM Ply & Boards</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Engineered for strength, stability, and long-term reliability—trusted by professionals for every build.
              </p>
              <p className="text-gray-700 mb-6">
                Categories: <span className="font-medium">Plywood, Blockboards</span>
              </p>
              <Link
                href="/products"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Now
              </Link>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div className="md:order-1 order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">MRM Decor</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Refined surfaces and textures that elevate interiors—crafted for a luxe, modern aesthetic.
              </p>
              <p className="text-gray-700 mb-6">
                Categories: <span className="font-medium">Veneer, Laminates, Laminate Liners, Louvers</span>
              </p>
              <Link
                href="/products"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Now
              </Link>
            </div>
            <div className="md:order-2 order-1">
              <img
                src="/large-plywood-showroom-midtown-storefront.jpg"
                alt="MRM Decor"
                className="rounded-xl shadow-lg object-cover w-full h-64 md:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 text-pretty">
            Get access to our complete product catalogue and pricing information
          </p>
          <Link
            href="/download"
            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-block"
          >
            Download Catalogue & Pricing
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
