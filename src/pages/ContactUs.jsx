import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  text-white">
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF9000] to-[#FF4500] ">
              Let’s Start a Conversation
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Whether you're curious about our process, need a tailored solution, or want to collaborate, we're here to make it happen.
            </p>
          </div>

          {/* Stacked Layout: Info then Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-1 bg-gradient-to-br from-white/5 to-white/10 p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-xl">
              <h3 className="text-3xl font-bold mb-8">Send us a Message</h3>
              {isSubmitted && (
                <div className="mb-6 flex items-center gap-3 bg-orange-500/10 p-4 rounded-xl border border-orange-500/30">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span className="text-orange-400 font-medium">Thank you! Your message has been sent.</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-semibold">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full mt-2 px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-orange-500 outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-semibold">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full mt-2 px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-orange-500 outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-semibold">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-orange-500 outline-none"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-semibold">Subject *</label>
                   <input
                    type="text"
                    name="company"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-orange-500 outline-none"
                    placeholder="Your Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-semibold">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full mt-2 px-4 py-3 rounded-xl bg-transparent border border-white/20 text-white placeholder-white/40 focus:ring-2 focus:ring-orange-500 outline-none resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
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
                  icon: <Mail className="w-5 h-5 text-orange-400" />,
                  title: "Email Us",
                  subtitle: "Drop us a line any time",
                  content: (
                    <a href="mailto:hello@brandco.com" className="text-orange-400 hover:underline">
                      hello@brandco.com
                    </a>
                  ),
                },
                {
                  icon: <Phone className="w-5 h-5 text-orange-400" />,
                  title: "Call Us",
                  subtitle: "Mon-Fri, 8AM to 5PM",
                  content: (
                    <a href="tel:+1234567890" className="text-orange-400 hover:underline">
                      +1 (234) 567-8900
                    </a>
                  ),
                },
                {
                  icon: <MapPin className="w-5 h-5 text-orange-400" />,
                  title: "Visit Us",
                  subtitle: "Come say hi at our office",
                  content: (
                    <address className="not-italic text-orange-400">
                      123 Business Ave<br />Suite 100<br />New York, NY 10001
                    </address>
                  ),
                },
                {
                  icon: <Clock className="w-5 h-5 text-orange-400" />,
                  title: "Business Hours",
                  subtitle: "We're here when you need us",
                  content: (
                    <div className="text-orange-400 space-y-1">
                      <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                      <p>Sat: 9:00 AM - 2:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  ),
                },
              ].map((info, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg hover:shadow-orange-400/30 transition"
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-orange-500/10 rounded-xl flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-white/60 mb-1">{info.subtitle}</p>
                      {info.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
