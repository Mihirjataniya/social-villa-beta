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

export default function ComparisonSection() {
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
    const script1 = document.createElement("script")
    script1.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
    script1.onload = () => {
      const script2 = document.createElement("script")
      script2.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
      script2.onload = initAnimations
      document.head.appendChild(script2)
    }
    document.head.appendChild(script1)

    return () => {
      if ((window).ScrollTrigger) {
        ;(window).ScrollTrigger.getAll().forEach((trigger => trigger.kill()))
      }
    }
  }, [])

  useEffect(() => {
    if ((window).gsap && (window).ScrollTrigger) {
      initAnimations()
    }
  }, [activeTab])

  const initAnimations = () => {
    if (!(window).gsap || !(window).ScrollTrigger) return

    const gsap = (window).gsap
    const ScrollTrigger = (window).ScrollTrigger

    gsap.registerPlugin(ScrollTrigger)

    // Refresh ScrollTrigger to handle dynamic content
    ScrollTrigger.refresh()

    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
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
            toggleActions: "play none none reverse",
          },
        },
      )
    }

    // Tab navigation animation
    if (tabRef.current) {
      gsap.fromTo(
        tabRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
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
            toggleActions: "play none none reverse",
          },
        },
      )
    }

    // Services animation
    if (activeTab === "services") {
      servicesRef.current.forEach((service, index) => {
        if (service) {
          // Service row animation
          gsap.fromTo(
            service,
            {
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
              rotationY: index % 2 === 0 ? -15 : 15,
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
                toggleActions: "play none none reverse",
              },
            },
          )

          // Hover animations for service cards
          const cards = service.querySelectorAll(".service-card")
          cards.forEach((card, cardIndex) => {
            card.addEventListener("mouseenter", () => {
              gsap.to(card, {
                scale: 1.05,
                rotationY: cardIndex === 1 ? 5 : -2,
                duration: 0.3,
                ease: "power2.out",
              })
            })

            card.addEventListener("mouseleave", () => {
              gsap.to(card, {
                scale: 1,
                rotationY: 0,
                duration: 0.3,
                ease: "power2.out",
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
          gsap.fromTo(
            feature,
            {
              opacity: 0,
              x: -50,
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
                toggleActions: "play none none reverse",
              },
            },
          )

          // Animated check/cross icons
          const icons = feature.querySelectorAll(".feature-icon")
          icons.forEach((icon) => {
            gsap.fromTo(
              icon,
              {
                scale: 0,
                rotation: -180,
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
                  toggleActions: "play none none reverse",
                },
              },
            )
          })
        }
      })
    }

    // CTA animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current.children,
        {
          opacity: 0,
          y: 80,
          scale: 0.8,
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
            toggleActions: "play none none reverse",
          },
        },
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
          ease: "none",
        })

        gsap.to(bg, {
          x: 50,
          duration: 15 + index * 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
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
        scrub: true,
      },
    })

    gsap.to(".parallax-fast", {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  }

  return (
    <div ref={containerRef} className="bg-[#FFF8ED] py-16 px-4 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div
        ref={(el) => (floatingBgRef.current[0] = el)}
        className="parallax-slow absolute top-20 left-10 w-64 h-64 bg-gradient-radial from-orange-300/20 to-transparent rounded-full blur-xl"
      />
      <div
        ref={(el) => (floatingBgRef.current[1] = el)}
        className="parallax-fast absolute top-96 right-20 w-96 h-96 bg-gradient-radial from-orange-200/15 to-transparent rounded-full blur-2xl"
      />
      <div
        ref={(el) => (floatingBgRef.current[2] = el)}
        className="parallax-slow absolute bottom-20 left-1/4 w-48 h-48 bg-gradient-radial from-[#ff9000]/80/25 to-transparent rounded-full blur-xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100/80 backdrop-blur-sm border border-orange-200 mb-6 shadow-sm">
            <Zap className="w-4 h-4 text-[#ff9000]" />
            <span className="text-[#ff9000] text-sm font-semibold">Next-Gen Marketing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#010101] mb-6 font-heading tracking-wider">
            Why Choose <span className="text-[#ff9000]">Us?</span>
          </h1>
          <p className="text-xl  md:text-2xl text-[#010101] max-w-3xl mx-auto leading-relaxed">
            Experience the future of digital marketing with our AI-powered solutions that deliver results beyond
            traditional agencies.
          </p>
        </div>

        {/* Tab Navigation */}
        <div ref={tabRef} className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-full border-2 border-orange-200 shadow-lg overflow-hidden">
            <div className="flex">
              <button
                onClick={() => setActiveTab("services")}
                className={`px-8 py-3 font-semibold transition-all duration-300 ${
                  activeTab === "services"
                    ? "bg-[#ff9000]/80 text-white shadow-lg"
                    : "text-[#010101] hover:text-[#ff9000] hover:bg-orange-50"
                }`}
              >
                Services Comparison
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`px-8 py-3 font-semibold transition-all duration-300 ${
                  activeTab === "features"
                    ? "bg-[#ff9000]/80 text-white shadow-lg"
                    : "text-[#010101] hover:text-[#ff9000] hover:bg-orange-50"
                }`}
              >
                Features Matrix
              </button>
            </div>
          </div>
        </div>

        {/* Services Comparison */}
        {activeTab === "services" && (
          <div className="space-y-8 mb-16">
            {/* Header Row */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div></div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-[#ff9000]/80 to-[#ff9000] p-1 rounded-2xl shadow-xl">
                  <div className="bg-white rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-[#010101] mb-2">Our Agency</h3>
                    <p className="text-[#ff9000] font-semibold">Next-Gen Solutions</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/60 backdrop-blur-sm border-2 border-orange-200 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-[#010101] mb-2">Other Agencies</h3>
                  <p className="text-[#010101] font-semibold">Traditional Approach</p>
                </div>
              </div>
            </div>

            {/* Service Rows */}
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => (servicesRef.current[index] = el)}
                className="grid md:grid-cols-3 gap-6 items-center group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-orange-100 border-2 border-orange-200 text-[#ff9000] shadow-md group-hover:shadow-lg transition-all duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-medium text-[#010101]">{service.name}</h4>
                </div>

                <div className="service-card bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
                  <p className="text-[#ff9000] font-semibold">{service.us}</p>
                </div>

                <div className="service-card bg-white/60 backdrop-blur-sm border-2 border-[#010101] rounded-xl p-6 transition-all duration-300 hover:shadow-md">
                  <p className="text-[#010101] font-medium">{service.others}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features Matrix */}
        {activeTab === "features" && (
          <div className="bg-white/80 backdrop-blur-sm border-2 border-orange-200 rounded-3xl p-8 mb-16 shadow-xl">
            {/* Header Row */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div></div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-[#ff9000]/80 to-[#ff9000] p-1 rounded-2xl shadow-lg">
                  <div className="bg-[#ff9000] rounded-2xl p-4">
                    <h3 className="text-lg font-semibold text-white ">Our Agency</h3>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white border-2 border-[#010101] rounded-2xl p-4 shadow-md">
                  <h3 className="text-lg font-semibold text-[#010101]">Others</h3>
                </div>
              </div>
            </div>

            {/* Feature Rows */}
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (featuresRef.current[index] = el)}
                className="grid md:grid-cols-3 gap-6 items-center py-4 border-b border-orange-200/50 last:border-b-0 rounded-lg transition-all duration-300 hover:bg-orange-50/50"
              >
                <div className="text-[#010101] font-medium">{feature.name}</div>
                <div className="flex justify-center">
                  {feature.us ? (
                    <div className="feature-icon flex items-center justify-center w-8 h-8 rounded-full bg-[#ff9000]/80 shadow-lg">
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="feature-icon flex items-center justify-center w-8 h-8 rounded-full bg-[#010101] shadow-md">
                      <X className="w-5 h-5 text-[#010101]" strokeWidth={3} />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {feature.others ? (
                    <div className="feature-icon flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md">
                      <Check className="w-5 h-5 text-[#010101]" strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="feature-icon flex items-center justify-center w-8 h-8 rounded-full bg-red-100 shadow-md">
                      <X className="w-5 h-5 text-red-500" strokeWidth={3} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-300/30 rounded-full blur-xl animate-pulse" />
            <div
              className="absolute top-3/4 right-1/4 w-24 h-24 bg-[#ff9000]/80/30 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute top-1/2 left-1/3 w-20 h-20 bg-[#ff9000]/30 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-orange-300/20 to-[#ff9000]/80/20 rounded-full blur-2xl animate-bounce" />
            <div
              className="absolute bottom-10 left-10 w-36 h-36 bg-gradient-to-r from-[#ff9000]/80/20 to-[#ff9000]/20 rounded-full blur-2xl animate-bounce"
              style={{ animationDelay: "0.7s" }}
            />
          </div>

          <div ref={ctaRef} className="relative z-10 text-center">
            <div className="bg-white/90 backdrop-blur-md border-2 border-orange-200 rounded-3xl px-8 py-16 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-[#010101] mb-6">
                Ready to Experience the <span className="text-[#ff9000]">Future?</span>
              </h2>
              <p className="text-lg text-[#010101] mb-8 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of businesses that have transformed their digital presence with our next-generation
                marketing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#ff9000]/80 hover:bg-[#ff9000] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Start Your Transformation
                </button>
                <button className="border-2 border-orange-300 hover:border-[#ff9000]/80 text-[#010101] hover:text-[#ff9000] px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-300">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  )
}
