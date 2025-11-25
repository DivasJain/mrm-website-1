"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, Headphones, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    inquiryType: "general",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our customer service team",
      contact: "(555) 123-4567",
      hours: "Mon-Fri: 8AM-8PM EST",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message and we'll respond within 24 hours",
      contact: "support@mrm.com",
      hours: "24/7 Response",
      action: "Send Email",
    },
  ]

  const storeLocation = {
    name: "MRM Plywood Store",
    address: "123 Industrial Avenue, Suite 100",
    city: "Brooklyn, NY 11201",
    phone: "(555) 123-4567",
    email: "store@mrm.com",
    hours: {
      weekdays: "Monday - Friday: 8:00 AM - 7:00 PM",
      saturday: "Saturday: 9:00 AM - 6:00 PM",
      sunday: "Sunday: 10:00 AM - 5:00 PM"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We're here to help with any questions, support needs, or partnership opportunities. Reach out to us through
            your preferred method.
          </p>
        </div>
      </section>

      {/* Contact Form and Contact Methods */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl h-full">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Send className="mr-2 h-6 w-6" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We'll respond within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="general">General</option>
                          <option value="product">Product Enquiry</option>
                          <option value="dealership">Dealership</option>
                          <option value="others">Others</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="mt-1"
                          placeholder="Please provide details about your inquiry..."
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods - Takes 1 column */}
            <div className="lg:col-span-1">
              <Card className="shadow-xl h-full">
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {contactMethods.map((method, index) => (
                      <div
                        key={index}
                        className={`text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group p-8 ${
                          index === 0 ? 'border-b border-muted' : ''
                        }`}
                      >
                        <div className="mb-4 flex justify-center">
                          <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                            <method.icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                        <p className="text-muted-foreground text-base leading-relaxed mb-4">{method.description}</p>
                        <div className="space-y-3 mb-6">
                          <p className="font-semibold text-lg">{method.contact}</p>
                          <Badge variant="secondary" className="text-sm px-3 py-1">{method.hours}</Badge>
                        </div>
                        <Button
                          className="w-full"
                          size="lg"
                          onClick={() => {
                            if (method.title === "Call Us") {
                              window.open(`tel:${method.contact}`, '_self');
                            } else {
                              window.open(`mailto:${method.contact}`, '_self');
                            }
                          }}
                        >
                          {method.action}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Stores Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Stores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Visit our stores across multiple locations for personalized service and expert consultation
            </p>
            <Link href="/store-locator">
              <Button size="lg" className="hover:scale-105 transition-transform duration-300">
                <MapPin className="mr-2 h-5 w-5" />
                View All Stores
              </Button>
            </Link>
          </div>

          {/* Store Grid - Mobile First */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {[
                { id: 1, name: "MRM PLY LAM LLP", image: "/modern-plywood-store-exterior-downtown.jpg", city: "Coimbatore" },
                { id: 2, name: "MAHAVIR LAMINATES", image: "/large-plywood-showroom-midtown-storefront.jpg", city: "Coimbatore" },
                { id: 3, name: "M CUBE SPACES LLP", image: "/industrial-plywood-warehouse-brooklyn-exterior.jpg", city: "Bengaluru" },
                { id: 4, name: "MAHAVIR WOODS N VENEER", image: "/modern-wood-materials-store-queens-storefront.jpg", city: "Chennai" },
                { id: 5, name: "R S Plywood", image: "/plywood-lumber-yard-staten-island-store.jpg", city: "Jodhpur" }
              ].map((store) => (
                <Link key={store.id} href="/store-locator">
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

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What are your response times?</h3>
                <p className="text-sm text-muted-foreground">
                  We respond to emails within 24 hours and phone calls are answered during business hours. Emergency
                  support is available 24/7.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you offer technical support?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we provide comprehensive technical support for all our products including installation,
                  troubleshooting, and maintenance guidance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I schedule a consultation?</h3>
                <p className="text-sm text-muted-foreground">
                  Contact us to schedule a free consultation with our experts to discuss your specific needs and
                  requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What information should I include?</h3>
                <p className="text-sm text-muted-foreground">
                  Please include your contact information, a detailed description of your inquiry, and any relevant
                  product or order numbers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  )
}
