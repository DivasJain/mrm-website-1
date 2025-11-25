import { Link } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ArrowDown } from "lucide-react"

const IndexPage = () => {
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-balance">
            Premium Building Materials
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in animate-stagger-2 text-pretty">
            MRM delivers excellence in plywood, laminates, and blockboards with unmatched quality and lifetime
            warranties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-stagger-4">
            <Link
              to="/products"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover-lift"
            >
              Explore Products
            </Link>
            <Link
              to="/download"
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Why Choose MRM?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Product Range</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for all your construction needs</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Plywood Card */}
            <Link to="/products" className="group block">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">MRM Gold BWP Plywood</h3>
                  <p className="text-gray-600 mb-4">Premium boiling water proof plywood with 25-year warranty</p>
                  <span className="text-amber-600 font-semibold group-hover:text-amber-700">Learn More →</span>
                </div>
              </div>
            </Link>

            {/* Blockboard Card */}
            <Link to="/products" className="group block">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Ply and Boards</h3>
                  <p className="text-gray-600 mb-4">Premium plywood and blockboards for furniture and construction</p>
                  <span className="text-amber-600 font-semibold group-hover:text-amber-700">Learn More →</span>
                </div>
              </div>
            </Link>

            {/* Laminates Card */}
            <Link to="/products" className="group block">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Laminated Sheets</h3>
                  <p className="text-gray-600 mb-4">Designer laminates for beautiful interior applications</p>
                  <span className="text-amber-600 font-semibold group-hover:text-amber-700">Learn More →</span>
                </div>
              </div>
            </Link>

            {/* Louvers Card */}
            <Link to="/products" className="group block">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1587387119725-76351a1a456c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                  }}
                ></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Louvers</h3>
                  <p className="text-gray-600 mb-4">Elegant louvers for stylish feature walls and ceilings</p>
                  <span className="text-amber-600 font-semibold group-hover:text-amber-700">Learn More →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8">
            Get access to our complete product catalogue and pricing information
          </p>
          <Link
            to="/download"
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

export default IndexPage