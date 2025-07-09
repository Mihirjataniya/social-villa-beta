"use client"

import { useState, useEffect, useRef } from "react"
import {
  Play,
  ExternalLink,
  Instagram,
  Youtube,
  Camera,
  Briefcase,
  Award,
  Users,
  Target,
  TrendingUp,
} from "lucide-react"

export default function PortfolioPage() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [visibleItems, setVisibleItems] = useState(new Set())
  const [isLoaded, setIsLoaded] = useState(false)
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clients: 0,
    awards: 0,
    growth: 0,
  })
  const observerRef = useRef(null)

  const portfolioItems = [
    {
      id: 1,
      type: "video",
      title: "Brand Campaign 2024",
      client: "TechCorp",
      category: "Video Production",
      size: "large",
      thumbnail: "https://i.pinimg.com/736x/8d/db/b7/8ddbb7d959eb9edfe13c01bb47d796ae.jpg",
      duration: "2:30",
    },
    {
      id: 2,
      type: "photo",
      title: "Product Photography",
      client: "Fashion Brand",
      category: "Photography",
      size: "medium",
      thumbnail: "https://i.pinimg.com/736x/0a/26/bd/0a26bd369ce6f4e842f6ade2eb3d80cc.jpg",
    },
    {
      id: 3,
      type: "reel",
      title: "Social Media Reel",
      client: "Restaurant Chain",
      category: "Social Media",
      size: "small",
      thumbnail: "https://i.pinimg.com/736x/c8/a7/c3/c8a7c3a22a8f1e23c11bfe498146f2d6.jpg",
      platform: "instagram",
    },
    {
      id: 4,
      type: "case-study",
      title: "Complete Rebrand",
      client: "StartupXYZ",
      category: "Branding",
      size: "medium",
      description: "Increased brand recognition by 300% through strategic rebranding and digital campaign.",
      thumbnail: "https://i.pinimg.com/736x/be/d4/5b/bed45bb8a2af4040175bf74747027eb5.jpg",
      metrics: "+300% Brand Recognition",
    },
    {
      id: 5,
      type: "video",
      title: "Documentary Style",
      client: "Non-Profit Org",
      category: "Documentary",
      size: "medium",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop",
      duration: "5:45",
    },
    {
      id: 6,
      type: "photo",
      title: "Event Coverage",
      client: "Corporate Event",
      category: "Event Photography",
      size: "small",
      thumbnail: "https://i.pinimg.com/736x/8b/a8/b3/8ba8b3a96dc4664ab32a795f61c2f0f5.jpg ",
    },
    {
      id: 7,
      type: "reel",
      title: "Behind the Scenes",
      client: "Music Artist",
      category: "Content Creation",
      size: "small",
      thumbnail: "https://i.pinimg.com/736x/0a/8f/19/0a8f19e0f3ce0441e8b32c464e7b2629.jpg",
      platform: "youtube",
    },
    {
      id: 8,
      type: "photo",
      title: "Lifestyle Shoot",
      client: "Wellness Brand",
      category: "Lifestyle Photography",
      size: "large",
      thumbnail: "https://i.pinimg.com/736x/ad/5a/6f/ad5a6f880f857a6f2fd31255801398c8.jpg",
    },
    {
      id: 9,
      type: "photo",
      title: "Architecture Photography",
      client: "Real Estate Co",
      category: "Architecture",
      size: "medium",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    },
    {
      id: 10,
      type: "video",
      title: "Product Launch",
      client: "Tech Startup",
      category: "Commercial",
      size: "small",
      thumbnail: "https://i.pinimg.com/736x/c6/43/b3/c643b3047519750c13985abce236e726.jpg",
      duration: "1:45",
    },
    {
      id: 11,
      type: "photo",
      title: "Food Photography",
      client: "Restaurant Group",
      category: "Food & Beverage",
      size: "small",
      thumbnail: "https://i.pinimg.com/736x/ed/91/b2/ed91b2abb01646546a21c62d42a6049d.jpg",
    },
    {
      id: 12,
      type: "reel",
      title: "Travel Content",
      client: "Tourism Board",
      category: "Travel",
      size: "medium",
      thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
      platform: "instagram",
    },
  ]

  const stats = [
    { icon: Briefcase, label: "Projects Completed", value: 150, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 85, suffix: "+" },
    { icon: Award, label: "Awards Won", value: 12, suffix: "" },
    { icon: TrendingUp, label: "Average Growth", value: 250, suffix: "%" },
  ]

  const Hashtags = [
    "#videoads", // videography
    "#brandshots", // photography
    "#startupboost", // startup
    "#foodpromo", // restaurant
    "#causemarketing", // non-profit
    "#musicbuzz", // music artist
    "#wellnesspush", // wellness brand
    "#realtyads", // real estate
  ]

  const services = [
    {
      icon: Camera,
      title: "Photography",
      description: "Professional product, lifestyle, and event photography",
      color: "from-[#FF9000]/10 to-[#FF9000]/5",
    },
    {
      icon: Play,
      title: "Video Production",
      description: "Cinematic brand campaigns and documentary content",
      color: "from-[#FF9000]/8 to-[#FF9000]/3",
    },
    {
      icon: Instagram,
      title: "Social Media",
      description: "Engaging content for all major social platforms",
      color: "from-[#FF9000]/12 to-[#FF9000]/4",
    },
    {
      icon: Target,
      title: "Brand Strategy",
      description: "Complete rebranding and digital transformation",
      color: "from-[#FF9000]/10 to-[#FF9000]/6",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
    // Animate stats
    const animateStats = () => {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps
      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        setAnimatedStats({
          projects: Math.floor(150 * progress),
          clients: Math.floor(85 * progress),
          awards: Math.floor(12 * progress),
          growth: Math.floor(250 * progress),
        })
        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, stepDuration)
    }

    const timer = setTimeout(animateStats, 1000)

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number.parseInt(entry.target.getAttribute("data-id") || "0")
            setVisibleItems((prev) => new Set([...prev, id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    return () => {
      clearTimeout(timer)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const getSizeClasses = (size) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2"
      case "medium":
        return "col-span-1 row-span-2"
      case "small":
        return "col-span-1 row-span-1"
      default:
        return "col-span-1 row-span-1"
    }
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case "video":
        return <Play className="w-5 h-5" />
      case "photo":
        return <Camera className="w-5 h-5" />
      case "reel":
        return <Instagram className="w-5 h-5" />
      case "case-study":
        return <Briefcase className="w-5 h-5" />
      default:
        return <Camera className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#FFF8ED", color: "#010101" }}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20"
          style={{ backgroundColor: "rgba(255, 144, 0, 0.1)" }}
        ></div>
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl animate-pulse opacity-15"
          style={{ backgroundColor: "rgba(255, 144, 0, 0.08)", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-2xl animate-pulse opacity-12"
          style={{ backgroundColor: "rgba(255, 144, 0, 0.06)", animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/3 w-48 h-48 rounded-full blur-2xl animate-pulse opacity-18"
          style={{ backgroundColor: "rgba(255, 144, 0, 0.07)", animationDelay: "6s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="px-6 py-12 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FF9000" }}
            >
              <Briefcase className="w-6 h-6" style={{ color: "#FFF8ED" }} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-wider" style={{ color: "#FF9000" }}>
              Portfolio
            </h1>
          </div>
          <p
            className={`text-xl md:text-2xl max-w-3xl transition-all duration-1000 delay-300 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{ color: "#010101" }}
          >
            Showcasing our creative work across video production, photography, and digital campaigns that drive results
            for our clients.
          </p>
        </div>
      </header>

      <div className="px-6 md:px-12 lg:px-24 mb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto md:overflow-visible no-scrollbar">
            <div className="flex flex-nowrap md:flex-wrap justify-start items-center gap-4 md:gap-2 min-w-max">
              {Hashtags.map((client, index) => (
                <div
                  key={client}
                  className={`px-6 py-3 backdrop-blur-sm rounded-lg border transition-all duration-500 hover:scale-105 group ${
                    isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                  }`}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    borderColor: "rgba(255, 144, 0, 0.2)",
                    transitionDelay: `${800 + index * 100}ms`,
                  }}
                  onMouseEnter={(e) => (e.target.style.borderColor = "rgba(255, 144, 0, 0.5)")}
                  onMouseLeave={(e) => (e.target.style.borderColor = "rgba(255, 144, 0, 0.2)")}
                >
                  <span
                    className="font-medium group-hover:text-[#FF9000] transition-colors duration-300"
                    style={{ color: "rgba(1, 1, 1, 0.7)" }}
                  >
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="px-6 md:px-12 lg:px-24 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                data-id={item.id}
                ref={(el) => {
                  if (el && observerRef.current) {
                    observerRef.current.observe(el)
                  }
                }}
                className={`${getSizeClasses(item.size)} group cursor-pointer transition-all duration-700 transform ${
                  visibleItems.has(item.id) || isLoaded
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-20 opacity-0 scale-95"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  animation: visibleItems.has(item.id) ? `slideInUp 0.8s ease-out ${index * 0.1}s both` : undefined,
                }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className="relative w-full h-full rounded-2xl overflow-hidden border transition-all duration-500 hover:scale-105 group-hover:rotate-1"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(255, 144, 0, 0.2)",
                    boxShadow: "0 10px 30px rgba(255, 144, 0, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "rgba(255, 144, 0, 0.5)"
                    e.target.style.boxShadow = "0 20px 40px rgba(255, 144, 0, 0.2)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "rgba(255, 144, 0, 0.2)"
                    e.target.style.boxShadow = "0 10px 30px rgba(255, 144, 0, 0.1)"
                  }}
                >
                  {/* Background Image/Content */}
                  <div className="absolute inset-0">
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div
                      className="absolute inset-0 transition-all duration-500"
                      style={{
                        background: "linear-gradient(to top, rgba(1, 1, 1, 0.8) 0%, transparent 50%)",
                      }}
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Top Section */}
                    <div className="flex items-start justify-between">
                      <div
                        className="flex items-center gap-2 px-3 py-1 backdrop-blur-sm rounded-full transition-all duration-300 group-hover:scale-105"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                      >
                        <div className="animate-pulse" style={{ color: "#FF9000" }}>
                          {getTypeIcon(item.type)}
                        </div>
                        <span className="text-xs font-medium" style={{ color: "#FF9000" }}>
                          {item.category}
                        </span>
                      </div>
                      {item.duration && (
                        <div
                          className="px-2 py-1 backdrop-blur-sm rounded text-xs transition-all duration-300"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            color: "#010101",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#FF9000"
                            e.target.style.color = "#FFFFFF"
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "rgba(255, 255, 255, 0.9)"
                            e.target.style.color = "#010101"
                          }}
                        >
                          {item.duration}
                        </div>
                      )}
                      {item.platform && (
                        <div
                          className="p-2 backdrop-blur-sm rounded-full transition-all duration-300 group-hover:scale-110"
                          style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                          onMouseEnter={(e) => (e.target.style.backgroundColor = "#FF9000")}
                          onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.9)")}
                        >
                          {item.platform === "instagram" ? (
                            <Instagram
                              className="w-4 h-4 transition-colors duration-300"
                              style={{ color: "#FF9000" }}
                            />
                          ) : (
                            <Youtube className="w-4 h-4 transition-colors duration-300" style={{ color: "#FF9000" }} />
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Section */}
                    <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                      {item.type === "case-study" && (
                        <div className="mb-4">
                          <p className="text-sm mb-2 transition-all duration-300" style={{ color: "#FFFFFF" }}>
                            {item.description}
                          </p>
                          <div className="font-semibold text-lg animate-pulse" style={{ color: "#FF9000" }}>
                            {item.metrics}
                          </div>
                        </div>
                      )}
                      <div className="flex items-end justify-between">
                        <div>
                          <h3
                            className="font-semibold text-lg mb-1 transition-all duration-300 transform group-hover:scale-105"
                            style={{ color: "#FFFFFF" }}
                            onMouseEnter={(e) => (e.target.style.color = "#FF9000")}
                            onMouseLeave={(e) => (e.target.style.color = "#FFFFFF")}
                          >
                            {item.title}
                          </h3>
                          <p
                            className="text-sm transition-all duration-300"
                            style={{ color: "rgba(255, 255, 255, 0.8)" }}
                          >
                            {item.client}
                          </p>
                        </div>
                        <div
                          className={`p-2 rounded-full transition-all duration-500 transform ${
                            hoveredCard === item.id ? "scale-110 rotate-12" : "scale-0 rotate-0"
                          }`}
                          style={{ backgroundColor: "#FF9000" }}
                        >
                          <ExternalLink className="w-4 h-4" style={{ color: "#FFFFFF" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Play Button for Videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 transform ${
                          hoveredCard === item.id ? "scale-125 rotate-12" : "scale-100 rotate-0"
                        }`}
                        style={{
                          backgroundColor: "#FF9000",
                          boxShadow: hoveredCard === item.id ? "0 0 30px rgba(255, 144, 0, 0.5)" : "none",
                        }}
                      >
                        <Play className="w-6 h-6 ml-1 transition-transform duration-300" style={{ color: "#FFFFFF" }} />
                      </div>
                    </div>
                  )}

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute inset-0 rounded-2xl border-2 animate-pulse"
                      style={{ borderColor: "#FF9000" }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-24 mb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 hover:scale-105 group ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "rgba(255, 144, 0, 0.2)",
                  transitionDelay: `${800 + index * 150}ms`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "rgba(255, 144, 0, 0.5)"
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "rgba(255, 144, 0, 0.2)"
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="p-2 rounded-lg transition-colors duration-300"
                    style={{ backgroundColor: "rgba(255, 144, 0, 0.1)" }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(255, 144, 0, 0.2)")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(255, 144, 0, 0.1)")}
                  >
                    <stat.icon className="w-5 h-5" style={{ color: "#FF9000" }} />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1" style={{ color: "#FF9000" }}>
                  {index === 0
                    ? animatedStats.projects
                    : index === 1
                      ? animatedStats.clients
                      : index === 2
                        ? animatedStats.awards
                        : animatedStats.growth}
                  {stat.suffix}
                </div>
                <div
                  className="text-sm transition-colors duration-300"
                  style={{ color: "rgba(1, 1, 1, 0.6)" }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(1, 1, 1, 0.8)")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(1, 1, 1, 0.6)")}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-6 md:px-12 lg:px-24 mb-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: "#FF9000" }}>
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`bg-gradient-to-br ${service.color} backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 hover:scale-105 group cursor-pointer ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{
                  borderColor: "rgba(255, 144, 0, 0.2)",
                  transitionDelay: `${1200 + index * 100}ms`,
                }}
                onMouseEnter={(e) => (e.target.style.borderColor = "rgba(255, 144, 0, 0.5)")}
                onMouseLeave={(e) => (e.target.style.borderColor = "rgba(255, 144, 0, 0.2)")}
              >
                <div className="mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "rgba(255, 144, 0, 0.1)" }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(255, 144, 0, 0.2)")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "rgba(255, 144, 0, 0.1)")}
                  >
                    <service.icon className="w-6 h-6" style={{ color: "#FF9000" }} />
                  </div>
                </div>
                <h3
                  className="text-xl font-semibold mb-2 transition-colors duration-300"
                  style={{ color: "#010101" }}
                  onMouseEnter={(e) => (e.target.style.color = "#FF9000")}
                  onMouseLeave={(e) => (e.target.style.color = "#010101")}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm transition-colors duration-300"
                  style={{ color: "rgba(1, 1, 1, 0.7)" }}
                  onMouseEnter={(e) => (e.target.style.color = "rgba(1, 1, 1, 0.9)")}
                  onMouseLeave={(e) => (e.target.style.color = "rgba(1, 1, 1, 0.7)")}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
