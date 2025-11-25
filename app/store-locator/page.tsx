"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, Phone, Clock, Search, Navigation, Filter, ExternalLink } from "lucide-react"

interface Store {
  id: number
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  phone: string
  email: string
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
  services: string[]
  distance?: number
  image: string
  coordinates: {
    lat: number
    lng: number
  }
}

const mockStores: Store[] = [
  {
    id: 1,
    name: "MRM PLY LAM LLP (Main Office)",
    address: "No. 170, Mettupalayam Road",
    city: "Coimbatore",
    state: "Tamil Nadu",
    zipCode: "641043",
    phone: "+91 96290 15535",
    email: "info@mrmplylam.com",
    hours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 4:00 PM",
      sunday: "Closed",
    },
    services: ["Main Office", "Corporate Sales", "Customer Support"],
    distance: 0,
    image: "/modern-plywood-store-exterior-downtown.jpg",
    coordinates: { lat: 11.0168, lng: 76.9558 },
  },
  {
    id: 2,
    name: "MAHAVIR LAMINATES",
    address: "706, Mettupalayam Road, Near Chintamani Super Market, R.S.Puram",
    city: "Coimbatore",
    state: "Tamil Nadu",
    zipCode: "641002",
    phone: "+91 99524 98213",
    email: "mahavirlaminates@mrmplylam.com",
    hours: {
      weekdays: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "10:00 AM - 4:00 PM",
    },
    services: ["Laminates", "Retail Sales", "Expert Consultation"],
    distance: 2.5,
    image: "/large-plywood-showroom-midtown-storefront.jpg",
    coordinates: { lat: 11.0100, lng: 76.9500 },
  },
  {
    id: 3,
    name: "M CUBE SPACES LLP",
    address: "62, Pattanagere Main Road, Rajarajeshwari Nagar",
    city: "Bengaluru",
    state: "Karnataka",
    zipCode: "560059",
    phone: "+91 98292 20292",
    email: "mcubespace@mrmplylam.com",
    hours: {
      weekdays: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "10:00 AM - 4:00 PM",
    },
    services: ["Full Service", "Interior Solutions", "Commercial Sales"],
    distance: 285,
    image: "/industrial-plywood-warehouse-brooklyn-exterior.jpg",
    coordinates: { lat: 12.9081, lng: 77.4847 },
  },
  {
    id: 4,
    name: "MAHAVIR WOODS N VENEER",
    address: "No. 48, Choolai High Road, Choolai",
    city: "Chennai",
    state: "Tamil Nadu",
    zipCode: "600112",
    phone: "+91 98407 59369 / +91 90802 03162",
    email: "mahavirwoods@mrmplylam.com",
    hours: {
      weekdays: "9:00 AM - 7:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "10:00 AM - 4:00 PM",
    },
    services: ["Woods & Veneers", "Premium Products", "Custom Orders"],
    distance: 425,
    image: "/modern-wood-materials-store-queens-storefront.jpg",
    coordinates: { lat: 13.0827, lng: 80.2707 },
  },
  {
    id: 5,
    name: "R S Plywood",
    address: "Plot No.145, Outside Gail No. 6, Main Road, Milk Man Colony",
    city: "Jodhpur",
    state: "Rajasthan",
    zipCode: "342008",
    phone: "+91 98290 12345",
    email: "rsplywood@mrmplylam.com",
    hours: {
      weekdays: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 4:00 PM",
      sunday: "Closed",
    },
    services: ["Plywood", "Wholesale", "Bulk Orders"],
    distance: 1850,
    image: "/plywood-lumber-yard-staten-island-store.jpg",
    coordinates: { lat: 26.2389, lng: 73.0243 },
  },
]

export default function StoreLocatorPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredStores, setFilteredStores] = useState<Store[]>(mockStores)
  const [selectedService, setSelectedService] = useState<string>("")
  const [userLocation, setUserLocation] = useState<string>("")

  const allServices = Array.from(new Set(mockStores.flatMap((store) => store.services)))

  useEffect(() => {
    let filtered = mockStores

    if (searchQuery) {
      filtered = filtered.filter(
        (store) =>
          store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.zipCode.includes(searchQuery),
      )
    }

    if (selectedService) {
      filtered = filtered.filter((store) => store.services.includes(selectedService))
    }

    setFilteredStores(filtered)
  }, [searchQuery, selectedService])

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(`${position.coords.latitude}, ${position.coords.longitude}`)
          // In a real app, you would use this to calculate actual distances
        },
        (error) => {
          console.error("Error getting location:", error)
        },
      )
    }
  }

  const getGoogleMapsUrl = (store: Store) => {
    const address = `${store.address}, ${store.city}, ${store.state} ${store.zipCode}`
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`
  }

  const getDirectionsUrl = (store: Store) => {
    const address = `${store.address}, ${store.city}, ${store.state} ${store.zipCode}`
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Find Your Nearest MRM Store
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Locate MRM stores near you and discover our full range of products and services with expert support.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* Location Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Enter city, zip code, or address"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>

                  {/* Service Filter */}
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">All Services</option>
                      {allServices.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Get Location Button */}
                  <Button onClick={handleGetLocation} className="w-full">
                    <Navigation className="mr-2 h-4 w-4" />
                    Use My Location
                  </Button>
                </div>

                {userLocation && (
                  <div className="text-sm text-muted-foreground mb-4">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Using location: {userLocation}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Store Results */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {filteredStores.length} Store{filteredStores.length !== 1 ? "s" : ""} Found
            </h2>
            {searchQuery && (
              <p className="text-muted-foreground">
                Showing results for "{searchQuery}"{selectedService && ` with ${selectedService}`}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStores.map((store) => (
              <Dialog key={store.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    {/* Store Image with Hover Zoom */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={store.image || "/placeholder.svg"}
                        alt={`${store.name} storefront`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {store.distance && (
                        <Badge className="absolute top-3 right-3 bg-background/90 text-foreground">
                          {store.distance} miles away
                        </Badge>
                      )}
                    </div>

                    {/* Store Info Overlay */}
                    <CardContent className="p-4">
                      <h3 className="text-xl font-bold mb-2">{store.name}</h3>
                      <div className="flex items-center text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="text-sm">
                          {store.address}, {store.city}, {store.state}
                        </span>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{store.name}</DialogTitle>
                  </DialogHeader>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Store Details */}
                    <div className="space-y-6">
                      {/* Store Image */}
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={store.image || "/placeholder.svg"}
                          alt={`${store.name} storefront`}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Contact Information */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Address</h4>
                          <div className="flex items-start">
                            <MapPin className="h-4 w-4 mr-2 text-muted-foreground mt-1 flex-shrink-0" />
                            <span className="text-sm">
                              {store.address}
                              <br />
                              {store.city}, {store.state} {store.zipCode}
                            </span>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Contact</h4>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                              <a href={`tel:${store.phone}`} className="text-primary hover:underline">
                                {store.phone}
                              </a>
                            </div>
                            <div className="flex items-center">
                              <span className="h-4 w-4 mr-2 text-muted-foreground">@</span>
                              <a href={`mailto:${store.email}`} className="text-primary hover:underline">
                                {store.email}
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* Hours */}
                        <div>
                          <h4 className="font-semibold mb-2">Store Hours</h4>
                          <div className="flex items-start">
                            <Clock className="h-4 w-4 mr-2 text-muted-foreground mt-1" />
                            <div className="text-sm space-y-1">
                              <div>
                                <strong>Mon-Fri:</strong> {store.hours.weekdays}
                              </div>
                              <div>
                                <strong>Saturday:</strong> {store.hours.saturday}
                              </div>
                              <div>
                                <strong>Sunday:</strong> {store.hours.sunday}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Services */}
                        <div>
                          <h4 className="font-semibold mb-2">Available Services</h4>
                          <div className="flex flex-wrap gap-2">
                            {store.services.map((service) => (
                              <Badge key={service} variant="outline">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                          <Button asChild className="flex-1">
                            <a href={getDirectionsUrl(store)} target="_blank" rel="noopener noreferrer">
                              <Navigation className="mr-2 h-4 w-4" />
                              Get Directions
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                          <Button variant="outline" asChild className="flex-1 bg-transparent">
                            <a href={`tel:${store.phone}`}>
                              <Phone className="mr-2 h-4 w-4" />
                              Call Store
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Embedded Google Map */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Location Map</h4>
                      <div className="aspect-square rounded-lg overflow-hidden border">
                        {/* Placeholder for Google Maps - In production, replace with actual Google Maps embed */}
                        <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                          <div className="text-center">
                            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm text-muted-foreground mb-2">Interactive Map</p>
                            <p className="text-xs text-muted-foreground">
                              {store.coordinates.lat}, {store.coordinates.lng}
                            </p>
                            <Button variant="outline" size="sm" className="mt-3 bg-transparent" asChild>
                              <a href={getDirectionsUrl(store)} target="_blank" rel="noopener noreferrer">
                                Open in Google Maps
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {filteredStores.length === 0 && (
            <div className="text-center py-16">
              <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No stores found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or expanding your search area.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedService("")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      </main>
      <Footer />
    </div>
  )
}
