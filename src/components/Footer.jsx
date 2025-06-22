import { useEffect, useRef } from "react"

function Footer() {
    const footerRef = useRef(null)

    useEffect(() => {
        // Check if we're in a browser environment
        if (typeof window === "undefined" || !footerRef.current) return

        // Dynamically import GSAP to avoid SSR issues
        const initializeAnimation = async () => {
            try {
                const { gsap } = await import("gsap")
                const { ScrollTrigger } = await import("gsap/ScrollTrigger")

                gsap.registerPlugin(ScrollTrigger)

                const elements = footerRef.current.querySelectorAll(".footer-item")

                // Set initial state
                gsap.set(elements, { opacity: 0, y: 80 })

                // Create animation
                gsap.to(elements, {
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                        // Add markers for debugging (remove in production)
                        // markers: true
                    },
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 1.2,
                    ease: "power3.out",
                })
            } catch (error) {
                // Fallback: make content visible if GSAP fails to load
                console.warn("GSAP failed to load, showing content without animation:", error)
                const elements = footerRef.current?.querySelectorAll(".footer-item")
                if (elements) {
                    elements.forEach(el => {
                        el.style.opacity = "1"
                        el.style.transform = "translateY(0)"
                    })
                }
            }
        }

        initializeAnimation()

        // Cleanup function
        return () => {
            if (typeof window !== "undefined" && window.ScrollTrigger) {
                window.ScrollTrigger.getAll().forEach(trigger => trigger.kill())
            }
        }
    }, [])

    return (
        <footer
            ref={footerRef}
            className="bg-gradient-to-br from-[#7a3700] via-[#a54d00] to-[#6b2f00] py-20 px-8 mt-18 relative overflow-hidden"
        >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,144,0,0.05)_0,transparent_70%)]" />

            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,144,0,0.05)_0,transparent_70%)]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,144,0,0.02)_25%,transparent_25%),linear-gradient(-45deg,rgba(255,144,0,0.02)_25%,transparent_25%)] bg-[size:100px_100px]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Logo and description */}
                    <div className="footer-item md:col-span-2">
                        <div className="mb-6">
                            <h2 className="text-5xl font-bold text-white mb-2">Social Villa</h2>
                        </div>
                        <p className="text-gray-200 text-lg leading-relaxed mb-6 max-w-md">
                            Transforming brands through innovative digital experiences that captivate, engage, and convert. Your
                            success is our passion.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { name: "Instagram", icon: "fab fa-instagram" },
                                { name: "Twitter", icon: "fab fa-twitter" },
                                { name: "LinkedIn", icon: "fab fa-linkedin-in" },
                                { name: "Behance", icon: "fab fa-behance" },
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    aria-label={social.name}
                                    className="w-12 h-12 bg-white/5 hover:bg-orange-500 border border-white/10 hover:border-orange-500 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 cursor-pointer"
                                >
                                    <i className={`${social.icon} text-xl`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="footer-item">
                        <h3 className="text-white text-xl font-bold mb-6">Services</h3>
                        <ul className="space-y-3">
                            {["Brand Strategy", "Creative Design", "Digital Marketing", "Content Creation"].map((service) => (
                                <li key={service}>
                                    <a
                                        href="#"
                                        className="text-gray-200 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-item">
                        <h3 className="text-white text-xl font-bold mb-6">Contact</h3>
                        <div className="space-y-3 text-gray-200">
                            <p>hello@socialvilla.com</p>
                            <p>+1 (555) 123-4567</p>
                            <p>
                                123 Creative Street
                                <br />
                                Design City, DC 12345
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer-item border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-200 text-center md:text-left mb-4 md:mb-0">
                        © 2025 Social Villa. All rights reserved. Crafted with passion and precision.
                    </div>
                    <div className="flex space-x-6 text-sm">
                        {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-gray-200 hover:text-orange-500 transition-colors duration-300 cursor-pointer"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer