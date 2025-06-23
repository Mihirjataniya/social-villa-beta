"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Navbar() {
  const mobileMenuRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const menu = mobileMenuRef.current
    if (!menu) return

    if (isMobileMenuOpen) {
      menu.style.display = "block"
      menu.style.transform = "translateY(0)"
      menu.style.opacity = "1"
    } else {
      menu.style.transform = "translateY(-20px)"
      menu.style.opacity = "0"
      setTimeout(() => {
        if (!isMobileMenuOpen) {
          menu.style.display = "none"
        }
      }, 300)
    }
  }, [isMobileMenuOpen])

  const handleNavigation = (path) => {
    // Replace with your navigation logic
    console.log(`Navigate to: ${path}`)
  }

  return (
    <nav
      className={`sticky top-0 bg-[#FFF8ED]/95 backdrop-blur-lg z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-orange-200/60 shadow-lg" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-14">
        <div className="grid grid-cols-2 md:grid-cols-3 items-center h-16 md:h-20">
          {/* Logo */}
          <div onClick={() => handleNavigation("/")} className="flex w-full cursor-pointer justify-start">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SV</span>
              </div>
              <span className="text-xl font-bold text-neutral-800">Social Villa</span>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center space-x-8">
              <div className="relative group">
                <button className="text-neutral-700 hover:text-orange-500 transition-colors duration-200 flex items-center space-x-1 font-medium">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="rounded-xl bg-white/95 backdrop-blur-md border border-orange-200 shadow-xl overflow-hidden">
                    <a
                      href="#"
                      className="block px-4 py-3 text-neutral-700 hover:text-orange-500 hover:bg-orange-50 transition-colors font-medium"
                    >
                      Social Media Marketing
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-neutral-700 hover:text-orange-500 hover:bg-orange-50 transition-colors font-medium"
                    >
                      Content Creation
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-neutral-700 hover:text-orange-500 hover:bg-orange-50 transition-colors font-medium"
                    >
                      Brand Strategy
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-3 text-neutral-700 hover:text-orange-500 hover:bg-orange-50 transition-colors font-medium"
                    >
                      Analytics & Insights
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="/portfolio"
                className="text-neutral-700 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                Portfolio
              </a>
              <a
                href="/about-us"
                className="text-neutral-700 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                About
              </a>
              <a
                href="/contact-us"
                className="text-neutral-700 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex justify-end">
            <button className="group px-6 py-2.5 text-base font-semibold rounded-full bg-orange-400 hover:bg-orange-500 text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex justify-end">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-neutral-700 hover:text-orange-500 transition-colors rounded-lg hover:bg-orange-50"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-orange-200 shadow-xl transition-all duration-300"
        style={{
          display: "none",
          transform: "translateY(-20px)",
          opacity: 0,
        }}
      >
        <div className="px-4 py-6 space-y-4">
          <div>
            <button className="w-full text-left text-neutral-700 hover:text-orange-500 transition-colors py-2 font-semibold flex items-center justify-between">
              Services
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="pl-4 space-y-2 mt-2 border-l-2 border-orange-100">
              <a href="#" className="block text-neutral-600 hover:text-orange-500 transition-colors py-1.5 font-medium">
                Social Media Marketing
              </a>
              <a href="#" className="block text-neutral-600 hover:text-orange-500 transition-colors py-1.5 font-medium">
                Content Creation
              </a>
              <a href="#" className="block text-neutral-600 hover:text-orange-500 transition-colors py-1.5 font-medium">
                Brand Strategy
              </a>
              <a href="#" className="block text-neutral-600 hover:text-orange-500 transition-colors py-1.5 font-medium">
                Analytics & Insights
              </a>
            </div>
          </div>

          <a
            href="/portfolio"
            className="block text-neutral-700 hover:text-orange-500 transition-colors py-2 font-semibold"
          >
            Portfolio
          </a>

          <a
            href="/about-us"
            className="block text-neutral-700 hover:text-orange-500 transition-colors py-2 font-semibold"
          >
            About
          </a>

          <a
            href="/contact-us"
            className="block text-neutral-700 hover:text-orange-500 transition-colors py-2 font-semibold"
          >
            Contact
          </a>

          <div className="pt-4 border-t border-orange-200">
            <button className="w-full px-4 py-3 text-base font-semibold rounded-full bg-orange-400 hover:bg-orange-500 text-white transition-all duration-200 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
