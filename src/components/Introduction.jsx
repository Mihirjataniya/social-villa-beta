import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

export default function Introduction() {
    const [activeCard, setActiveCard] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    const containerRef = useRef(null)
    const leftSectionRef = useRef(null)
    const rightSectionRef = useRef(null)

    const cards = [
        {
            id: "story",
            number: "01",
            category: "Our Story",
            title: "Born from Rebellion",
            subtitle: "Against boring marketing",
            description:
                "We started because we were tired of agencies that played it safe. Every brand deserves to be unforgettable.",
            visual: "story",
            stats: { label: "Founded", value: "2019" },
        },
        {
            id: "philosophy",
            number: "02",
            category: "Philosophy",
            title: "Think Different",
            subtitle: "Execute Flawlessly",
            description:
                "Strategy without creativity is just planning. Creativity without strategy is just art. We master both.",
            visual: "philosophy",
            stats: { label: "Campaigns", value: "200+" },
        },
        {
            id: "approach",
            number: "03",
            category: "Our Approach",
            title: "Data Meets Magic",
            subtitle: "Where analytics inspire art",
            description:
                "We don't choose between data and creativity. We use insights to fuel imagination and create campaigns that convert.",
            visual: "approach",
            stats: { label: "ROI Average", value: "340%" },
        },
        {
            id: "team",
            number: "04",
            category: "The Team",
            title: "Diverse Minds",
            subtitle: "United Vision",
            description:
                "Strategists, creatives, analysts, and dreamers. Different backgrounds, shared obsession with exceptional work.",
            visual: "team",
            stats: { label: "Team Size", value: "24" },
        },
    ]

    useEffect(() => {
        const loadGSAP = async () => {

            // Set initial states - elements hidden off-screen
            gsap.set(leftSectionRef.current, { x: -100, opacity: 0 })
            gsap.set(rightSectionRef.current, { x: 100, opacity: 0 })

            // Set up intersection observer for scroll-triggered animation
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && !hasAnimated) {
                            setHasAnimated(true)

                            // Animate left section from left
                            gsap.to(leftSectionRef.current, {
                                x: 0,
                                opacity: 1,
                                duration: 1,
                                ease: "power3.out",
                                delay: 0.2
                            })

                            // Animate right section from right
                            gsap.to(rightSectionRef.current, {
                                x: 0,
                                opacity: 1,
                                duration: 1,
                                ease: "power3.out",
                                delay: 0.4
                            })

                            // Animate static elements after sections are in place
                            setTimeout(() => {
                                // gsap.fromTo(
                                //     ".hero-static-element:not(.animated)",
                                //     { opacity: 0, y: 30 },
                                //     {
                                //         opacity: 1,
                                //         y: 0,
                                //         duration: 0.8,
                                //         ease: "power3.out",
                                //         stagger: 0.1,
                                //         onComplete: () => {
                                //             document.querySelectorAll(".hero-static-element").forEach((el) => {
                                //                 el.classList.add("animated")
                                //             })
                                //         },
                                //     },
                                // )

                                // Floating elements animation - only on desktop
                                gsap.to(".float-element", {
                                    y: -10,
                                    duration: 2,
                                    ease: "power1.inOut",
                                    yoyo: true,
                                    repeat: -1,
                                    stagger: 0.3,
                                })
                            }, 800)
                        }
                    })
                },
                {
                    threshold: 0.3, // Trigger when 30% of component is visible
                    rootMargin: '-50px 0px' // Add some margin for better timing
                }
            )
            // Animate numbers when they enter the viewport
            gsap.utils.toArray(".stat-number").forEach((el) => {
                const value = parseInt(el.getAttribute("data-count"))
                gsap.fromTo(
                    el,
                    { innerText: 0 },
                    {
                        innerText: value,
                        delay: 0.7,
                        duration: 1.5,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                        snap: { innerText: 1 },
                        onUpdate: function () {
                            el.innerText = Math.floor(el.innerText) + "+"
                        },
                    }
                )
            })

            if (containerRef.current) {
                observer.observe(containerRef.current)
            }

            // Cleanup observer
            return () => {
                if (containerRef.current) {
                    observer.unobserve(containerRef.current)
                }
            }
        }

        loadGSAP()

        // Auto-advance cards
        // const interval = setInterval(() => {
        //     if (!isTransitioning && hasAnimated) {
        //         setActiveCard((prev) => (prev + 1) % cards.length)
        //     }
        // }, 5000)

        // return () => clearInterval(interval)
    }, [isTransitioning, cards.length, hasAnimated])
    const handleCardClick = (index) => {
        if (index !== activeCard && !isTransitioning) {
            setIsTransitioning(true)
            setActiveCard(index)
            setTimeout(() => setIsTransitioning(false), 400)
        }
    }

    const handlePrevious = () => {
        if (!isTransitioning) {
            // setIsTransitioning(true)
            setActiveCard((prev) => (prev - 1 + cards.length) % cards.length)
            // setTimeout(() => setIsTransitioning(false), 400)
        }
    }

    const handleNext = () => {
        if (!isTransitioning) {
            // setIsTransitioning(true)
            setActiveCard((prev) => (prev + 1) % cards.length)
            // setTimeout(() => setIsTransitioning(false), 400)
        }
    }


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
    const getVisualElement = (visual) => {
        const elements = {
            story: (
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff9000]/15 to-[#ff9000]/5 rounded-2xl"></div>
                    <div className="absolute bottom-6 right-6 lg:bottom-12 lg:right-12 w-12 h-1 lg:w-24 lg:h-2 bg-[#ff9000]/70 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl lg:text-6xl font-black text-[#ff9000]/25">
                        2019
                    </div>
                </div>
            ),
            philosophy: (
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#ff9000]/12 to-transparent rounded-2xl"></div>
                    <div className="absolute top-3 right-3 lg:top-6 lg:right-6 w-10 h-10 lg:w-20 lg:h-20 border border-[#ff9000]/40 rotate-45"></div>
                    <div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 w-16 h-0.5 lg:w-32 lg:h-1 bg-gradient-to-r from-[#ff9000] to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 lg:w-12 lg:h-12 bg-[#ff9000]/40 rounded-full blur-sm"></div>
                    </div>
                </div>
            ),
            approach: (
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#ff9000]/8 to-[#ff9000]/15 rounded-2xl"></div>
                    <div className="grid grid-cols-3 gap-2 absolute inset-8">
                        {[...Array(9)].map((_, i) => {
                            const opacity = i % 3 === 0 ? 0.15 : i % 3 === 1 ? 0.25 : 0.35
                            return (
                                <div key={i} className="rounded" style={{ backgroundColor: `rgba(255, 144, 0, ${opacity})` }}></div>
                            )
                        })}
                    </div>
                </div>
            ),
            team: (
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-tl from-[#ff9000]/20 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 w-8 h-8 lg:w-16 lg:h-16 border-2 border-[#ff9000]/50 rounded-lg rotate-12"></div>
                </div>
            ),
        }
        return elements[visual]
    }

    return (
        <div
            ref={containerRef}
            className="max-w-[85rem] mx-auto relative min-h-screen overflow-x-hidden mt-12"
            style={{ backgroundColor: "#FCF6F1", color: "#010101" }}
        >
            <div className="flex flex-col lg:flex-row h-full">
                {/* Left Side - Navigation & Info */}
                <div
                    ref={leftSectionRef}
                    className="w-full lg:w-[45%] flex flex-col justify-between border-b lg:border-b-0 border-[#010101]/10 p-6 lg:p-8"
                >
                    {/* Header */}
                    <div>
                        <div className="hero-static-element mb-4 lg:mb-8">
                            <h1
                                className="text-4xl font-heading tracking-wider lg:text-7xl text-nowrap font-black mb-1 lg:mb-2"
                                style={{ color: "#010101" }}
                            >
                                About <span className="text-[#ff9000]">Social Villa</span>
                            </h1>
                            <p className="text-base text-[#010101]">
                                Where brands become legends
                            </p>
                        </div>

                        {/* Enhanced Left Content - Simplified for mobile */}
                        <div className="space-y-6 lg:space-y-8 mb-8 lg:mb-12">
                            {/* Mission Statement */}
                            <div className="hero-static-element">
                                <h3 className="text-base lg:text-2xl font-semibold text-[#ff9000] mb-1 lg:mb-3">Our Mission</h3>
                                <p className="text-base leading-relaxed text-[#010101]">
                                    Transform ordinary brands into extraordinary experiences that captivate audiences and drive meaningful engagement.
                                </p>
                            </div>

                            <div className="hero-static-element space-y-2 lg:space-y-4">
                                <h3 className="text-base lg:text-xl font-semibold text-[#ff9000] mb-2 lg:mb-3">
                                    Core Values
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 lg:gap-y-3">
                                    {[
                                        "Innovation First",
                                        "Data-Driven",
                                        "Client Obsessed",
                                        "Integrity Always",
                                        "Continuous Learning",
                                        "Impact Oriented"
                                    ].map((value) => (
                                        <div key={value} className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-[#ff9000] rounded-full"></div>
                                            <span className="text-base leading-relaxed text-[#010101]">
                                                {value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Bottom Stats - Simplified for mobile */}
                    <div className="hero-static-element">
                        <div className="grid grid-cols-4 lg:grid-cols-2 gap-2 lg:gap-4">
                            <div>
                                <div className="text-xl lg:text-3xl font-black text-[#ff9000] stat-number" data-count="5">
                                    5+
                                </div>
                                <div className="text-xs uppercase tracking-wider" style={{ color: "#010101", opacity: 0.6 }}>
                                    Years
                                </div>
                            </div>
                            <div>
                                <div className="text-xl lg:text-3xl font-black text-[#ff9000] stat-number" data-count="50">
                                    50+
                                </div>
                                <div className="text-xs uppercase tracking-wider" style={{ color: "#010101", opacity: 0.6 }}>
                                    Clients
                                </div>
                            </div>
                            <div>
                                <div className="text-xl lg:text-3xl font-black text-[#ff9000] stat-number" data-count="98">
                                    98%
                                </div>
                                <div className="text-xs uppercase tracking-wider" style={{ color: "#010101", opacity: 0.6 }}>
                                    Retention
                                </div>
                            </div>
                            <div>
                                <div className="text-xl lg:text-3xl font-black text-[#ff9000]">24/7</div>
                                <div className="text-xs uppercase tracking-wider" style={{ color: "#010101", opacity: 0.6 }}>
                                    Support
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="mt-8 bg-[#ff9000]/80 hover:bg-[#ff9000] text-white text-sm sm:text-base md:text-lg font-bold rounded-full transition-all duration-200 w-44 py-2"
                        onMouseEnter={handleButtonHover}
                        onMouseLeave={handleButtonLeave}
                    >
                        Know More
                    </button>
                </div>

                {/* Right Side - Content Display */}
                <div ref={rightSectionRef} className="w-full relative min-h-0 max-h-none   lg:max-h-[100vh]">
                    {/* Visual Background */}
                    <div className="absolute inset-0 p-4 lg:p-12">
                        <div className="w-full h-full rounded-xl lg:rounded-3xl overflow-hidden">
                            {getVisualElement(cards[activeCard].visual)}
                        </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 h-full flex flex-col justify-center p-8 lg:p-16">
                        <div
                            key={activeCard}
                            className="right-card-content animate-in fade-in slide-in-from-right-4 duration-400 md:px-6"
                        >
                            {/* Category Badge */}
                            <div className="inline-flex items-center space-x-2 bg-[#ff9000]/10 border border-[#ff9000]/30 rounded-full px-2 py-1 lg:px-4 lg:py-2 mb-2 lg:mb-4">
                                <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#ff9000] rounded-full"></div>
                                <span className="text-[#ff9000] text-xs lg:text-sm font-medium">{cards[activeCard].category}</span>
                            </div>

                            {/* Main Content */}
                            <h2 className="text-2xl lg:text-5xl font-bold mb-1 lg:mb-2 leading-tight text-[#010101]" >
                                {cards[activeCard].title}
                            </h2>
                            <h3 className="text-lg lg:text-2xl font-light text-[#ff9000] mb-2 lg:mb-4 italic">
                                {cards[activeCard].subtitle}
                            </h3>
                            <p
                                className="text-base lg:text-xl leading-relaxed mb-3 lg:mb-8 max-w-lg"
                                style={{ color: "#010101", opacity: 0.8 }}
                            >
                                {cards[activeCard].description}
                            </p>

                            {/* Stat Display */}
                            <div className="flex items-center space-x-3">
                                <div
                                    className="border flex items-center justify-center flex-col rounded-lg px-4 py-2 lg:px-6 lg:py-4"
                                    style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                                        borderColor: "rgba(1, 1, 1, 0.1)",
                                    }}
                                >
                                    <div className="text-xl lg:text-3xl font-black text-[#ff9000]">{cards[activeCard].stats.value}</div>
                                    <div className="text-xs uppercase tracking-wider" style={{ color: "#010101", opacity: 0.6 }}>
                                        {cards[activeCard].stats.label}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Controls - Simplified for mobile */}
                    <div className="absolute bottom-3 right-3 lg:bottom-8 lg:right-8 z-40 flex items-center space-x-1 lg:space-x-2">
                        <button
                            onClick={handlePrevious}
                            className="p-2 lg:p-3 border border-[#ff9000]/50 text-[#ff9000] rounded-full hover:bg-[#ff9000] hover:text-[#010101] transition-all"
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                        >
                            <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={2.5} />
                        </button>

                        <button
                            onClick={handleNext}
                            className="p-2 lg:p-3 border border-[#ff9000]/50 text-[#ff9000] rounded-full hover:bg-[#ff9000] hover:text-[#010101] transition-all"
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                        >
                            <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-in {
          animation: animate-in 0.4s ease-out;
        }
      `}</style>
        </div>
    )
}