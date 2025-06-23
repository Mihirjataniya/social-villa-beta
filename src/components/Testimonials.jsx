import { useEffect, useRef } from "react"

function TestimonialsSection() {
  const scrollRef = useRef(null)
  const sectionRef = useRef(null)
  const leftContentRef = useRef(null)
  const statsRef = useRef(null)
  const titleRef = useRef(null)
  const cardsContainerRef = useRef(null)

  const testimonials = [
    {
      name: "Diane Swag",
      role: "AI Company Founder",
      quote:
        "A game-changing experience! The design process was smooth, collaborative, and resulted in a brand presence we're proud of.",
      rating: 4,
    },
    {
      name: "Marcus Chen",
      role: "E-commerce Director",
      quote:
        "Outstanding results! Our social media engagement increased by 300% within the first month. The team understood our vision perfectly.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Startup CEO",
      quote:
        "Professional, creative, and results-driven. Social Villa transformed our brand identity and boosted our market presence significantly.",
      rating: 5,
    },
    {
      name: "Alex Rodriguez",
      role: "Marketing Manager",
      quote:
        "Incredible attention to detail and strategic thinking. They delivered beyond our expectations and helped us reach new audiences.",
      rating: 5,
    },
    {
      name: "Emily Parker",
      role: "Restaurant Owner",
      quote:
        "Working with Social Villa was a breath of fresh air. Their creative approach and dedication to our success made all the difference.",
      rating: 4,
    },
  ]

  useEffect(() => {
    // GSAP CDN script injection
    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
    script.async = true
    document.head.appendChild(script)

    const scrollTriggerScript = document.createElement("script")
    scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
    scrollTriggerScript.async = true
    document.head.appendChild(scrollTriggerScript)

    const initAnimations = () => {
      if (typeof (window).gsap === "undefined") {
        setTimeout(initAnimations, 100)
        return
      }

      const gsap = (window).gsap
      gsap.registerPlugin((window).ScrollTrigger)

      // Set initial states
      if (titleRef.current) {
        gsap.set(titleRef.current, {
          y: 100,
          opacity: 0,
          rotationX: 45,
          transformOrigin: "center bottom",
        })
      }

      if (leftContentRef.current) {
        gsap.set(leftContentRef.current.children, {
          y: 80,
          opacity: 0,
          stagger: 0.1,
        })
      }

      if (statsRef.current) {
        gsap.set(statsRef.current.children, {
          scale: 0.8,
          opacity: 0,
          y: 30,
        })
      }

      if (cardsContainerRef.current) {
        gsap.set(cardsContainerRef.current, {
          x: 100,
          opacity: 0,
          rotationY: 25,
          transformOrigin: "left center",
        })
      }

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      })

      // Title animation with 3D effect
      tl.to(titleRef.current, {
        duration: 0.8,
        y: 0,
        opacity: 1,
        rotationX: 0,
        ease: "power3.out",
      })

        // Left content staggered animation
        .to(
          leftContentRef.current?.children,
          {
            duration: 0.6,
            y: 0,
            opacity: 1,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.4",
        )

        // Stats cards with bounce effect
        .to(
          statsRef.current?.children,
          {
            duration: 0.7,
            scale: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )

        // Right side cards container
        .to(
          cardsContainerRef.current,
          {
            duration: 0.8,
            x: 0,
            opacity: 1,
            rotationY: 0,
            ease: "power3.out",
          },
          "-=0.5",
        )

      // Individual testimonial cards animation
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll(".testimonial-card")
        gsap.set(cards, {
          y: 60,
          opacity: 0,
          scale: 0.95,
          rotationX: 15,
        })

        gsap.to(cards, {
          duration: 0.6,
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Continuous scrolling animation
      const scrollElement = scrollRef.current
      if (scrollElement) {
        let translateY = 0
        const speed = 0.5
        const cardHeight = 160
        const resetPoint = testimonials.length * cardHeight

        const animate = () => {
          translateY += speed
          if (translateY >= resetPoint) translateY = 0
          gsap.set(scrollElement, { y: -translateY })
          requestAnimationFrame(animate)
        }
        animate()
      }

      // Hover animations for stats cards
      if (statsRef.current) {
        statsRef.current.querySelectorAll(".stat-card").forEach((card) => {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              duration: 0.3,
              scale: 1.05,
              rotationY: 5,
              ease: "power2.out",
            })
          })

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              duration: 0.3,
              scale: 1,
              rotationY: 0,
              ease: "power2.out",
            })
          })
        })
      }

      // Button hover animation
      if (sectionRef.current) {
        const button = sectionRef.current.querySelector("button")
        if (button) {
          button.addEventListener("mouseenter", () => {
            gsap.to(button, {
              duration: 0.3,
              scale: 1.05,
              y: -3,
              boxShadow: "0 10px 25px rgba(251, 146, 60, 0.3)",
              ease: "power2.out",
            })
          })

          button.addEventListener("mouseleave", () => {
            gsap.to(button, {
              duration: 0.3,
              scale: 1,
              y: 0,
              boxShadow: "0 0 0px rgba(251, 146, 60, 0)",
              ease: "power2.out",
            })
          })
        }
      }

      // Parallax effect for background elements
      gsap.to(sectionRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    }

    // Start initialization after scripts load
    script.onload = () => {
      scrollTriggerScript.onload = initAnimations
    }

    return () => {
      if (typeof (window).gsap !== "undefined" && (window).ScrollTrigger) {
        ;(window).ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
      if (document.head.contains(scrollTriggerScript)) {
        document.head.removeChild(scrollTriggerScript)
      }
    }
  }, [])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? "#fb923c" : "#d1d5db" }}>
        ★
      </span>
    ))
  }

  const handleButtonHover = (e) => {
    if ((window).gsap) {
      ;(window).gsap.to(e.currentTarget, {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out",
      })
    }
  }

  const handleButtonLeave = (e) => {
    if ((window).gsap) {
      ;(window).gsap.to(e.currentTarget, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      })
    }
  }

  return (
    <section ref={sectionRef} className="py-24 px-8 relative overflow-hidden bg-[#FFF8ED]">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-xl"
          style={{ background: "radial-gradient(circle, #fb923c, transparent)" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-2xl"
          style={{ background: "radial-gradient(circle, #f97316, transparent)" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side */}
        <div className="space-y-8">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold font-heading tracking-wider text-[#010101]">
            Client <span className="text-[#ff9000]">Testimonials</span>
          </h2>

          <div ref={leftContentRef} className="space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-[#010101]">
              Don't just take our word for it. Here's what our clients have to say about working with Social Villa.
            </p>

            <h3 className="text-3xl font-bold text-[#ff9000]">Clients Love Us</h3>
            <p className="text-[#010101]">100+ Happy Clients and 1M+ Revenue Addition</p>
          </div>

          <div ref={statsRef} className="grid grid-cols-3 gap-4">
            {["100+", "1M+", "4.8/5"].map((val, idx) => (
              <div
                key={idx}
                className="stat-card p-5 rounded-xl text-center font-bold cursor-pointer bg-gradient-to-br from-[#ff9000]/80 to-[#ff9000] text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-2xl mb-1">{val}</div>
                <div className="text-sm opacity-90">{["Happy Clients", "Revenue Addition", "Average Rating"][idx]}</div>
              </div>
            ))}
          </div>

          <button
            className="mt-8 bg-[#ff9000]/80 hover:bg-[#ff9000] text-white text-sm sm:text-base md:text-lg font-bold rounded-full transition-all duration-200 w-44 py-3 shadow-lg"
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            Contact us  
          </button>
        </div>

        {/* Right Side */}
        <div ref={cardsContainerRef} className="relative h-96 overflow-hidden rounded-2xl">
          <div
            className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, #FFF8ED, transparent)" }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to top, #FFF8ED, transparent)" }}
          ></div>

          <div ref={scrollRef} className="space-y-5">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-[#ff9000]/80 mx-4 transition-all duration-300 hover:shadow-xl hover:bg-white/90"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-[#010101]">{testimonial.name}</h4>
                    <p className="text-sm text-[#ff9000] font-semibold">{testimonial.role}</p>
                  </div>
                  <div className="text-lg">{renderStars(testimonial.rating)}</div>
                </div>
                <p className="leading-relaxed text-[#010101]">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
