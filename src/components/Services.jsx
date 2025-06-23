"use client"

import { useEffect, useRef } from "react"

const services = [
  {
    id: 1,
    title: "Brand Strategy",
    summary: "Define your brand's core identity and messaging to stand out in crowded markets.",
    tagline: "Think beyond logos. Build legacies.",
    category: "STRATEGY",
    number: "01",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    summary:
      "Grow your brand across Instagram, LinkedIn, Twitter & more — from content calendars to campaign execution.",
    tagline: "Be where your audience scrolls.",
    category: "SOCIAL",
    number: "02",
  },
  {
    id: 3,
    title: "Performance Marketing",
    summary: "Drive sales through targeted paid campaigns, funnel optimization, and conversion tracking.",
    tagline: "Clicks are good. Conversions are better.",
    category: "PERFORM",
    number: "03",
  },
  {
    id: 4,
    title: "Search Engine Optimization",
    summary: "Rank higher, grow traffic, and dominate your niche with modern, white-hat SEO techniques.",
    tagline: "Because Google should love your brand too.",
    category: "SEO",
    number: "04",
  },
  {
    id: 5,
    title: "UI/UX & Website Design",
    summary: "Build sleek, responsive, conversion-ready websites that engage users and express your brand's vibe.",
    tagline: "Beautiful design meets brilliant strategy.",
    category: "DESIGN",
    number: "05",
  },
  {
    id: 6,
    title: "Influencer & Community Marketing",
    summary: "Collaborate with creators that align with your brand to build trust and tribe.",
    tagline: "Move hearts with authentic influence.",
    category: "INFLUENCE",
    number: "06",
  },
]

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "-50px 0px" },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (subtitleRef.current) observer.observe(subtitleRef.current)

    // Observe service cards
    const cards = document.querySelectorAll(".service-card")
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-3  ">
          <h1
            ref={titleRef}
            className="text-4xl lg:text-6xl font-heading font-bold mb-4 leading-tight text-[#1a1a1a] tracking-wider"
          >
            Our <span className="text-[#ff9000]">Services</span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-[#1a1a1a] max-w-3xl mx-auto  opacity-0 transition-all duration-1000 ease-out delay-300 "
          >
            Elevating brands through strategic innovation and creative excellence
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="flex flex-row overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-x-visible px-1 snap-x snap-mandatory scroll-smooth scrollbar-hide gap-6"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card w-full p-5 min-w-[380px] opacity-0 my-4 md:my-0 translate-y-8 transition-all duration-800 ease-out"
              style={{ perspective: '1000px' }}
            >
              <div className="card-container pt-12 border-2 border-[#ff9000]/40 w-full min-h-80 flex flex-col h-full relative rounded-2xl overflow-hidden transition-all duration-500 ease-in-out hover:border-[#ff9000]/80"
                   style={{
                     transformStyle: 'preserve-3d',
                     background: `linear-gradient(135deg, transparent 18.75%, rgba(251, 146, 60, 0.08) 0 31.25%, transparent 0), repeating-linear-gradient(45deg, rgba(251, 146, 60, 0.03) -6.25% 6.25%, rgba(255, 255, 255, 0.1) 0 18.75%)`,
                     backgroundSize: '60px 60px',
                     backgroundPosition: '0 0, 0 0',
                     boxShadow: 'rgba(251, 146, 60, 0.15) 0px 20px 40px -10px'
                   }}>
                
                {/* Content Box */}
                <div className="bg-gradient-to-br from-[#ff9000]/80 to-[#ff9000] transition-all duration-500 ease-in-out pt-15 px-6 pb-6 flex-grow flex flex-col rounded-xl"
                     style={{ transformStyle: 'preserve-3d' }}>
                  
                  <h3 className="inline-block text-white text-2xl md:text-xl font-black transition-all duration-500 ease-in-out leading-tight mb-4 hover:text-black"
                      style={{ transform: 'translate3d(0px, 0px, 50px)' }}>
                    {service.title}
                  </h3>
                  
                  <p className="mt-2 text-sm md:text-xs font-semibold text-white opacity-95 transition-all duration-500 ease-in-out leading-snug flex-grow mb-5 hover:text-neutral-600 hover:opacity-100"
                     style={{ transform: 'translate3d(0px, 0px, 30px)' }}>
                    {service.summary}
                  </p>
                  
                  <span className="cursor-pointer mt-auto inline-block font-black text-xs uppercase text-[#ff9000]/80 bg-white py-3 px-4 transition-all duration-500 ease-in-out tracking-wider border-2 border-white rounded-lg hover:bg-[#ff9000]/80 hover:text-black hover:border-[#ff9000]/80"
                        style={{ transform: 'translate3d(0px, 0px, 20px)' }}>
                    {service.tagline}
                  </span>
                </div>

                {/* Date Box */}
                <div className="absolute top-7 right-7 h-16 w-16 md:h-16 md:w-20 bg-white border-2 border-[#ff9000]/80 p-2 flex flex-col items-center justify-center rounded-xl"
                     style={{ 
                       transform: 'translate3d(0px, 0px, 80px)',
                       boxShadow: 'rgba(251, 146, 60, 0.2) 0px 17px 20px -10px'
                     }}>
                  <span className="block text-center text-[#ff9000]/80 text-xs font-bold mb-1 tracking-wide">
                    {service.category}
                  </span>
                  <span className="block text-center text-xl md:text-lg font-black text-[#ff9000]/80">
                    {service.number}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .card-container:hover {
          background-position: -100px 100px, -100px 100px;
          transform: rotate3d(0.5, 1, 0, 30deg);
          box-shadow: rgba(251, 146, 60, 0.25) 0px 30px 60px -10px;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}