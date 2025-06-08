import { useEffect, useRef, useState } from "react"

const projects = [
    {
        id: 1,
        title: "Brand Identity Overhaul",
        description:
            "Developed a cohesive brand identity for a SaaS company, including logo design, typography, and visual guidelines, resulting in a 200% increase in brand recall.",
        image: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Brand Strategy",
        year: "2024",
    },
    {
        id: 2,
        title: "E-commerce Experience Design",
        description:
            "Crafted a user-first, full-stack e-commerce platform with seamless payment integrations and personalized shopping features, leading to a 3.5x increase in conversion rate.",
        image: "https://images.pexels.com/photos/7679865/pexels-photo-7679865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "Web Design",
        year: "2024",
    },
    {
        id: 3,
        title: "Influencer Marketing Campaign",
        description:
            "Planned and executed a targeted influencer campaign for a beauty brand across Instagram and YouTube, resulting in 120K+ user-generated content posts and a 35% boost in product sales.",
        image: "https://avignyata.com/wp-content/uploads/2023/09/influencer-marketing-job-concept.jpg",
        category: "Influencer Marketing",
        year: "2023",
    },
    {
        id: 4,
        title: "Executive Dashboard System",
        description:
            "Built an enterprise-grade dashboard for real-time analytics and business intelligence, helping decision-makers track KPIs across departments.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop",
        category: "UI/UX Design",
        year: "2023",
    },
    {
        id: 5,
        title: "Digital Launch Campaign",
        description:
            "Led a 360° digital launch strategy for a fintech brand across Google Ads, Meta, and influencer platforms, generating 1M+ impressions within the first 10 days.",
        image: "https://cdn.pixabay.com/photo/2013/10/01/02/59/advertising-188993_1280.jpg",
        category: "Digital Marketing",
        year: "2024",
    },
    {
        id: 6,
        title: "Corporate Website Revamp",
        description:
            "Redesigned a legacy B2B website into a modern, responsive, SEO-optimized platform, improving organic traffic by 70% within two quarters.",
        image: "https://img.freepik.com/free-vector/flat-rocket-landing-page_23-2148159100.jpg?ga=GA1.1.2014189730.1732805354&semt=ais_items_boosted&w=740",
        category: "Web Development",
        year: "2023",
    },
    {
        id: 7,
        title: "Event Branding & Visuals",
        description:
            "Created a complete branding package for a national tech summit — from event logo and signage to digital promotions — enhancing footfall by 40%.",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/b66ef8211342401.672382181f449.png",
        category: "Event Branding",
        year: "2024",
    },
    {
        id: 8,
        title: "Social Media Strategy for D2C Brand",
        description:
            "Formulated and executed a social-first content strategy that grew the Instagram following by 5x and generated 80% of monthly revenue via organic posts.",
        image: "https://cdn.dribbble.com/userupload/43189421/file/original-ddbe1ce8c5340151ac490b012b598d78.jpg?resize=1504x1128&vertical=center",
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

    // Intersection Observer for scroll detection
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px 0px -15% 0px', // Trigger when section is 15% visible from bottom
            threshold: 0.15
        }

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                    
                    // Animate cards with staggered delay like GSAP example
                    cardRefs.current.forEach((card, index) => {
                        if (card) {
                            setTimeout(() => {
                                setVisibleCards(prev => new Set([...prev, index]))
                            }, index * 100) // 100ms stagger delay
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
        <div ref={sectionRef} className="bg-black py-8 px-4 font-sans">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading text-[#FF9000] tracking-wider">Our Latest Projects</h2>
                <p className="text-white/70 text-lg mb-6 max-w-2xl mx-auto">Discover our most recent work and creative solutions</p>
            </div>

            {/* Cards */}
            <div className="w-full">
                {/* Mobile Scroll */}
                <div className="block md:hidden overflow-x-auto px-4 -mx-4 no-scrollbar">
                    <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                        {projects.map((project, index) => (
                            <div
                                ref={(el) => {
                                    if (el) cardRefs.current[index] = el
                                }}
                                key={project.id}
                                className="min-w-[280px] max-w-[320px] h-96 rounded-3xl overflow-hidden cursor-pointer border shadow-2xl bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] relative"
                                onClick={() => handleCardClick(index)}
                                style={{
                                    opacity: visibleCards.has(index) ? 1 : 0,
                                    transform: visibleCards.has(index) 
                                        ? 'translateY(0px) scale(1)' 
                                        : 'translateY(80px) scale(0.9)',
                                    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
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
                            className="project-card group relative h-96 rounded-3xl overflow-hidden cursor-pointer border shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a]"
                            onClick={() => handleCardClick(index)}
                            style={{
                                opacity: visibleCards.has(index) ? 1 : 0,
                                transform: visibleCards.has(index) 
                                    ? 'translateY(0px) scale(1)' 
                                    : 'translateY(80px) scale(0.9)',
                                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
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
        </div>
    )
}

const ContentCard = ({ project, index, expandedCards, isMobile }) => {
    const isExpanded = isMobile && expandedCards.has(index);

    return (
        <>
            <div
                className="project-image absolute inset-0 bg-cover bg-center transition-all duration-300 ease-out"
                style={{ backgroundImage: `url(${project.image})` }}
            >
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 ease-out" />

                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50" />

                {/* Category and Year Badge */}
                <div className="absolute top-6 left-6 z-10">
                    <div className="inline-flex items-center gap-2 bg-[#FF9000] text-black px-3 py-2 rounded-xl text-sm font-bold shadow-lg">
                        <span>{project.category}</span>
                        <span className="opacity-70">•</span>
                        <span>{project.year}</span>
                    </div>
                </div>

                {/* Project Title */}
                <div className="absolute bottom-8 left-6 right-6">
                    <h3 className="text-white text-sm md:text-xl font-bold leading-tight drop-shadow-lg">{project.title}</h3>
                </div>

                {/* Mobile Tap Indicator */}
                {isMobile && (
                    <div className="absolute bottom-1 right-2">
                        <div className="bg-black/80 text-white px-3 py-1 rounded-full text-xs font-medium border border-gray-600">
                            {expandedCards.has(index) ? "Tap to close" : "Tap to explore"}
                        </div>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className={`project-description absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-black/80 border-t border-gray-700 transform transition-transform duration-300 ease-out ${isExpanded ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"
                }`}>
                <div className="p-6 text-center">
                    <h4 className="text-white text-lg font-semibold mb-3">{project.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed mb-6">{project.description}</p>
                    <div className="flex gap-3 justify-center">
                        <button className="bg-[#FF9000] hover:bg-[#ffaa33] text-black px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_20px_rgba(255,144,0,0.4)]">
                            View Project
                        </button>
                        <button className="bg-transparent hover:bg-gray-800 text-white border border-gray-600 hover:border-[#FF9000] hover:text-[#FF9000] px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}