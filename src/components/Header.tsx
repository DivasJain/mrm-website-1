import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Downloads", href: "/download" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img
              src="/MRMLOGO.svg"
              alt="MRM Logo"
              className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto drop-shadow-sm"
              style={{ imageRendering: 'crisp-edges', filter: 'brightness(1.1) contrast(1.1)' }}
            />
            <div className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 hidden xs:inline">Ply & Lam</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm xl:text-base text-gray-700 hover:text-[#F26A21] font-medium transition-colors duration-200 px-2 py-1 rounded-md hover:bg-[#F5EFE6]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link
              to="/store-locator"
              className="flex items-center space-x-1 sm:space-x-2 text-gray-700 hover:text-[#F26A21] transition-colors duration-200 hover:bg-[#F5EFE6] px-2 sm:px-3 py-2 rounded-lg"
            >
              <Store className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden md:inline font-medium text-sm sm:text-base">Store Locator</span>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] md:w-[350px]">
                <div className="flex flex-col space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-base sm:text-lg font-medium text-gray-700 hover:text-[#F26A21] transition-colors duration-200 hover:bg-[#F5EFE6] px-3 py-2 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="border-t pt-4">
                    <Link
                      to="/store-locator"
                      className="flex items-center space-x-2 text-lg font-medium text-gray-700 hover:text-[#F26A21] transition-colors duration-200 hover:bg-[#F5EFE6] px-3 py-2 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <Store className="h-4 w-4" />
                      Store Locator
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
