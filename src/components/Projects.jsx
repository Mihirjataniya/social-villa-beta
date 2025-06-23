import { useEffect, useRef, useState } from "react"


const projects = [
  {
    id: 1,
    title: "Brand Identity Overhaul",
    description:
      "Developed a cohesive brand identity for a SaaS company, including logo design, typography, and visual guidelines, resulting in a 200% increase in brand recall.",
    image:
      "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Brand Strategy",
    year: "2025",
  },
  {
    id: 2,
    title: "E-commerce Experience Design",
    description:
      "Crafted a user-first, full-stack e-commerce platform with seamless payment integrations and personalized shopping features, leading to a 3.5x increase in conversion rate.",
    image:
      "https://images.pexels.com/photos/7679865/pexels-photo-7679865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Design",
    year: "2025",
  },
  {
    id: 3,
    title: "Influencer Marketing Campaign",
    description:
      "Planned and executed a targeted influencer campaign for a beauty brand across Instagram and YouTube, resulting in 120K+ user-generated content posts and a 35% boost in product sales.",
    image:
      "https://avignyata.com/wp-content/uploads/2023/09/influencer-marketing-job-concept.jpg",
    category: "Influencer Marketing",
    year: "2024",
  },
  {
    id: 4,
    title: "Executive Dashboard System",
    description:
      "Built an enterprise-grade dashboard for real-time analytics and business intelligence, helping decision-makers track KPIs across departments.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop",
    category: "UI/UX Design",
    year: "2024",
  },
  {
    id: 5,
    title: "Digital Launch Campaign",
    description:
      "Led a 360° digital launch strategy for a fintech brand across Google Ads, Meta, and influencer platforms, generating 1M+ impressions within the first 10 days.",
    image:
      "https://cdn.pixabay.com/photo/2013/10/01/02/59/advertising-188993_1280.jpg",
    category: "Digital Marketing",
    year: "2024",
  },
  {
    id: 6,
    title: "Corporate Website Revamp",
    description:
      "Redesigned a legacy B2B website into a modern, responsive, SEO-optimized platform, improving organic traffic by 70% within two quarters.",
    image:
      "https://img.freepik.com/free-vector/flat-rocket-landing-page_23-2148159100.jpg?ga=GA1.1.2014189730.1732805354&semt=ais_items_boosted&w=740",
    category: "Web Development",
    year: "2023",
  },
  {
    id: 7,
    title: "Event Branding & Visuals",
    description:
      "Created a complete branding package for a national tech summit — from event logo and signage to digital promotions — enhancing footfall by 40%.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/b66ef8211342401.672382181f449.png",
    category: "Event Branding",
    year: "2024",
  },
  {
    id: 8,
    title: "Social Media Strategy for D2C Brand",
    description:
      "Formulated and executed a social-first content strategy that grew the Instagram following by 5x and generated 80% of monthly revenue via organic posts.",
    image:
      "https://cdn.dribbble.com/userupload/43189421/file/original-ddbe1ce8c5340151ac490b012b598d78.jpg?resize=1504x1128&vertical=center",
    category: "Social Media",
    year: "2023",
  },
]



export default function ProjectsSection() {
    const [expandedCards, setExpandedCards] = useState(new Set())
    const [isMobile, setIsMobile] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    const [visibleCards, setVisibleCards] = useState(new Set())
    const cardRefs = useRef([])
    const sectionRef = useRef(null)
    const observerRef = useRef(null)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px 0px -15% 0px",
            threshold: 0.15,
        }

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    cardRefs.current.forEach((card, index) => {
                        if (card) {
                            setTimeout(() => {
                                setVisibleCards((prev) => new Set([...prev, index]))
                            }, index * 100)
                        }
                    })
                }
            })
        }, options)

        if (sectionRef.current) {
            observerRef.current.observe(sectionRef.current)
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect()
            }
        }
    }, [hasAnimated])

    const handleCardClick = (index) => {
        if (!isMobile) return
        const isExpanded = expandedCards.has(index)
        setExpandedCards(isExpanded ? new Set() : new Set([index]))
    }

    return (
        <div ref={sectionRef} className="bg-[#FFF8ED] py-24 px-4 font-sans">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#010101] font-heading tracking-wider">
                    Our Latest <span className="text-[#ff9000]">Projects</span>
                </h2>
                <p className="text-[#010101] text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
                    Discover our most recent work and creative solutions that drive real results
                </p>
            </div>

            <div className="w-full">
                {/* Mobile Scroll */}
                <div className="block md:hidden overflow-x-auto px-4 -mx-4 no-scrollbar">
                    <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
                        {projects.map((project, index) => (
                            <div
                                ref={(el) => {
                                    if (el) cardRefs.current[index] = el
                                }}
                                key={project.id}
                                className="min-w-[280px] max-w-[320px] h-96 rounded-3xl overflow-hidden cursor-pointer border-2 border-orange-200 shadow-xl bg-white relative hover:shadow-2xl transition-all duration-300"
                                onClick={() => handleCardClick(index)}
                                style={{
                                    opacity: visibleCards.has(index) ? 1 : 0,
                                    transform: visibleCards.has(index)
                                        ? "translateY(0px) scale(1)"
                                        : "translateY(80px) scale(0.9)",
                                    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                                }}
                            >
                                <ContentCard
                                    project={project}
                                    index={index}
                                    expandedCards={expandedCards}
                                    isMobile={isMobile}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
                    {projects.map((project, index) => (
                        <div
                            ref={(el) => {
                                if (el) cardRefs.current[index] = el
                            }}
                            key={project.id}
                            className="project-card group relative h-96 rounded-3xl overflow-hidden cursor-pointer border-2 border-orange-200 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 bg-white"
                            onClick={() => handleCardClick(index)}
                            style={{
                                opacity: visibleCards.has(index) ? 1 : 0,
                                transform: visibleCards.has(index)
                                    ? "translateY(0px) scale(1)"
                                    : "translateY(80px) scale(0.9)",
                                transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
                            }}
                        >
                            <ContentCard
                                project={project}
                                index={index}
                                expandedCards={expandedCards}
                                isMobile={isMobile}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    )
}

const ContentCard = ({ project, index, expandedCards, isMobile }) => {
    const isExpanded = isMobile && expandedCards.has(index)

    return (
        <>
            <div
                className="project-image absolute inset-0 bg-cover bg-center transition-all duration-300 ease-out"
                style={{ backgroundImage: `url(${project.image})` }}
            >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-all duration-300 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#010101]/40 via-transparent to-[#010101]/60" />

                <div className="absolute top-6 left-6 z-10">
                    <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-neutral-800 px-3 py-2 rounded-xl text-sm font-bold shadow-lg border border-orange-200">
                        <span>{project.category}</span>
                        <span className="opacity-70">•</span>
                        <span className="text-[#ff9000]">{project.year}</span>
                    </div>
                </div>

                <div className="absolute bottom-8 left-6 right-6">
                    <h3 className="text-white text-sm md:text-xl font-bold leading-tight drop-shadow-lg">
                        {project.title}
                    </h3>
                </div>

                {isMobile && (
                    <div className="absolute bottom-1 right-2">
                        <div className="bg-white/90 backdrop-blur-sm text-neutral-800 px-3 py-1 rounded-full text-xs font-medium border border-orange-200">
                            {isExpanded ? "Tap to close" : "Tap to explore"}
                        </div>
                    </div>
                )}
            </div>

            <div
                className={`project-description absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/98 to-white/90 backdrop-blur-md border-t border-orange-200 transform transition-transform duration-300 ease-out ${isExpanded ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"
                    }`}
            >
                <div className="p-6 text-center">
                    <h4 className="text-[#010101] text-lg font-bold mb-3">{project.title}</h4>
                    <p className="text-[#010101] text-sm leading-relaxed mb-6">{project.description}</p>
                    <div className="flex gap-3 justify-center">
                        <button className="bg-orange-400 hover:bg-[#ff9000] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                            View Project
                        </button>
                        <button className="bg-transparent hover:bg-orange-50 text-neutral-700 border-2 border-orange-200 hover:border-orange-400 hover:text-orange-600 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
