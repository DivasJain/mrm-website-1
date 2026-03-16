import { Link } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Shield, Award, CheckCircle, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const stores = [
  {
    id: 1,
    name: "MRM PLY LAM LLP",
    image: "/modern-plywood-store-exterior-downtown.jpg",
    city: "Coimbatore",
  },
  {
    id: 2,
    name: "MAHAVIR LAMINATES",
    image: "/large-plywood-showroom-midtown-storefront.jpg",
    city: "Coimbatore",
  },
  {
    id: 3,
    name: "M CUBE SPACES LLP",
    image: "/industrial-plywood-warehouse-brooklyn-exterior.jpg",
    city: "Bengaluru",
  },
  {
    id: 4,
    name: "MAHAVIR WOODS N VENEER",
    image: "/modern-wood-materials-store-queens-storefront.jpg",
    city: "Chennai",
  },
  {
    id: 5,
    name: "R S Plywood",
    image: "/plywood-lumber-yard-staten-island-store.jpg",
    city: "Jodhpur",
  },
]

const HomePage = () => {
  const productCategories = [
    {
      name: "Plywood",
      href: "/products/plyandboards",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      gridArea: "plywood",
    },
    {
      name: "Blockboard",
      href: "/products/plyandboards",
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
      gridArea: "blockboard",
    },
    {
      name: "Laminates",
      href: "/products/laminates",
      image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
      gridArea: "laminates",
    },
    {
      name: "Louvers",
      href: "/products/louvers",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      gridArea: "louvers",
    },
    {
      name: "Interior Finishes",
      href: "/products/laminateliners",
      image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80",
      gridArea: "interior",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "25 Years Warranty",
      description: "Industry-leading warranty on BWP plywood range for complete peace of mind",
    },
    {
      icon: Award,
      title: "Lifetime Guarantee",
      description: "Premium products with lifetime warranty for ultimate durability",
    },
    {
      icon: CheckCircle,
      title: "IS:710 Certified",
      description: "Internationally certified BWP & BWR grade plywood",
    },
    {
      icon: MapPin,
      title: "Pan-India Delivery",
      description: "Reliable delivery to all major cities and towns",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Compact Banner */}
      <section className="relative h-[90vh] min-h-[1200px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{
            backgroundImage: `url('/assets/HeroBanner1.png')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
      </section>


      {/* Our Product Range - Expanded Mosaic Grid */}
      <section className="py-16 bg-[#F5EFE6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 text-balance">Our Product Range</h2>
            <p className="text-[#6E6E6E] max-w-2xl mx-auto text-lg">
              Surfaces and materials crafted for modern interiors.
            </p>
          </div>

          {/* Dynamic Mosaic Grid - Plywood Full Height on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Plywood - Full height card on desktop */}
            <Link 
              to="/products/plyandboards"
              className="relative overflow-hidden rounded-[14px] group cursor-pointer lg:row-span-2"
              style={{ minHeight: '500px', gridRow: 'span 2 / span 2' }}
            >
              <img
                src={productCategories[0].image}
                alt="Plywood"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/60 group-hover:via-black/30 transition-all duration-300" />
              <div className="absolute bottom-6 left-6 transform group-hover:-translate-y-1 transition-transform duration-300">
                <span className="text-white font-bold text-3xl md:text-4xl drop-shadow-lg">
                  {productCategories[0].name}
                </span>
              </div>
            </Link>

            {/* Right side - 2 columns of smaller cards */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {/* Blockboard */}
              <Link 
                to="/products/plyandboards"
                className="relative overflow-hidden rounded-[14px] group cursor-pointer"
                style={{ minHeight: '242px' }}
              >
                <img
                  src={productCategories[1].image}
                  alt="Blockboard"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/60 group-hover:via-black/30 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-white font-bold text-lg md:text-xl drop-shadow-lg">
                    {productCategories[1].name}
                  </span>
                </div>
              </Link>

              {/* Laminates */}
              <Link 
                to="/products/laminates"
                className="relative overflow-hidden rounded-[14px] group cursor-pointer"
                style={{ minHeight: '242px' }}
              >
                <img
                  src={productCategories[2].image}
                  alt="Laminates"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/60 group-hover:via-black/30 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-white font-bold text-lg md:text-xl drop-shadow-lg">
                    {productCategories[2].name}
                  </span>
                </div>
              </Link>

              {/* Louvers */}
              <Link 
                to="/products/louvers"
                className="relative overflow-hidden rounded-[14px] group cursor-pointer"
                style={{ minHeight: '242px' }}
              >
                <img
                  src={productCategories[3].image}
                  alt="Louvers"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/60 group-hover:via-black/30 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-white font-bold text-lg md:text-xl drop-shadow-lg">
                    {productCategories[3].name}
                  </span>
                </div>
              </Link>

              {/* Interior Finishes */}
              <Link 
                to="/products/laminateliners"
                className="relative overflow-hidden rounded-[14px] group cursor-pointer"
                style={{ minHeight: '242px' }}
              >
                <img
                  src={productCategories[4].image}
                  alt="Interior Finishes"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/60 group-hover:via-black/30 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-white font-bold text-lg md:text-xl drop-shadow-lg">
                    {productCategories[4].name}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us & Quality USPs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4 text-balance">Quality You Can Feel & Trust</h2>
              <p className="text-lg text-[#6E6E6E] text-pretty leading-relaxed">
                MRM is a building materials brand built on quality you can feel and trust. Our range of plywood, laminates, laminate liners, louvers, and interior surfaces is thoughtfully crafted to bring together strength, refined design, and everyday reliability.
              </p>
              <p className="text-[#6E6E6E] text-pretty leading-relaxed">
                Developed by Rakesh Mehta, with over 25 years of market experience, MRM is shaped by a deep understanding of customer needs and a belief in doing things the right way.
              </p>
              <Link
                to="/about"
                className="inline-block bg-[#F26A21] hover:bg-[#D85A17] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Our Story
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="pt-6 pb-5">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-[#F26A21]/10 rounded-full group-hover:bg-[#F26A21]/20 transition-colors">
                        <feature.icon className="h-6 w-6 text-[#F26A21]" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-[#2B2B2B]">{feature.title}</h3>
                    <p className="text-sm text-[#6E6E6E]">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Stores Section */}
      <section className="py-16 bg-[#F5EFE6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-4">Our Stores</h2>
            <p className="text-lg text-[#6E6E6E] max-w-2xl mx-auto mb-8">
              Visit our stores across multiple locations for personalized service and expert consultation
            </p>
            <Link to="/store-locator">
              <Button size="lg" className="bg-[#F26A21] hover:bg-[#D85A17] hover:scale-105 transition-transform duration-300">
                <MapPin className="mr-2 h-5 w-5" />
                View All Stores
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {stores.map((store) => (
              <Link key={store.id} to="/store-locator">
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-80 flex flex-col">
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img
                      src={store.image}
                      alt={`${store.name} storefront`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4 text-center flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-[#2B2B2B] mb-2">{store.name}</h3>
                      <p className="text-[#6E6E6E] mb-3">{store.city}</p>
                    </div>
                    <Button size="sm" className="w-full bg-[#F26A21] hover:bg-[#D85A17] hover:scale-105 transition-transform duration-300 mt-auto">
                      <MapPin className="mr-2 h-4 w-4" />
                      Visit Store
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#F26A21]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">Ready to Start Your Project?</h2>
          <p className="text-lg text-white/90 mb-6 text-pretty max-w-2xl mx-auto">
            Explore our complete range of premium building materials or connect with our team for personalized assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#F26A21] hover:bg-[#F5EFE6] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-block"
            >
              Contact Us
            </Link>
            <Link
              to="/store-locator"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30 inline-block"
            >
              Find a Dealer
            </Link>
            <Link
              to="/download"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/30 inline-block"
            >
              Download Catalogue
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage