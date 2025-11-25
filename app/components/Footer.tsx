import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  const productCategories = [
    { name: "Ply and Boards", href: "/products/plyandboards" },
    { name: "Laminates", href: "/products/laminates" },
    { name: "Louvers", href: "/products/louvers" },
    { name: "Veneers", href: "/products/veneers" },
  ]

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Store Locator", href: "/store-locator" },
    { name: "Downloads", href: "/download" },
    { name: "Contact", href: "/contact" },
    { name: "Inspiration", href: "/inspiration" },
  ]

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/MRMLOGO.svg"
                alt="MRM Logo"
                className="h-20 sm:h-24 w-auto drop-shadow-md"
                style={{ imageRendering: 'crisp-edges', filter: 'brightness(1.1) contrast(1.1)' }}
              />
              <div className="text-lg font-semibold">Woodcraft</div>
            </div>
            <p className="text-gray-300 text-pretty">
              Leading manufacturer of premium building materials with 30+ years of excellence in quality and innovation.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {productCategories.map((product) => (
                <li key={product.name}>
                  <Link href={product.href} className="text-gray-300 hover:text-amber-500 transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-amber-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  MRM Woodcraft Pvt. Ltd.
                  <br />
                  Industrial Area, Phase-II
                  <br />
                  Chandigarh, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <p className="text-gray-300">+91-172-XXXXXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <p className="text-gray-300">info@mrmwoodcraft.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 MRM Woodcraft. All rights reserved. | Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
