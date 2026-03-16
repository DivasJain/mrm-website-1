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
  ]

  return (
    <footer className="bg-[#2B2B2B] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
              <img
                src="/MRMLOGO.svg"
                alt="MRM Logo"
                className="h-20 sm:h-24 w-auto drop-shadow-md brightness-0 invert"
                style={{ imageRendering: 'crisp-edges' }}
              />
              <div className="text-xl font-bold text-white mt-2">Ply & Lam</div>
            </div>
            <p className="text-white/90 text-pretty text-lg leading-relaxed">
              Your trusted partner for premium plywood, laminates, and interior surfaces. Quality you can feel and trust.
            </p>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6">Products</h3>
            <ul className="space-y-3">
              {productCategories.map((product) => (
                <li key={product.name}>
                  <Link to={product.href} className="text-gray-300 hover:text-[#F26A21] transition-colors text-lg font-medium">
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
                  <Link to={link.href} className="text-gray-300 hover:text-[#F26A21] transition-colors text-lg font-medium">
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
                <MapPin className="h-6 w-6 text-white/80 mt-1 flex-shrink-0" />
                <p className="text-white/90 text-base leading-relaxed">
                  MRM Ply & Lam LLP
                  <br />
                  No. 170, Mettupalayam Road
                  <br />
                  Coimbatore, Tamil Nadu 641043
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-white/80" />
                <a href="tel:+919629015535" className="text-white/90 hover:text-white transition-colors text-lg">
                  +91 96290 15535
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-white/80" />
                <a href="mailto:info@mrmplylam.com" className="text-white/90 hover:text-white transition-colors text-lg">
                  info@mrmplylam.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-16 pt-10 text-center">
          <p className="text-white/80 text-lg font-medium">
            © 2025 MRM Ply & Lam. All rights reserved. | Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
