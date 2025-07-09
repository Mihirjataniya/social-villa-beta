"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Play, TrendingUp, Users, Award, Target, Zap, Globe } from "lucide-react"

export default function ModernHero() {
  const heroRef = useRef(null)
  const gridRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const rightContentRef = useRef(null)

  useEffect(() => {
    // Animation setup
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (subtitleRef.current) observer.observe(subtitleRef.current)
    if (ctaRef.current) observer.observe(ctaRef.current)
    if (rightContentRef.current) observer.observe(rightContentRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={heroRef} className="relative overflow-hidden bg-[#FFF8ED]">
      {/* Animated Grid Background */}
      <div ref={gridRef} className="absolute inset-0 opacity-20">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="grid-line absolute h-px bg-gradient-to-r from-transparent via-[#ff9000]/60 to-transparent"
            style={{ top: `${(i + 1) * 6.67}%`, left: 0, right: 0 }}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="grid-line absolute w-px bg-gradient-to-b from-transparent via-[#ff9000]/60 to-transparent"
            style={{ left: `${(i + 1) * 10}%`, top: 0, bottom: 0 }}
          />
        ))}
      </div>

      

      <div className="relative z-10 flex mt-4 px-4 sm:px-6 lg:px-8 py-8 sm:py-0">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

            <div className="w-full space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-white/80 backdrop-blur-sm border border-[#ff9000]/30 rounded-full shadow-sm text-xs sm:text-sm">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-[#ff9000] flex-shrink-0" />
                <span className="font-medium text-text-[#1a1a1a]">Trusted by 500+ businesses</span>
              </div>

              <div ref={titleRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                <h1 className="text-7xl xl:text-8xl font-heading tracking-wider font-black leading-none text-[#1a1a1a]">
                  WE CREATE
                  <br />
                  <span className="relative inline-block text-[#ff9000]">
                    SOCIAL
                    <div className="absolute -inset-1 sm:-inset-2 lg:-inset-4 blur-xl sm:blur-2xl opacity-20 bg-[#ff9000]/60" />
                  </span>
                  <br />
                  <span className="text-text-[#1a1a1a]">EXPERIENCES</span>
                </h1>
              </div>

              <div
                ref={subtitleRef}
                className="opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300"
              >
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xl lg:max-w-2xl mx-auto lg:mx-0 leading-relaxed text-[#1a1a1a] px-4 sm:px-0">
                  That Drive <span className="text-[#ff9000] font-semibold">Engagement</span>,{" "}
                  <span className="text-[#ff9000] font-semibold">Growth</span>, and{" "}
                  <span className="text-[#ff9000] font-semibold">Success</span>
                </p>
              </div>

              <div ref={ctaRef} className="opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-500">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                  <button className="group px-4 sm:px-6 md:px-8 py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold rounded-full bg-[#ff9000]/80 hover:bg-[#ff9000] text-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto">
                    <span className="truncate">Start Your Journey</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </button>
                  <button className="group px-4 sm:px-6 md:px-8 py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold rounded-full border-2 border-[#ff9000]/80 text-[#ff9000] hover:bg-[#ff9000]/80 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="truncate">View Portfolio</span>
                  </button>
                </div>
              </div>

              {/* Stats Row - Responsive grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-orange-200/50 px-4 sm:px-0">
                {[
                  { label: "Projects", value: "500+" },
                  { label: "Clients", value: "200+" },
                  { label: "Success Rate", value: "99%" },
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#1a1a1a] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-[#1a1a1a]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Modern Visual Elements */}
            <div
              ref={rightContentRef}
              className="w-full flex justify-center items-center opacity-0 transition-all duration-1000 ease-out delay-700 order-1 lg:order-2"
            >
              <div className="relative w-80 h-64 sm:w-96 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[500px] xl:h-[600px]">
                {/* Central Focus Element - Responsive sizing */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                    {/* Rotating rings */}
                    <div
                      className="absolute inset-0 border-2 border-[#ff9000]/60 rounded-full animate-spin opacity-60"
                      style={{ animationDuration: "20s" }}
                    />
                    <div
                      className="absolute inset-2 sm:inset-4 border border-[#ff9000]/30 rounded-full animate-spin opacity-40"
                      style={{ animationDuration: "15s", animationDirection: "reverse" }}
                    />

                    {/* Center icon - Responsive sizing */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#ff9000]/80 to-[#ff9000] rounded-full flex items-center justify-center shadow-lg">
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Business Cards - Better mobile positioning */}
                {[
                  {
                    icon: TrendingUp,
                    title: "Growth",
                    subtitle: "247%",
                    mobileStyle: { top: "10%", left: "10%" },
                    desktopStyle: { top: "8%", left: "5%" },
                  },
                  {
                    icon: Users,
                    title: "Reach",
                    subtitle: "2.4M",
                    mobileStyle: { top: "15%", right: "10%" },
                    desktopStyle: { top: "12%", right: "8%" },
                  },
                  {
                    icon: Target,
                    title: "Convert",
                    subtitle: "18.9%",
                    mobileStyle: { bottom: "15%", left: "10%" },
                    desktopStyle: { bottom: "15%", left: "2%" },
                  },
                  {
                    icon: Globe,
                    title: "Global",
                    subtitle: "50+",
                    mobileStyle: { bottom: "10%", right: "10%" },
                    desktopStyle: { bottom: "12%", right: "5%" },
                  },
                ].map((card, index) => {
                  const Icon = card.icon
                  return (
                    <div
                      key={index}
                      className="absolute p-2 sm:p-3 md:p-4 bg-white/90 backdrop-blur-sm border border-[#ff9000]/30 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
                      style={{
                        ...(window.innerWidth < 640 ? card.mobileStyle : card.desktopStyle),
                        animationDelay: `${index * 0.5}s`,
                        animationDuration: "3s",
                      }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="p-1 sm:p-2 bg-orange-100 rounded-md sm:rounded-lg">
                          <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#ff9000]" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-semibold text-[#1a1a1a] truncate">{card.title}</div>
                          <div className="text-xs text-[#1a1a1a] truncate">{card.subtitle}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* Connection Lines - Responsive */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 sm:opacity-30">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fb923c" stopOpacity="0" />
                      <stop offset="50%" stopColor="#fb923c" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <line
                    x1="20%"
                    y1="20%"
                    x2="50%"
                    y2="50%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    className="sm:stroke-2"
                  />
                  <line
                    x1="80%"
                    y1="25%"
                    x2="50%"
                    y2="50%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    className="sm:stroke-2"
                  />
                  <line
                    x1="15%"
                    y1="75%"
                    x2="50%"
                    y2="50%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    className="sm:stroke-2"
                  />
                  <line
                    x1="85%"
                    y1="80%"
                    x2="50%"
                    y2="50%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    className="sm:stroke-2"
                  />
                </svg>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      {/* <div className="absolute bottom-8 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:flex flex-col items-center animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#ff9000]/80 rounded-full  flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-[#ff9000]/80 rounded-full mt-8 sm:mt-2 animate-pulse" />
        </div>
        <p className="text-xs sm:text-sm mt-2 text-[#1a1a1a]">Scroll to explore</p>
      </div> */}

      {/* Additional Styles */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) translateX(0) !important;
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  )
}
