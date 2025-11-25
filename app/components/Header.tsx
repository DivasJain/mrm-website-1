"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown, Store, LogIn, LogOut, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/hooks/useAuth"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const productCategories = [
    { name: "Ply and Boards", href: "/products/plyandboards" },
    { name: "Laminate Liners", href: "/products/laminateliners" },
    { name: "Laminates", href: "/products/laminates" },
    { name: "Louvers", href: "/products/louvers" },
    { name: "Veneers", href: "/products/veneers" },
  ]

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Inspiration", href: "/inspiration" },
    { name: "Downloads", href: "/download" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <img
              src="/MRMLOGO.svg"
              alt="MRM Logo"
              className="h-28 sm:h-32 lg:h-36 w-auto drop-shadow-sm"
              style={{ imageRendering: 'crisp-edges', filter: 'brightness(1.1) contrast(1.1)' }}
            />
            <div className="text-3xl font-bold text-gray-800">Woodcraft</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 font-semibold text-lg transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-amber-600 font-semibold text-lg hover:bg-amber-50 transition-all duration-200"
                >
                  Products
                  <ChevronDown className="ml-2 h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 p-3 shadow-xl border-0 bg-white/95 backdrop-blur-sm">
                {productCategories.map((category) => (
                  <DropdownMenuItem
                    key={category.name}
                    asChild
                    className="rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-all duration-200 cursor-pointer"
                  >
                    <Link href={category.href} className="w-full px-4 py-3 text-base font-semibold">
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="flex items-center space-x-6">
            <Link
              href="/store-locator"
              className="flex items-center space-x-3 text-gray-700 hover:text-amber-600 transition-colors duration-200 hover:bg-amber-50 px-4 py-3 rounded-lg"
            >
              <Store className="h-6 w-6" />
              <span className="hidden sm:inline font-semibold text-lg">Store Locator</span>
            </Link>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-200"
                  >
                    <User className="h-5 w-5" />
                    <span className="hidden sm:inline font-semibold text-lg">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 p-3 shadow-xl border-0 bg-white/95 backdrop-blur-sm">
                  <DropdownMenuItem
                    onClick={logout}
                    className="rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-all duration-200 cursor-pointer"
                  >
                    <LogOut className="h-5 w-5 mr-3" />
                    <span className="font-semibold text-lg">Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-200"
                >
                  <LogIn className="h-5 w-5" />
                  <span className="font-semibold text-lg">Login</span>
                </Button>
              </Link>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="lg">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[350px] sm:w-[450px]">
                <div className="flex flex-col space-y-6 mt-10">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-xl font-semibold text-gray-700 hover:text-amber-600 transition-colors duration-200 hover:bg-amber-50 px-4 py-3 rounded-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="border-t pt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 px-4">Products</h3>
                    {productCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="block py-3 px-4 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all duration-200 text-lg font-semibold"
                        onClick={() => setIsOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>

                  <div className="border-t pt-6">
                    {user ? (
                      <div className="space-y-3">
                        <div className="px-4 py-3 text-base text-gray-600 font-medium">Logged in as {user.name}</div>
                        <Button
                          variant="ghost"
                          onClick={() => {
                            logout()
                            setIsOpen(false)
                          }}
                          className="w-full justify-start text-gray-700 hover:text-amber-600 hover:bg-amber-50 text-lg font-semibold"
                        >
                          <LogOut className="h-5 w-5 mr-3" />
                          Logout
                        </Button>
                      </div>
                    ) : (
                      <Link
                        href="/login"
                        className="flex items-center space-x-3 text-xl font-semibold text-gray-700 hover:text-amber-600 transition-colors duration-200 hover:bg-amber-50 px-4 py-3 rounded-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        <LogIn className="h-5 w-5" />
                        Login
                      </Link>
                    )}
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
