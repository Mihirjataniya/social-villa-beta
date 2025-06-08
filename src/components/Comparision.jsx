import { useState, useEffect, useRef } from "react"
import { Check, X, Zap, Target, TrendingUp, Users, Globe, BarChart3 } from "lucide-react"

const services = [
    {
        icon: <Target className="w-6 h-6" />,
        name: "Strategic Planning",
        us: "AI-Powered Market Analysis",
        others: "Basic Market Research",
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        name: "SEO Optimization",
        us: "Advanced AI SEO + Real-time Monitoring",
        others: "Standard SEO Practices",
    },
    {
        icon: <Users className="w-6 h-6" />,
        name: "Social Media Management",
        us: "24/7 AI-Assisted Content Creation",
        others: "Manual Posting Schedule",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        name: "Web Development",
        us: "Next-Gen Tech Stack + Performance",
        others: "Basic Website Templates",
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        name: "Analytics & Reporting",
        us: "Real-time AI Insights Dashboard",
        others: "Monthly PDF Reports",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        name: "Campaign Automation",
        us: "Fully Automated Multi-Channel",
        others: "Manual Campaign Management",
    },
]

const features = [
    { name: "24/7 Support", us: true, others: false },
    { name: "AI-Powered Tools", us: true, others: false },
    { name: "Real-time Analytics", us: true, others: false },
    { name: "Custom Solutions", us: true, others: true },
    { name: "Multi-platform Integration", us: true, others: false },
    { name: "Performance Guarantee", us: true, others: false },
    { name: "Dedicated Account Manager", us: true, others: true },
    { name: "Advanced Automation", us: true, others: false },
]

export default function Comparison() {
    const [activeTab, setActiveTab] = useState("services")
    const containerRef = useRef(null)
    const headerRef = useRef(null)
    const tabRef = useRef(null)
    const servicesRef = useRef([])
    const featuresRef = useRef([])
    const ctaRef = useRef(null)
    const floatingBgRef = useRef([])

    useEffect(() => {
        // Load GSAP and ScrollTrigger
        const script1 = document.createElement('script')
        script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
        script1.onload = () => {
            const script2 = document.createElement('script')
            script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'
            script2.onload = initAnimations
            document.head.appendChild(script2)
        }
        document.head.appendChild(script1)

        return () => {
            if (window.ScrollTrigger) {
                window.ScrollTrigger.getAll().forEach(trigger => trigger.kill())
            }
        }
    }, [])

    useEffect(() => {
        if (window.gsap && window.ScrollTrigger) {
            initAnimations()
        }
    }, [activeTab])

    const initAnimations = () => {
        if (!window.gsap || !window.ScrollTrigger) return

        const gsap = window.gsap
        const ScrollTrigger = window.ScrollTrigger

        gsap.registerPlugin(ScrollTrigger)

        // Refresh ScrollTrigger to handle dynamic content
        ScrollTrigger.refresh()

        // Header animation
        if (headerRef.current) {
            gsap.fromTo(headerRef.current.children,
                {
                    opacity: 0,
                    y: 100,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        }

        // Tab navigation animation
        if (tabRef.current) {
            gsap.fromTo(tabRef.current,
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: tabRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        }

        // Services animation
        if (activeTab === "services") {
            servicesRef.current.forEach((service, index) => {
                if (service) {
                    // Service row animation
                    gsap.fromTo(service,
                        {
                            opacity: 0,
                            x: index % 2 === 0 ? -100 : 100,
                            rotationY: index % 2 === 0 ? -15 : 15
                        },
                        {
                            opacity: 1,
                            x: 0,
                            rotationY: 0,
                            duration: 1,
                            delay: index * 0.1,
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: service,
                                start: "top 85%",
                                end: "bottom 15%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    )

                    // Hover animations for service cards
                    const cards = service.querySelectorAll('.service-card')
                    cards.forEach((card, cardIndex) => {
                        card.addEventListener('mouseenter', () => {
                            gsap.to(card, {
                                scale: 1.05,
                                rotationY: cardIndex === 1 ? 5 : -2,
                                duration: 0.3,
                                ease: "power2.out"
                            })
                        })

                        card.addEventListener('mouseleave', () => {
                            gsap.to(card, {
                                scale: 1,
                                rotationY: 0,
                                duration: 0.3,
                                ease: "power2.out"
                            })
                        })
                    })
                }
            })
        }

        // Features animation
        if (activeTab === "features") {
            featuresRef.current.forEach((feature, index) => {
                if (feature) {
                    gsap.fromTo(feature,
                        {
                            opacity: 0,
                            x: -50,
                            backgroundColor: "rgba(255, 255, 255, 0)"
                        },
                        {
                            opacity: 1,
                            x: 0,
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: feature,
                                start: "top 90%",
                                toggleActions: "play none none reverse"
                            }
                        }
                    )

                    // Animated check/cross icons
                    const icons = feature.querySelectorAll('.feature-icon')
                    icons.forEach(icon => {
                        gsap.fromTo(icon,
                            {
                                scale: 0,
                                rotation: -180
                            },
                            {
                                scale: 1,
                                rotation: 0,
                                duration: 0.5,
                                delay: index * 0.1 + 0.3,
                                ease: "back.out(1.7)",
                                scrollTrigger: {
                                    trigger: feature,
                                    start: "top 90%",
                                    toggleActions: "play none none reverse"
                                }
                            }
                        )
                    })
                }
            })
        }

        // CTA animation
        if (ctaRef.current) {
            gsap.fromTo(ctaRef.current.children,
                {
                    opacity: 0,
                    y: 80,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            )
        }

        // Floating background elements
        floatingBgRef.current.forEach((bg, index) => {
            if (bg) {
                gsap.to(bg, {
                    y: -30,
                    rotation: 360,
                    duration: 20 + index * 5,
                    repeat: -1,
                    ease: "none"
                })

                gsap.to(bg, {
                    x: 50,
                    duration: 15 + index * 3,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                })
            }
        })

        // Parallax effect for background elements
        gsap.to(".parallax-slow", {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })

        gsap.to(".parallax-fast", {
            yPercent: -100,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })
    }

    return (
        <div ref={containerRef} className=" bg-[#000000] mt-18 md:mt-24 p-4 relative overflow-hidden">
            {/* Floating Background Elements */}
            <div
                ref={el => floatingBgRef.current[0] = el}
                className="parallax-slow absolute top-20 left-10 w-64 h-64 bg-gradient-radial from-orange-500/20 to-transparent rounded-full blur-xl"
            />
            <div
                ref={el => floatingBgRef.current[1] = el}
                className="parallax-fast absolute top-96 right-20 w-96 h-96 bg-gradient-radial from-orange-400/10 to-transparent rounded-full blur-2xl"
            />
            <div
                ref={el => floatingBgRef.current[2] = el}
                className="parallax-slow absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-radial from-orange-600/15 to-transparent rounded-full blur-xl"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div ref={headerRef} className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFAF5]/10 border border-[#FF9000]/30 mb-4">
                        <Zap className="w-4 h-4 text-[#FF9000]" />
                        <span className="text-[#FF9000] text-sm font-medium">Next-Gen Marketing</span>
                    </div>
                    <h1 className="text-4xl font-heading tracking-wide md:text-6xl font-bold text-[#FF9000] mb-4">
                        Why Choose Us?
                    </h1>
                    <p className="text-lg text-[#FFFAF5] max-w-3xl mx-auto">
                        Experience the future of digital marketing with our AI-powered solutions that deliver results beyond traditional agencies.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div ref={tabRef} className="flex justify-center mb-8">
                    <div className="bg-[#FFFAF5]/10 backdrop-blur-sm rounded-full p-1 border border-[#FF9000]/30">
                        <button
                            onClick={() => setActiveTab("services")}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === "services"
                                    ? "bg-[#FF9000] text-black shadow-lg"
                                    : "text-[#FFFAF5] hover:text-white"
                                }`}
                        >
                            Services Comparison
                        </button>
                        <button
                            onClick={() => setActiveTab("features")}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeTab === "features"
                                    ? "bg-[#FF9000] text-black shadow-lg"
                                    : "text-[#FFFAF5] hover:text-white"
                                }`}
                        >
                            Features Matrix
                        </button>
                    </div>
                </div>

                {/* Services Comparison */}
                {activeTab === "services" && (
                    <div className="grid gap-6 mb-12">
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div></div>
                            <div className="text-center">
                                <div className="bg-[#FF9000] p-[1px] rounded-2xl">
                                    <div className="bg-[#000000] rounded-2xl p-4">
                                        <h3 className="text-xl font-bold text-white mb-1">Our Agency</h3>
                                        <p className="text-[#FF9000]">Next-Gen Solutions</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div style={{
                                    borderLeftColor: '#FF9000',
                                    backdropFilter: 'blur(10px)',
                                    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)'
                                }} className="border border-[#FF9000]/30 rounded-2xl p-4">
                                    <h3 className="text-xl font-bold text-[#FFFAF5] mb-1">Other Agencies</h3>
                                    <p className="text-[#FFFAF5]/70">Traditional Approach</p>
                                </div>
                            </div>
                        </div>

                        {services.map((service, index) => (
                            <div
                                key={index}
                                ref={el => servicesRef.current[index] = el}
                                className="grid md:grid-cols-3 gap-6 items-center group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-2 rounded-xl bg-[#FFFAF5]/10 border border-[#FF9000]/30 text-[#FF9000]">
                                        {service.icon}
                                    </div>
                                    <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                                </div>

                                <div className="service-card bg-[#FF9000]/10 border border-[#FF9000]/30 rounded-xl p-4 transition-all duration-300">
                                    <p className="text-[#FF9000] font-medium">{service.us}</p>
                                </div>

                                <div style={{
                                    borderLeftColor: '#FF9000',
                                    backdropFilter: 'blur(10px)',
                                    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)'
                                }} className="service-card border border-[#FFFAF5]/30 rounded-xl p-4 transition-all duration-300">
                                    <p className="text-[#FFFAF5]">{service.others}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Features Matrix */}
                {activeTab === "features" && (
                    <div style={{
                        borderLeftColor: '#FF9000',
                        backdropFilter: 'blur(10px)',
                        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)'
                    }} className=" backdrop-blur-sm border border-[#FF9000]/30 rounded-3xl p-6 mb-12">
                        <div className="grid md:grid-cols-3 gap-6 mb-6">
                            <div></div>
                            <div className="text-center">
                                <div className="bg-[#FF9000] p-[1px] rounded-2xl">
                                    <div className="bg-[#000000] rounded-2xl p-3">
                                        <h3 className="text-lg font-bold text-white">Our Agency</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <div style={{
                                    borderLeftColor: '#FF9000',
                                    backdropFilter: 'blur(10px)',
                                    background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)'
                                }} className=" border border-[#FF9000]/30 rounded-2xl p-3">
                                    <h3 className="text-lg font-bold text-[#FFFAF5]">Others</h3>
                                </div>
                            </div>
                        </div>

                        {features.map((feature, index) => (
                            <div
                                key={index}
                                ref={el => featuresRef.current[index] = el}
                                className="grid md:grid-cols-3 gap-6 items-center py-3 border-b border-[#FFFAF5]/10 last:border-b-0 rounded-lg transition-all duration-300 hover:bg-[#FFFAF5]/5"
                            >
                                <div className="text-white font-medium">{feature.name}</div>
                                <div className="flex justify-center">
                                    {feature.us ? (
                                        <div className="feature-icon flex items-center justify-center w-7 h-7 rounded-full bg-[#FF9000]">
                                            <Check className="w-4 h-4 text-black" />
                                        </div>
                                    ) : (
                                        <div className="feature-icon flex items-center justify-center w-7 h-7 rounded-full bg-[#FFFAF5]/20">
                                            <X className="w-4 h-4 text-[#FFFAF5]" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-center">
                                    {feature.others ? (
                                        <div className="feature-icon flex items-center justify-center w-7 h-7 rounded-full bg-[#FFFAF5]/20">
                                            <Check className="w-4 h-4 text-[#FFFAF5]" />
                                        </div>
                                    ) : (
                                        <div className="feature-icon flex items-center justify-center w-7 h-7 rounded-full bg-red-900/50">
                                            <X className="w-4 h-4 text-red-400" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* CTA Section */}
                <div ref={ctaRef} className="text-center">
                    <div className="bg-[#FF9000]/10 border border-[#FF9000]/30 rounded-3xl p-8 backdrop-blur-sm">
                        <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Future?</h2>
                        <p className="text-lg text-[#FFFAF5] mb-6 max-w-2xl mx-auto">
                            Join hundreds of businesses that have transformed their digital presence with our next-generation marketing solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-[#FF9000] text-black px-6 py-3 rounded-full font-semibold text-base hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                                Start Your Transformation
                            </button>
                            <button className="border border-[#FF9000]/50 text-[#FF9000] px-6 py-3 rounded-full font-semibold text-base hover:bg-[#FF9000]/10 transition-all duration-300">
                                Schedule a Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}