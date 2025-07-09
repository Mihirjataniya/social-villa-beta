import { useState, useEffect, useRef } from "react"
import { Award, Lightbulb, Rocket, Globe, MapPin, Users, Coffee } from "lucide-react"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleItems, setVisibleItems] = useState(new Set())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const observerRef = useRef(null)
  const heroRef = useRef(null)
  const elementsRef = useRef([])

  const timeline = [
    {
      year: 2021,
      title: "The Beginning",
      description: "Founded with a vision to transform how brands tell their stories through visual content.",
      achievements: ["First 5 clients", "Team of 3", "Local recognition"],
    },
    {
      year: 2022,
      title: "Growing Strong",
      description: "Expanded our services and team, winning our first industry awards.",
      achievements: ["25+ clients", "Team of 8", "First industry award", "New studio space"],
    },
    {
      year: 2023,
      title: "Making Waves",
      description: "Established ourselves as a leading creative agency with national recognition.",
      achievements: ["50+ clients", "Team of 12", "3 major awards", "International projects"],
    },
    {
      year: 2024,
      title: "The Future",
      description: "Continuing to innovate and push the boundaries of creative excellence.",
      achievements: ["85+ clients", "Team of 15", "Industry leadership", "Global expansion"],
    },
    {
      year: 2025,
      title: "Limitless Vision",
      description: "Redefining the creative industry with AI-driven content and immersive brand experiences.",
      achievements: ["120+ clients", "Team of 20+", "AI-powered production", "Metaverse campaigns"],
    },
  ]

  // Helper function to add element to ref array
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el)
    }
  }

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    // Enhanced Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-animate-id")
            if (id) {
              setVisibleItems((prev) => new Set([...prev, id]))
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    // Observe all elements with data-animate-id
    elementsRef.current.forEach((el) => {
      if (el && observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Animation classes helper
  const getAnimationClass = (id, baseAnimation) => {
    const isVisible = visibleItems.has(id)
    return `transition-all duration-1000 ease-out ${
      isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : baseAnimation
    }`
  }

  return (
    <div
      className="overflow-y-hidden overflow-x-hidden relative"
      style={{ backgroundColor: "#FFF8ED", color: "#010101" }}
    >
      {/* Advanced Background System */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic gradient orbs that follow mouse */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-10 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle, #FF9000 0%, transparent 70%)`,
            left: mousePosition.x - 400,
            top: mousePosition.y - 400,
            filter: "blur(100px)",
            transform: `scale(${0.5 + Math.sin(Date.now() * 0.001) * 0.1})`,
          }}
        />
        {/* Parallax background elements */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div
            className="absolute top-20 left-20 w-2 h-2 rounded-full opacity-30"
            style={{ backgroundColor: "#FF9000" }}
          />
          <div
            className="absolute top-40 right-32 w-1 h-1 rounded-full opacity-20"
            style={{ backgroundColor: "#FF9000" }}
          />
          <div
            className="absolute top-80 left-1/3 w-1.5 h-1.5 rounded-full opacity-25"
            style={{ backgroundColor: "#FF9000" }}
          />
          <div
            className="absolute bottom-40 right-20 w-2 h-2 rounded-full opacity-15"
            style={{ backgroundColor: "#FF9000" }}
          />
        </div>
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `linear-gradient(#FF9000 1px, transparent 1px), linear-gradient(90deg, #FF9000 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translate(${Math.sin(Date.now() * 0.0005) * 10}px, ${Math.cos(Date.now() * 0.0005) * 10}px)`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative mt-24 flex items-center justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div
            className={`transition-all duration-2000 ease-out ${
              isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
            }`}
          >
            <div className="relative inline-block mb-8">
              <h1 className="text-7xl md:text-9xl font-black tracking-tight relative">
                <span style={{ color: "#010101" }}>WE ARE THE</span>
                <br />
                <span
                  style={{
                    color: "#FF9000",
                    textShadow: "0 0 50px rgba(255, 144, 0, 0.2)",
                  }}
                >
                  CREATORS
                </span>
              </h1>
              {/* Animated underline */}
              <div
                className="absolute -bottom-4 left-1/2 h-1 transition-all duration-2000 ease-out"
                style={{
                  background: `linear-gradient(to right, transparent, #FF9000, transparent)`,
                  width: isLoaded ? "100%" : "0%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
          </div>
          <div
            className={`transition-all duration-2000 delay-500 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p
              className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-light"
              style={{ color: "#010101" }}
            >
              We don't just make content. We craft experiences that{" "}
              <span className="font-medium" style={{ color: "#FF9000" }}>
                ignite emotions
              </span>
              ,{" "}
              <span className="font-medium" style={{ color: "#FF9000" }}>
                drive action
              </span>
              , and{" "}
              <span className="font-medium" style={{ color: "#FF9000" }}>
                transform brands
              </span>{" "}
              into cultural phenomena.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-16 md:px-12 my-8 mt-32 mb-4 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={addToRefs}
              data-animate-id="mission-text"
              className={getAnimationClass("mission-text", "opacity-0 -translate-x-16")}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#FF9000" }}>
                Our Mission
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "#010101" }}>
                We believe every brand holds a unique narrative — a voice, a vision, a soul — waiting to be uncovered.
                Our mission is to discover that essence and bring it to life through striking visual storytelling that
                captivates hearts, sparks conversations, and delivers measurable business impact. Whether it's a single
                frame or a full campaign, we craft stories that leave a lasting impression.
              </p>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: "#010101" }}>
                From disruptive startups to legacy enterprises, we collaborate with forward-thinking brands to design
                content that doesn't just look stunning — it performs with purpose. Our work is built to thrive across
                platforms, connect with audiences on every screen, and amplify your brand's presence where it matters
                most — in the digital world and beyond.
              </p>
              <div className="flex flex-wrap gap-4">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ backgroundColor: "rgba(255, 144, 0, 0.1)" }}
                >
                  <Globe className="w-5 h-5" style={{ color: "#FF9000" }} />
                  <span className="text-sm font-medium" style={{ color: "#010101" }}>
                    Global Reach
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ backgroundColor: "rgba(255, 144, 0, 0.1)" }}
                >
                  <Rocket className="w-5 h-5" style={{ color: "#FF9000" }} />
                  <span className="text-sm font-medium" style={{ color: "#010101" }}>
                    Innovation Driven
                  </span>
                </div>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{ backgroundColor: "rgba(255, 144, 0, 0.1)" }}
                >
                  <Award className="w-5 h-5" style={{ color: "#FF9000" }} />
                  <span className="text-sm font-medium" style={{ color: "#010101" }}>
                    Award Winning
                  </span>
                </div>
              </div>
            </div>
            <div
              ref={addToRefs}
              data-animate-id="mission-image"
              className={getAnimationClass("mission-image", "opacity-0 translate-x-16 scale-95")}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  className="rounded-3xl w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{ background: "linear-gradient(to top, rgba(1, 1, 1, 0.4) 0%, transparent 50%)" }}
                ></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-semibold text-lg">Collaboration is at the heart of everything we do</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={addToRefs}
              data-animate-id="culture-images"
              className={`order-2 lg:order-1 ${getAnimationClass("culture-images", "opacity-0 -translate-x-16 scale-95")}`}
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=300&fit=crop"
                  alt="Office culture"
                  className="rounded-2xl w-full h-48 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=300&fit=crop"
                  alt="Team meeting"
                  className="rounded-2xl w-full h-48 object-cover mt-8 transform hover:scale-105 transition-transform duration-700"
                />
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=300&fit=crop"
                  alt="Creative workspace"
                  className="rounded-2xl w-full h-48 object-cover -mt-8 transform hover:scale-105 transition-transform duration-700"
                />
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop"
                  alt="Team celebration"
                  className="rounded-2xl w-full h-48 object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div
              ref={addToRefs}
              data-animate-id="culture-text"
              className={`order-1 lg:order-2 ${getAnimationClass("culture-text", "opacity-0 translate-x-16")}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#FF9000" }}>
                Our Culture
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "#010101" }}>
                We've built a culture where creativity thrives, collaboration flows naturally, and every team member
                feels empowered to bring their boldest ideas to life. Our workspace isn't just an office — it's a
                creative sanctuary where inspiration meets execution. From spontaneous brainstorming sessions to focused
                deep-work zones, every corner is designed to fuel imagination. We celebrate experimentation, encourage
                curiosity, and believe that magic happens when diverse minds come together with a shared vision. This is
                more than a team — it's a family of creators pushing boundaries every single day.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 144, 0, 0.1)" }}
                  >
                    <Coffee className="w-6 h-6" style={{ color: "#FF9000" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg" style={{ color: "#010101" }}>
                      Work-Life Balance
                    </h4>
                    <p style={{ color: "rgba(1, 1, 1, 0.6)" }}>Flexible hours and remote work options</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 144, 0, 0.1)" }}
                  >
                    <Lightbulb className="w-6 h-6" style={{ color: "#FF9000" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg" style={{ color: "#010101" }}>
                      Continuous Learning
                    </h4>
                    <p style={{ color: "rgba(1, 1, 1, 0.6)" }}>Regular workshops and skill development</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 144, 0, 0.1)" }}
                  >
                    <Users className="w-6 h-6" style={{ color: "#FF9000" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg" style={{ color: "#010101" }}>
                      Team Building
                    </h4>
                    <p style={{ color: "rgba(1, 1, 1, 0.6)" }}>Regular events and creative challenges</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2" style={{ color: "#FF9000" }}>
                <MapPin className="w-5 h-5" />
                <span className="font-medium">San Francisco, CA • Remote-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          <div
            ref={addToRefs}
            data-animate-id="timeline-title"
            className={`text-center mb-20 ${getAnimationClass("timeline-title", "opacity-0 translate-y-16")}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold" style={{ color: "#FF9000" }}>
              Our Journey
            </h2>
          </div>
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div
              ref={addToRefs}
              data-animate-id="timeline-line"
              className={`absolute left-1/2 transform -translate-x-1/2 w-1 z-0 transition-all duration-2000 ${
                visibleItems.has("timeline-line") ? "h-full opacity-100" : "h-0 opacity-0"
              }`}
              style={{ background: `linear-gradient(to bottom, #FF9000, rgba(255, 144, 0, 0.4), transparent)` }}
            />
            {timeline.map((item, index) => (
              <div
                key={item.year}
                ref={addToRefs}
                data-animate-id={`timeline-${index}`}
                className={`relative z-10 mb-24 flex flex-col items-center md:items-stretch ${getAnimationClass(
                  `timeline-${index}`,
                  `opacity-0 ${index % 2 === 0 ? "translate-x-16" : "-translate-x-16"} translate-y-8`,
                )}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Dot */}
                <div
                  className={`absolute top-4 w-6 h-6 border-4 rounded-full z-20 transition-all duration-500 ${
                    index % 2 === 0 ? "right-1/2 translate-x-1/2" : "left-1/2 -translate-x-1/2"
                  } ${visibleItems.has(`timeline-${index}`) ? "scale-125" : "scale-100"}`}
                  style={{
                    backgroundColor: "#FF9000",
                    borderColor: "#FFF8ED",
                    boxShadow: visibleItems.has(`timeline-${index}`) ? "0 0 20px rgba(255, 144, 0, 0.5)" : "none",
                  }}
                />
                {/* Card */}
                <div
                  className={`group w-full max-w-[600px] mt-4 relative rounded-3xl border p-6 sm:p-8 transition-all duration-500 hover:scale-[1.03] cursor-pointer ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(255, 144, 0, 0.2)",
                    boxShadow: "0 10px 30px rgba(255, 144, 0, 0.1)",
                  }}
                >
                  <div
                    className="text-3xl sm:text-4xl font-black mb-2 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: "#FF9000" }}
                  >
                    {item.year}
                  </div>
                  <h3
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300"
                    style={{ color: "#010101" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base mb-6 leading-relaxed" style={{ color: "rgba(1, 1, 1, 0.8)" }}>
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {item.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold tracking-wide hover:bg-opacity-30 transition-colors duration-300"
                        style={{
                          backgroundColor: "rgba(255, 144, 0, 0.1)",
                          color: "#FF9000",
                        }}
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "linear-gradient(135deg, rgba(255, 144, 0, 0.05), transparent)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 mb-12 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div
            ref={addToRefs}
            data-animate-id="cta-section"
            className={getAnimationClass("cta-section", "opacity-0 translate-y-16 scale-95")}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8" style={{ color: "#FF9000" }}>
              Ready to Create Magic?
            </h2>
            <p className="text-xl mb-12 leading-relaxed" style={{ color: "#010101" }}>
              Let's collaborate to bring your brand's story to life with stunning visuals that captivate and convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                className="group relative px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(to right, #FF9000, #FF4500)",
                  boxShadow: "0 10px 30px rgba(255, 144, 0, 0.3)",
                }}
                onMouseEnter={(e) => (e.target.style.boxShadow = "0 15px 40px rgba(255, 144, 0, 0.4)")}
                onMouseLeave={(e) => (e.target.style.boxShadow = "0 10px 30px rgba(255, 144, 0, 0.3)")}
              >
                <span className="relative z-10">Start Your Project</span>
              </button>
              <button
                className="group px-8 py-4 border-2 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: "#FF9000",
                  color: "#FF9000",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#FF9000"
                  e.target.style.color = "#FFFFFF"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.color = "#FF9000"
                }}
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                
                @keyframes glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(255, 144, 0, 0.3); }
                    50% { box-shadow: 0 0 40px rgba(255, 144, 0, 0.6); }
                }
            `}</style>
    </div>
  )
}
