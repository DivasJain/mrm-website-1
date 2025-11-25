import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  const productCategories = [
    { name: "Ply and Boards", href: "/products/plyandboards" },
    { name: "Laminate Liners", href: "/products/laminateliners" },
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
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="/MRMLOGO.svg"
                alt="MRM Logo"
                className="h-24 sm:h-28 w-auto drop-shadow-md"
                style={{ imageRendering: 'crisp-edges', filter: 'brightness(1.1) contrast(1.1)' }}
              />
              <div className="text-xl font-bold">Woodcraft</div>
            </div>
            <p className="text-gray-300 text-pretty text-lg leading-relaxed">
              Leading manufacturer of premium building materials with 30+ years of excellence in quality and innovation.
            </p>
            <div className="flex space-x-6">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-amber-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              {productCategories.map((product) => (
                <li key={product.name}>
                  <Link to={product.href} className="text-gray-300 hover:text-amber-500 transition-colors text-lg font-medium">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-amber-500 transition-colors text-lg font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-base leading-relaxed">
                  MRM Woodcraft Pvt. Ltd.
                  <br />
                  Industrial Area, Phase-II
                  <br />
                  Chandigarh, India
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-amber-500" />
                <p className="text-gray-300 text-lg">+91-172-XXXXXXX</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-amber-500" />
                <p className="text-gray-300 text-lg">info@mrmwoodcraft.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-16 pt-10 text-center">
          <p className="text-gray-400 text-lg font-medium">
            © 2025 MRM Woodcraft. All rights reserved. | Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
