"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Eye, Heart, Share2 } from "lucide-react"

const inspirationCategories = ["All", "Living Room", "Kitchen", "Bedroom", "Office", "Commercial"]

const inspirationGallery = [
  {
    id: 1,
    title: "Modern Kitchen Design",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    description: "Sleek kitchen featuring MRM laminates with woodgrain finish and premium plywood cabinetry.",
    products: ["MRM Gold BWP Plywood", "Woodgrain Laminates"],
    likes: 124,
  },
  {
    id: 2,
    title: "Contemporary Living Space",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    description:
      "Elegant living room with natural wood veneers and charcoal louvers creating a sophisticated ambiance.",
    products: ["Natural Wood Veneers", "MRM Charcoal Louvers"],
    likes: 89,
  },
  {
    id: 3,
    title: "Luxury Bedroom Suite",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    description: "Premium bedroom furniture crafted with MRM blockboards and finished with designer laminates.",
    products: ["MRM Premium Blockboard", "Designer Laminates"],
    likes: 156,
  },
  {
    id: 4,
    title: "Executive Office Design",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    description: "Professional office space featuring solid color laminates and premium plywood construction.",
    products: ["Solid Color Laminates", "MRM Gold BWP Plywood"],
    likes: 73,
  },
  {
    id: 5,
    title: "Retail Store Interior",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    description: "Modern retail space with stone texture laminates and architectural louvers for visual appeal.",
    products: ["Stone Laminates", "MRM Charcoal Louvers"],
    likes: 92,
  },
  {
    id: 6,
    title: "Cozy Reading Nook",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    description: "Intimate reading space with natural veneers and custom plywood shelving.",
    products: ["Natural Wood Veneers", "MRM Gold MR Plywood"],
    likes: 67,
  },
]

const InspirationContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof inspirationGallery)[0] | null>(null)

  const filteredGallery =
    selectedCategory === "All"
      ? inspirationGallery
      : inspirationGallery.filter((item) => item.category === selectedCategory)

  return (
    <div className="space-y-12">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        {inspirationCategories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "" : "bg-transparent"}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGallery.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
            <div className="relative">
              <div
                className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card text-foreground hover:bg-muted"
                      onClick={() => setSelectedImage(item)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div
                        className="h-96 bg-cover bg-center rounded-lg"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      ></div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                        <Badge variant="secondary">{item.category}</Badge>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Products Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {item.products.map((product, index) => (
                              <Badge key={index} variant="outline">
                                {product}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 pt-4">
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <Heart className="h-4 w-4 mr-2" />
                            {item.likes}
                          </Button>
                          <Button size="sm" variant="outline" className="bg-transparent">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <Badge variant="secondary" className="mb-3">
                {item.category}
              </Badge>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{item.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4" />
                  <span>{item.likes} likes</span>
                </div>
                <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80">
                  View Products →
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <Card className="bg-muted/30">
        <CardContent className="p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Share Your Project</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Created something amazing with MRM products? We'd love to feature your project in our gallery.
          </p>
          <Button size="lg">
            Submit Your Project
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default InspirationContent
