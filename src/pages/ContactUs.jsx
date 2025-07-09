import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-[#FFF8ED] text-[#010101]">
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-5xl font-extrabold mb-4 text-[#FF9000]">
              Let's Start a Conversation
            </h2>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed">
              Whether you're curious about our process, need a tailored solution, or want to collaborate, we're here to
              make it happen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-1 p-10 rounded-3xl shadow-lg border bg-white border-[#E5E5E5]">
              <h3 className="text-3xl font-bold mb-8">Send us a Message</h3>

              {isSubmitted && (
                <div className="mb-6 flex items-center gap-3 p-4 rounded-xl border bg-[#FF9000] border-[#FF9000] text-white">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Thank you! Your message has been sent.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all bg-[#FFF8ED] border-[#E5E5E5] text-[#010101] focus:border-[#FF9000] focus:ring-0"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all bg-[#FFF8ED] border-[#E5E5E5] text-[#010101] focus:border-[#FF9000] focus:ring-0"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all bg-[#FFF8ED] border-[#E5E5E5] text-[#010101] focus:border-[#FF9000] focus:ring-0"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all bg-[#FFF8ED] border-[#E5E5E5] text-[#010101] focus:border-[#FF9000] focus:ring-0"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 outline-none resize-none transition-all bg-[#FFF8ED] border-[#E5E5E5] text-[#010101] focus:border-[#FF9000] focus:ring-0"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 font-semibold py-4 px-6 rounded-xl transition-transform transform hover:scale-105 bg-[#FF9000] text-white hover:bg-[#E68200] shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-6">
              {[
                {
                  icon: <Mail className="w-5 h-5 text-[#FF9000]" />,
                  title: "Email Us",
                  subtitle: "Drop us a line any time",
                  content: (
                    <a href="mailto:hello@brandco.com" className="text-[#FF9000] hover:underline">
                      hello@brandco.com
                    </a>
                  ),
                },
                {
                  icon: <Phone className="w-5 h-5 text-[#FF9000]" />,
                  title: "Call Us",
                  subtitle: "Mon-Fri, 8AM to 5PM",
                  content: (
                    <a href="tel:+1234567890" className="text-[#FF9000] hover:underline">
                      +1 (234) 567-8900
                    </a>
                  ),
                },
                {
                  icon: <MapPin className="w-5 h-5 text-[#FF9000]" />,
                  title: "Visit Us",
                  subtitle: "Come say hi at our office",
                  content: (
                    <address className="not-italic leading-relaxed text-[#FF9000]">
                      123 Business Ave
                      <br />
                      Suite 100
                      <br />
                      New York, NY 10001
                    </address>
                  ),
                },
                {
                  icon: <Clock className="w-5 h-5 text-[#FF9000]" />,
                  title: "Business Hours",
                  subtitle: "We're here when you need us",
                  content: (
                    <div className="space-y-1 text-[#FF9000]">
                      <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                      <p>Sat: 9:00 AM - 2:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  ),
                },
              ].map((info, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 bg-white border-[#E5E5E5]"
                >
                  <div className="flex gap-4">
                    <div className="p-3 rounded-xl flex items-center justify-center border-2 bg-[#FFF8ED] border-[#E5E5E5]">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                      <p className="mb-2 text-sm opacity-70">{info.subtitle}</p>
                      <div className="text-sm">{info.content}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
