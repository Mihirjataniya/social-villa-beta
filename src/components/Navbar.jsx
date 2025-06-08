// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"

function Navbar() {
    const mobileMenuRef = useRef(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

    useEffect(() => {
        const menu = mobileMenuRef.current
        if (!menu) return

        if (isMobileMenuOpen) {
            gsap.fromTo(
                menu,
                {
                    y: -100,
                    clipPath: 'inset(0 0 100% 0)',
                    display: 'block',
                    opacity: 0,
                },
                {
                    y: 0,
                    clipPath: 'inset(0 0 0% 0)',
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power4.out',
                    onStart: () => (menu.style.display = 'block'),
                }
            )
        } else {
            gsap.to(menu, {
                y: -100,
                clipPath: 'inset(0 0 100% 0)',
                opacity: 0,
                duration: 0.4,
                ease: 'power4.in',
                onComplete: () => (menu.style.display = 'none'),
            })
        }
    }, [isMobileMenuOpen])


    const handleButtonHover = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out",
        })
    }

    const handleButtonLeave = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
        })
    }

    return (
        <nav className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-lg z-50">
            <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-4 lg:py-3 lg:px-8">
                <img className="h-16 w-16" src="/logo.png" alt="" />

                <div className="hidden lg:flex items-center space-x-8">
                    <div className="relative group">
                        <button className="text-gray-300 hover:text-[#ff9000] transition-colors duration-200 flex items-center space-x-1">
                            <span>Services</span>
                            <svg
                                className="w-4 h-4 transition-transform group-hover:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                            <div
                                className="rounded-lg backdrop-blur-md border shadow-lg"
                                style={{
                                    background: "rgba(0, 0, 0, 0.8)",
                                    borderColor: "rgba(255, 144, 0, 0.2)",
                                }}
                            >
                                <a
                                    href="#"
                                    className="block px-4 py-3 text-gray-300 hover:text-[#ff9000] hover:bg-[#ff9000]/10 transition-colors"
                                >
                                    Social Media Marketing
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-3 text-gray-300 hover:text-[#ff9000] hover:bg-[#ff9000]/10 transition-colors"
                                >
                                    Content Creation
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-3 text-gray-300 hover:text-[#ff9000] hover:bg-[#ff9000]/10 transition-colors"
                                >
                                    Brand Strategy
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-3 text-gray-300 hover:text-[#ff9000] hover:bg-[#ff9000]/10 transition-colors"
                                >
                                    Analytics & Insights
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative group">
                        <button className="text-gray-300 hover:text-[#ff9000] transition-colors duration-200 flex items-center space-x-1">
                            <span>Portfolio</span>
                            <svg
                                className="w-4 h-4 transition-transform group-hover:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                            <div
                                className="rounded-lg backdrop-blur-md border shadow-lg"
                                style={{
                                    background: "rgba(0, 0, 0, 0.8)",
                                    borderColor: "rgba(255, 144, 0, 0.2)",
                                }}
                            >
                                <a
                                    href="#"
                                    className="block px-4 py-3 text-gray-300 hover:text-[#ff9000] hover:bg-[#ff9000]/10 transition-colors"
                                >
                                    Case Studies
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-3 text-gray-300 hover:text-[#ff9000] hover:bg-[#ff9000]/10 transition-colors"
                                >
                                    Client Success Stories
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-3 text-gray-300 hover:text-[#ff9000] hover:bg-[#ff9000]/10 transition-colors"
                                >
                                    Creative Showcase
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href="#" className="text-gray-300 hover:text-[#ff9000] transition-colors duration-200">
                        About
                    </a>
                    <a href="#" className="text-gray-300 hover:text-[#ff9000] transition-colors duration-200">
                        Contact
                    </a>
                </div>

                <button
                    className="hidden lg:block px-6 py-2 text-base rounded-full border border-[#ff9000] text-[#ff9000] hover:bg-[#ff9000] hover:text-black transition-all duration-200"
                    onMouseEnter={handleButtonHover}
                    onMouseLeave={handleButtonLeave}
                >
                    Get Started
                </button>

                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden p-2 text-gray-300 hover:text-[#ff9000] transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            <div
                ref={mobileMenuRef}
                className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-md border-t"
                style={{
                    background: "rgba(0, 0, 0, 0.9)",
                    borderColor: "rgba(255, 144, 0, 0.2)",
                    display: "none",
                    overflow: "hidden", 
                }}
            >
                <div className="px-4 py-6 space-y-4">
                    <div>
                        <button className="w-full text-left text-gray-300 hover:text-[#ff9000] transition-colors py-2 font-medium">
                            Services
                        </button>
                        <div className="pl-4 space-y-2 mt-2">
                            <a href="#" className="block text-gray-400 hover:text-[#ff9000] transition-colors py-1">
                                Social Media Marketing
                            </a>
                            <a href="#" className="block text-gray-400 hover:text-[#ff9000] transition-colors py-1">
                                Content Creation
                            </a>
                            <a href="#" className="block text-gray-400 hover:text-[#ff9000] transition-colors py-1">
                                Brand Strategy
                            </a>
                            <a href="#" className="block text-gray-400 hover:text-[#ff9000] transition-colors py-1">
                                Analytics & Insights
                            </a>
                        </div>
                    </div>

                    <div>
                        <button className="w-full text-left text-gray-300 hover:text-[#ff9000] transition-colors py-2 font-medium">
                            Portfolio
                        </button>
                        <div className="pl-4 space-y-2 mt-2">
                            <a href="#" className="block text-gray-400 hover:text-[#ff9000] transition-colors py-1">
                                Case Studies
                            </a>
                            <a href="#" className="block text-gray-400 hover:text-[#ff9000] transition-colors py-1">
                                Client Success Stories
                            </a>
                            <a href="#" className="block text-gray-400 hover:text-[#ff9000] transition-colors py-1">
                                Creative Showcase
                            </a>
                        </div>
                    </div>

                    <a href="#" className="block text-gray-300 hover:text-[#ff9000] transition-colors py-2 font-medium">
                        About
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-[#ff9000] transition-colors py-2 font-medium">
                        Contact
                    </a>

                    <div className="flex space-x-3 mt-6">
                        <button
                            className="flex-1 px-4 py-3 text-sm rounded-full border border-[#ff9000] text-[#ff9000] hover:bg-[#ff9000] hover:text-black transition-all duration-200"
                            onMouseEnter={handleButtonHover}
                            onMouseLeave={handleButtonLeave}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;