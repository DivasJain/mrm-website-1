import { Link } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { ArrowDown, Star, Award, Shield, Truck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const HomePage = () => {
  const productCategories = [
    {
      name: "MRM Gold BWP Plywood",
      description: "Premium boiling water proof plywood with 25-year warranty for superior durability",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "/products/plyandboards",
      category: "Ply and Boards",
    },
    {
      name: "Premium Blockboards",
      description: "High-strength blockboards perfect for furniture and construction applications",
      image:
        "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "/products/plyandboards",
      category: "Ply and Boards",
    },
    {
      name: "Designer Laminates",
      description: "Beautiful laminated sheets for stunning interior design applications",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "/products/laminates",
      category: "Laminates",
    },
    {
      name: "Charcoal Louvers",
      description: "Elegant louvers for stylish feature walls and modern ceiling designs",
      image:
        "https://images.unsplash.com/photo-1587387119725-76351a1a456c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "/products/louvers",
      category: "Louvers",
    },
    {
      name: "Natural Veneers",
      description: "Premium wood veneers for luxury finishes and sophisticated interiors",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      href: "/products/veneers",
      category: "Veneers",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "25 Years Warranty",
      description: "Industry-leading warranty on our premium BWP plywood range for complete peace of mind",
    },
    {
      icon: Award,
      title: "Lifetime Range",
      description: "Select products backed by lifetime warranty guarantee for ultimate durability",
    },
    {
      icon: Star,
      title: "Certified Quality",
      description: "All products meet international quality standards and certifications",
    },
    {
      icon: Truck,
      title: "Pan-India Delivery",
      description: "Reliable delivery network covering all major cities and towns across India",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/9115220/pexels-photo-9115220.jpeg')`,
          }}
        ></div>
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">MRM Woodcraft</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 text-pretty">
            Delivering excellence in plywood, laminates, and blockboards with unmatched quality and lifetime warranties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
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

      {/* Brand Motto Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">Premium Building Materials</h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Crafting excellence since 1990 with innovative solutions, superior quality, and unwavering commitment to perfection in every piece
          </p>
        </div>
      </section>


      {/* Our Product Range - Clean Minimal Design */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Product Range</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Comprehensive solutions crafted for enduring performance and elevated design.
            </p>
          </div>

          <div className="space-y-12">
            {/* MRM Ply & Boards */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/plyandboards-homepage.png"
                    alt="MRM Ply & Boards"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">MRM Ply & Boards</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Engineered for strength, stability, and long-term reliability—trusted by professionals for every build.
                  </p>

                  <div className="space-y-4">
                    <p className="text-sm font-medium text-muted-foreground">Explore Categories:</p>
                    <div className="flex flex-wrap gap-3">
                      <Link to="/products/plyandboards">
                        <Button variant="outline" className="bg-transparent">
                          Ply and Boards
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* MRM Decor */}
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="md:order-2 relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/decor-homepagesection.png"
                    alt="MRM Decor"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="md:order-1 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">MRM Decor</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Refined surfaces and textures that elevate interiors—crafted for a luxe, modern aesthetic.
                  </p>

                  <div className="space-y-4">
                    <p className="text-sm font-medium text-muted-foreground">Explore Categories:</p>
                    <div className="flex flex-wrap gap-3">
                      <Link to="/products/veneers">
                        <Button variant="outline" className="bg-transparent">
                          Veneers
                        </Button>
                      </Link>
                      <Link to="/products/laminates">
                        <Button variant="outline" className="bg-transparent">
                          Laminates
                        </Button>
                      </Link>
                      <Link to="/products/louvers">
                        <Button variant="outline" className="bg-transparent">
                          Louvers
                        </Button>
                      </Link>
                      <Link to="/products/laminateliners">
                        <Button variant="outline" className="bg-transparent">
                          Laminate Liners
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section - 30+ Years of Excellence */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">30+ Years of Excellence</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Since 1990, MRM Woodcraft has been at the forefront of manufacturing premium building materials. Our
                commitment to quality and innovation has made us a trusted name in the industry.
              </p>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                From our state-of-the-art manufacturing facilities to our rigorous quality control processes, every MRM
                product is crafted to exceed expectations and deliver lasting value.
              </p>
              <Link
                to="/about"
                className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Learn Our Story
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="MRM Manufacturing Facility"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MRM - USPs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Why Choose MRM?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Three decades of excellence in manufacturing premium building materials
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors">
                      <feature.icon className="h-8 w-8 text-amber-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-6 text-pretty max-w-2xl mx-auto">
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

export default HomePage