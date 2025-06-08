import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

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
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Title & subtitle animation
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        );

      // Scroll-triggered animation for service cards
      gsap.utils.toArray(".service-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 80,
          scale: 0.9,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className=" bg-black mt-6  md:mt-12 md:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 ref={titleRef} className="text-4xl text-[#fffaf5] font-heading tracking-wider lg:text-6xl text-nowrap font-black mb-1 lg:mb-2 ">
            our <span className="text-[#ff9000]">Services</span>
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-[#FFFAF5] opacity-80 max-w-3xl mx-auto leading-relaxed"
          >
            Elevating brands through strategic innovation and creative excellence
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="flex flex-row  overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-x-visible px-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {services.map((service) => (
            <div key={service.id} className="service-card parent">
              <div className="card">
                <div className="content-box">
                  <span className="card-title">{service.title}</span>
                  <p className="card-content">{service.summary}</p>
                  <span className="see-more">{service.tagline}</span>
                </div>
                <div className="date-box">
                  <span className="month">{service.category}</span>
                  <span className="date">{service.number}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .parent {
          width: 100%;
          padding: 20px;
          perspective: 1000px;
           min-width: 380px;
        }
         
        .card {
          padding-top: 50px;
          border: 1px solid #b8b8b8;
          transform-style: preserve-3d;
          background: linear-gradient(135deg, #0000 18.75%, rgba(255, 144, 0, 0.1) 0 31.25%, #0000 0),
              repeating-linear-gradient(45deg, rgba(255, 144, 0, 0.05) -6.25% 6.25%, rgba(255, 250, 245, 0.02) 0 18.75%);
          background-size: 60px 60px;
          background-position: 0 0, 0 0;
          background-color: #111111;
          width: 100%;
          box-shadow: rgba(255, 144, 0, 0.3) 0px 30px 30px -10px;
          transition: all 0.5s ease-in-out;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
        }

        .card:hover {
          background-position: -100px 100px, -100px 100px;
          transform: rotate3d(0.5, 1, 0, 30deg);
          box-shadow: rgba(255, 144, 0, 0.5) 0px 40px 40px -10px;
        }

        .content-box {
          background: linear-gradient(135deg, #bd6904, #c27000);    
          transition: all 0.5s ease-in-out;
          padding: 60px 25px 25px 25px;
          transform-style: preserve-3d;
          height: 100%;
          display: flex;
          flex-direction: column;
           flex-grow: 1;
        }

        .card:hover .content-box {
          background: linear-gradient(135deg, #000000, #1a1a1a);
        }

        .content-box .card-title {
          display: inline-block;
          color: #FFFAF5;
          font-size: 24px;
          font-weight: 900;
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 50px);
          line-height: 1.2;
          margin-bottom: 15px;
        }

        .content-box .card-title:hover {
          transform: translate3d(0px, 0px, 60px);
        }

        .card:hover .content-box .card-title {
          color: #FF9000;
        }

        .content-box .card-content {
          margin-top: 10px;
          font-size: 13px;
          font-weight: 600;
          color: #FFFAF5;
          opacity: 0.9;
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 30px);
          line-height: 1.4;
          flex-grow: 1;
          margin-bottom: 20px;
        }

        .content-box .card-content:hover {
          transform: translate3d(0px, 0px, 60px);
        }

        .card:hover .content-box .card-content {
          color: #FF9000;
          opacity: 1;
        }

        .content-box .see-more {
          cursor: pointer;
          margin-top: auto;
          display: inline-block;
          font-weight: 900;
          font-size: 10px;
          text-transform: uppercase;
          color: #FF9000;
          background: #FFFAF5;
          padding: 0.7rem 1rem;
          transition: all 0.5s ease-in-out;
          transform: translate3d(0px, 0px, 20px);
          letter-spacing: 0.5px;
          border: 2px solid #FFFAF5;
        }

        .content-box .see-more:hover {
          transform: translate3d(0px, 0px, 60px);
        }

        .card:hover .content-box .see-more {
          background: #FF9000;
          color: #000000;
          border-color: #FF9000;
        }

        .date-box {
          position: absolute;
          top: 30px;
          right: 30px;
          height: 70px;
          width: 70px;
          background: #FFFAF5;
          border: 2px solid #FF9000;
          padding: 10px;
          transform: translate3d(0px, 0px, 80px);
          box-shadow: rgba(255, 144, 0, 0.3) 0px 17px 10px -10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .date-box span {
          display: block;
          text-align: center;
        }

        .date-box .month {
          color: #FF9000;
          font-size: 9px;
          font-weight: 700;
          margin-bottom: 5px;
          letter-spacing: 0.5px;
        }

        .date-box .date {
          font-size: 22px;
          font-weight: 900;
          color: #FF9000;
        }

        @media (max-width: 768px) {
          .content-box .card-title {
            font-size: 20px;
          }
          
          .content-box .card-content {
            font-size: 12px;
          }
          
          .date-box {
            height: 60px;
            width: 60px;
            top: 25px;
            right: 25px;
          }
          
          .date-box .date {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  )
}
