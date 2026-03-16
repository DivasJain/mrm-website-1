import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"

const features = [
  {
    id: "machinery",
    title: "Advanced Machinery",
    icon: "⚙️",
    description:
      "The plywood industry has evolved significantly with the adoption of high-precision, automated machinery. At MRM Woodcraft, we use cutting-edge equipment to ensure consistent quality, enhanced durability, and optimal efficiency throughout the manufacturing process.",
    image: "https://images.pexels.com/photos/8447895/pexels-photo-8447895.jpeg",
  },
  {
    id: "facilities",
    title: "Modern Facilities",
    icon: "🏭",
    description:
      "Our 50,000 sq ft manufacturing facility features climate-controlled production areas that ensure optimal conditions for wood processing and laminate production. Advanced quality control systems monitor every stage of production.",
    image: "https://images.unsplash.com/photo-1608660964522-679fcf3d6021?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "testing",
    title: "Quality Testing",
    icon: "🔬",
    description:
      "Our in-house laboratory conducts comprehensive testing at every stage of production. From moisture content analysis to bond strength testing, we ensure every product meets our stringent quality standards.",
    image: "https://images.unsplash.com/photo-1581090700227-1f73c186c5ef?auto=format&fit=crop&w=800&q=80",
  },
]

const certifications = [
  {
    id: 1,
    title: "ISO 9001:2015",
    description: "Quality Management System certification ensuring consistent product quality and customer satisfaction.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "BWP Grade",
    description: "Boiling Water Proof certification for superior moisture resistance and durability.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "IS 303",
    description: "Indian Standards certification meeting national quality benchmarks for plywood products.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "CE Marking",
    description: "European Conformity marking ensuring compliance with European safety standards.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=800&q=80",
  },
]

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

const AboutContent = () => {
  const [selected, setSelected] = useState<(typeof features)[0] | null>(null)

  return (
    <div className="space-y-20">
      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Quality You Can Feel & Trust</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              MRM is a building materials brand built on quality you can feel and trust. Our range of plywood, laminates, laminate liners, louvers, and interior surfaces is thoughtfully crafted to bring together strength, refined design, and everyday reliability.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Developed by Rakesh Mehta, with over 25 years of hands-on market experience, MRM is shaped by a deep understanding of customer needs and a belief in doing things the right way.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              As we grow into a complete building materials brand, we remain committed to creating products that earn trust over time and help build spaces meant to be lived in and loved.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="text-center p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-4">
                  <h3 className="text-3xl font-bold text-amber-600 mb-2">25+</h3>
                  <p className="text-muted-foreground">Years Warranty</p>
                </CardContent>
              </Card>
              <Card className="text-center p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-4">
                  <h3 className="text-3xl font-bold text-foreground mb-2">1000+</h3>
                  <p className="text-muted-foreground">Happy Dealers</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="animate-fade-in animate-stagger-2">
            <img
              src="/assets/plywoodfull.png"
              alt="MRM Manufacturing Facility - Premium Plywood Quality"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Manufacturing Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art facilities and cutting-edge technology ensure consistent quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item)}
                className={`p-6 rounded-xl shadow-md bg-card text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border ${
                  selected?.id === item.id ? "border-primary bg-muted/50" : "border-transparent"
                }`}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              </button>
            ))}
          </div>

          {selected && (
            <Card className="shadow-xl">
              <CardContent className="p-6 md:flex gap-6">
                <div
                  className="md:w-1/2 h-64 md:h-auto bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${selected.image})` }}
                ></div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{selected.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{selected.description}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Store Locator */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Stores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Visit our stores across multiple locations for personalized service and expert consultation
            </p>
            <Link to="/store-locator">
              <Button size="lg" className="hover:scale-105 transition-transform duration-300">
                <MapPin className="mr-2 h-5 w-5" />
                View All Stores
              </Button>
            </Link>
          </div>

          {/* Store Grid - Mobile First */}
          <div className="max-w-7xl mx-auto">
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
                        <h3 className="font-semibold text-lg text-foreground mb-2">{store.name}</h3>
                        <p className="text-muted-foreground mb-3">{store.city}</p>
                      </div>
                      <Button size="sm" className="w-full hover:scale-105 transition-transform duration-300 mt-auto">
                        <MapPin className="mr-2 h-4 w-4" />
                        Visit Store
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutContent
