import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Instagram, Twitter, Linkedin } from 'lucide-react'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

function Home() {
    const heroRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const ctaRef = useRef(null)
    const hologramRef = useRef(null)
    const orbsRef = useRef(null)
    const gridRef = useRef(null)
    const mobileMenuRef = useRef(null)

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial setup - faster initial states
            gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
                opacity: 0,
                y: 30,
            })

            gsap.set(".floating-orb", {
                opacity: 0,
                scale: 0.8,
            })

            gsap.set(".grid-line", {
                scaleX: 0,
                transformOrigin: "left center",
            })

            gsap.set(".hologram-element", {
                opacity: 0,
                scale: 0.8,
                y: 20,
            })

            gsap.set(".floating-card", {
                opacity: 0,
                y: 30,
            })

            gsap.set(".connection-line", {
                scaleX: 0,
                transformOrigin: "left center",
            })

            // Faster entrance timeline
            const tl = gsap.timeline({ delay: 0.1 })

            // Quick grid animation
            tl.to(".grid-line", {
                scaleX: 1,
                duration: 0.8,
                stagger: 0.05,
                ease: "power2.out",
            })

            // Faster orbs
            tl.to(
                ".floating-orb",
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                },
                "-=0.6",
            )

            // Animated title
            tl.to(
                titleRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                },
                "-=0.4",
            )

            // Subtitle
            tl.to(
                subtitleRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                },
                "-=0.2",
            )

            // CTA buttons
            tl.to(
                ctaRef.current,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                },
                "-=0.3",
            )

            // Hologram elements - faster
            tl.to(
                ".hologram-element",
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                },
                "-=0.5",
            )

            tl.to(
                ".floating-card",
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power3.out",
                },
                "-=0.6",
            )

            tl.to(
                ".connection-line",
                {
                    scaleX: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                },
                "-=0.3",
            )

            // Continuous animations - more subtle
            gsap.to(".floating-orb", {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.3,
            })

            gsap.to(".glow-pulse", {
                scale: 1.05,
                opacity: 0.9,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            })

            gsap.to(".floating-card", {
                y: -10,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.5,
            })

            gsap.to(".hologram-glow", {
                scale: 1.1,
                opacity: 0.9,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            })

            gsap.to(".data-point", {
                scale: 1.2,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.2,
            })

            // Parallax effect
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                onUpdate: (self) => {
                    gsap.to(".parallax-slow", {
                        y: self.progress * 30,
                        duration: 0.3,
                    })
                    gsap.to(".parallax-fast", {
                        y: self.progress * 60,
                        duration: 0.3,
                    })
                },
            })
        }, heroRef)

        return () => ctx.revert()
    }, [])

    // Mobile menu animation
    useEffect(() => {
        if (mobileMenuRef.current) {
            if (isMobileMenuOpen) {
                gsap.to(mobileMenuRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    ease: "power2.out",
                })
            } else {
                gsap.to(mobileMenuRef.current, {
                    opacity: 0,
                    y: -10,
                    duration: 0.2,
                    ease: "power2.in",
                })
            }
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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <div ref={heroRef} className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#FCF6F1" }}>
            {/* Animated Grid Background */}
            <div ref={gridRef} className="absolute inset-0 opacity-20">
                {Array.from({ length: 15 }).map((_, i) => (
                    <div
                        key={i}
                        className="grid-line absolute h-px bg-gradient-to-r from-transparent via-[#ff9000] to-transparent"
                        style={{
                            top: `${(i + 1) * 6.67}%`,
                            left: 0,
                            right: 0,
                        }}
                    />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={`v-${i}`}
                        className="grid-line absolute w-px bg-gradient-to-b from-transparent via-[#ff9000] to-transparent"
                        style={{
                            left: `${(i + 1) * 10}%`,
                            top: 0,
                            bottom: 0,
                            transform: "scaleY(0)",
                            transformOrigin: "top center",
                        }}
                    />
                ))}
            </div>

            {/* Floating Orbs - Adjusted for light theme */}
            <div ref={orbsRef} className="absolute inset-0 pointer-events-none">
                <div className="floating-orb absolute top-20 left-20 w-24 h-24 rounded-full bg-[#ff9000] opacity-8 blur-xl glow-pulse" />
                <div className="floating-orb absolute top-40 right-32 w-16 h-16 rounded-full bg-[#ff9000] opacity-12 blur-lg parallax-slow" />
                <div className="hidden md:block floating-orb absolute bottom-40 left-32 w-32 h-32 rounded-full bg-[#ff9000] opacity-6 blur-2xl parallax-fast" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center mt-8 px-4 md:px-6 lg:px-8 pt-4 md:pt-0">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Content - Always on top for mobile */}
                        <div className="w-full space-y-6 md:space-y-8 text-center lg:text-left order-1">
                            {/* Title */}
                            <div ref={titleRef}>
                                <h1
                                    className="text-7xl font-heading tracking-wider lg:text-8xl xl:text-8xl font-black leading-none"
                                    style={{ color: "#010101" }}
                                >
                                    WE CREATE
                                    <br />
                                    <span className="relative inline-block" style={{ color: "#FF9000" }}>
                                        SOCIAL
                                        <div
                                            className="absolute -inset-1 md:-inset-2 lg:-inset-4 blur-lg md:blur-xl lg:blur-2xl opacity-20"
                                            style={{ backgroundColor: "#FF9000" }}
                                        />
                                    </span>
                                    <br />
                                    <span style={{ color: "#010101", opacity: 0.7 }}>EXPERIENCES</span>
                                </h1>
                            </div>

                            {/* Subtitle */}
                            <div ref={subtitleRef}>
                                <p
                                    className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                                    style={{ color: "#010101" }}
                                >
                                    That Drive <span className="text-[#ff9000] font-semibold">Engagement</span>,{" "}
                                    <span className="text-[#ff9000] font-semibold">Growth</span>, and{" "}
                                    <span className="text-[#ff9000] font-semibold">Success</span>
                                </p>
                            </div>

                            {/* CTA Buttons - Not full width on mobile */}
                            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button
                                    className="px-6 md:px-8 py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold rounded-full transition-all duration-200 max-w-xs mx-auto sm:mx-0"
                                    style={{
                                        backgroundColor: "#FF9000",
                                        color: "#010101",
                                        boxShadow: "0 20px 40px rgba(255, 144, 0, 0.25)",
                                    }}
                                    onMouseEnter={handleButtonHover}
                                    onMouseLeave={handleButtonLeave}
                                >
                                    Start Your Journey
                                </button>
                                <button
                                    className="px-6 md:px-8 py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold rounded-full border-2 border-[#ff9000] text-[#ff9000] hover:bg-[#ff9000] transition-all duration-200 max-w-xs mx-auto sm:mx-0"
                                    style={{
                                        color: "#FF9000",
                                    }}
                                    onMouseEnter={handleButtonHover}
                                    onMouseLeave={handleButtonLeave}
                                >
                                    View Portfolio
                                </button>
                            </div>
                        </div>

                        {/* Right Content - Below on mobile */}
                        <div ref={hologramRef} className="w-full flex justify-center lg:justify-end order-2 lg:mt-0">
                            <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[500px] lg:w-[450px] lg:h-[600px]">
                                {/* Central Hologram Core */}
                                <div className="hologram-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div
                                        className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full hologram-glow"
                                        style={{
                                            background:
                                                "radial-gradient(circle, rgba(255, 144, 0, 0.6) 0%, rgba(255, 144, 0, 0.15) 70%, transparent 100%)",
                                            boxShadow: "0 0 60px rgba(255, 144, 0, 0.4), inset 0 0 30px rgba(255, 144, 0, 0.2)",
                                        }}
                                    >
                                        <div className="absolute inset-3 sm:inset-4 rounded-full border-2 border-[#ff9000]/60 opacity-80" />
                                        <div className="absolute inset-6 sm:inset-8 rounded-full border border-[#ff9000]/40 opacity-60" />
                                    </div>
                                </div>

                                {/* Floating Analytics Cards */}
                                <div
                                    className="floating-card hologram-element absolute top-8 sm:top-12 md:top-16 left-2 sm:left-4 md:left-8 p-2 sm:p-3 md:p-4 rounded-lg backdrop-blur-md"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.8)",
                                        border: "1px solid rgba(255, 144, 0, 0.4)",
                                        boxShadow: "0 8px 32px rgba(255, 144, 0, 0.15)",
                                    }}
                                >
                                    <div className="text-[#ff9000] text-xs font-semibold mb-1">ENGAGEMENT</div>
                                    <div style={{ color: "#010101" }} className="text-sm sm:text-base md:text-lg font-bold">
                                        +247%
                                    </div>
                                    <div className="w-12 sm:w-14 md:w-16 h-1 bg-[#ff9000] rounded mt-1 sm:mt-2" />
                                </div>

                                <div
                                    className="floating-card hologram-element absolute top-20 sm:top-28 md:top-32 right-1 sm:right-2 md:right-4 p-2 sm:p-3 md:p-4 rounded-lg backdrop-blur-md"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.8)",
                                        border: "1px solid rgba(255, 144, 0, 0.4)",
                                        boxShadow: "0 8px 32px rgba(255, 144, 0, 0.15)",
                                    }}
                                >
                                    <div className="text-[#ff9000] text-xs font-semibold mb-1">REACH</div>
                                    <div style={{ color: "#010101" }} className="text-sm sm:text-base md:text-lg font-bold">
                                        2.4M
                                    </div>
                                    <div className="w-10 sm:w-12 md:w-12 h-1 bg-[#ff9000] rounded mt-1 sm:mt-2" />
                                </div>

                                <div
                                    className="floating-card hologram-element absolute bottom-20 sm:bottom-28 md:bottom-32 left-1 sm:left-2 md:left-4 p-2 sm:p-3 md:p-4 rounded-lg backdrop-blur-md"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.8)",
                                        border: "1px solid rgba(255, 144, 0, 0.4)",
                                        boxShadow: "0 8px 32px rgba(255, 144, 0, 0.15)",
                                    }}
                                >
                                    <div className="text-[#ff9000] text-xs font-semibold mb-1">CONVERSION</div>
                                    <div style={{ color: "#010101" }} className="text-sm sm:text-base md:text-lg font-bold">
                                        18.9%
                                    </div>
                                    <div className="w-12 sm:w-14 md:w-14 h-1 bg-[#ff9000] rounded mt-1 sm:mt-2" />
                                </div>

                                <div
                                    className="floating-card hologram-element absolute bottom-8 sm:bottom-12 md:bottom-16 right-2 sm:right-4 md:right-8 p-2 sm:p-3 md:p-4 rounded-lg backdrop-blur-md"
                                    style={{
                                        background: "rgba(255, 255, 255, 0.8)",
                                        border: "1px solid rgba(255, 144, 0, 0.4)",
                                        boxShadow: "0 8px 32px rgba(255, 144, 0, 0.15)",
                                    }}
                                >
                                    <div className="text-[#ff9000] text-xs font-semibold mb-1">ROI</div>
                                    <div style={{ color: "#010101" }} className="text-sm sm:text-base md:text-lg font-bold">
                                        340%
                                    </div>
                                    <div className="w-8 sm:w-10 md:w-10 h-1 bg-[#ff9000] rounded mt-1 sm:mt-2" />
                                </div>

                                {/* Connection Lines */}
                                <div className="connection-line absolute top-16 sm:top-20 md:top-24 left-12 sm:left-16 md:left-20 w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-[#ff9000] to-transparent opacity-60" />
                                <div className="connection-line absolute top-28 sm:top-36 md:top-40 right-12 sm:right-16 md:right-20 w-14 sm:w-16 md:w-20 h-px bg-gradient-to-l from-[#ff9000] to-transparent opacity-60" />
                                <div className="connection-line absolute bottom-28 sm:bottom-36 md:bottom-40 left-10 sm:left-12 md:left-16 w-18 sm:w-22 md:w-28 h-px bg-gradient-to-r from-[#ff9000] to-transparent opacity-60" />
                                <div className="connection-line absolute bottom-16 sm:bottom-20 md:bottom-24 right-16 sm:right-20 md:right-24 w-12 sm:w-14 md:w-16 h-px bg-gradient-to-l from-[#ff9000] to-transparent opacity-60" />

                                {/* Social Icons */}
                                <div className="hologram-element absolute top-4 sm:top-6 md:top-8 right-6 sm:right-8 md:right-12 p-1 rounded border border-[#ff9000]/60 flex items-center justify-center bg-white/50">
                                    <Instagram className="w-4 h-4 text-[#ff9000]" />
                                </div>

                                {/* Twitter */}
                                <div className="hologram-element absolute top-1/2 left-2 sm:left-3 md:left-4 p-1 rounded border border-[#ff9000]/60 flex items-center justify-center bg-white/50">
                                    <Twitter className="w-4 h-4 text-[#ff9000]" />
                                </div>

                                {/* LinkedIn */}
                                <div className="hologram-element absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/3 p-1 rounded border border-[#ff9000]/60 flex items-center justify-center bg-white/50">
                                    <Linkedin className="w-4 h-4 text-[#ff9000]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute hidden md:bottom-12 left-1/2 transform -translate-x-1/2 md:flex flex-col items-center">
                <div className="w-6 h-10 border-2 border-[#ff9000] rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-[#ff9000] rounded-full mt-2 animate-bounce" />
                </div>
                <p className="text-sm mt-2" style={{ color: "#010101", opacity: 0.6 }}>
                    Scroll to explore
                </p>
            </div>
        </div>
        
    )
}

export default Home
