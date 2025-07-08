"use client"
import { useState, useEffect, useRef } from "react"
import { Mail, Phone, Linkedin, Github, MapPin, Send, MessageCircle } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const [status, setStatus] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "karrirajeshkumar3@gmail.com",
      href: "mailto:karrirajeshkumar3@gmail.com",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      bgColorDark: "from-red-900/20 to-pink-900/20",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91-7780383588",
      href: "tel:+917780383588",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      bgColorDark: "from-green-900/20 to-emerald-900/20",
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/karri-rajeshkumar-5200b7279/",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      bgColorDark: "from-blue-900/20 to-cyan-900/20",
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "View my code",
      href: "https://github.com/KarriRajeshKumar",
      color: "from-gray-600 to-gray-800",
      bgColor: "from-gray-50 to-gray-100",
      bgColorDark: "from-gray-800/20 to-gray-900/20",
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-600 dark:to-pink-600 rounded-full opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology!
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`block bg-gradient-to-br ${method.bgColor} dark:${method.bgColorDark} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2 border border-white/50 dark:border-gray-700/50 hover:border-transparent h-full`}
                >
                  {/* Background Decoration */}
                  <div
                    className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r ${method.color} opacity-10 rounded-full`}
                  ></div>

                  <div className="relative z-10 text-center">
                    <div
                      className={`inline-flex p-4 bg-gradient-to-r ${method.color} rounded-2xl shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                    >
                      <div className="text-white">{method.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{method.value}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Main Contact Card */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/50 dark:border-gray-700/50 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=40 height=40 viewBox=0 0 40 40 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=%236366f1 fillOpacity=0.4 fillRule=evenodd%3E%3Cpath d=M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z/%3E%3C/g%3E%3C/svg%3E')]"></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="inline-flex p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg mb-6 animate-pulse-custom">
                  <MessageCircle className="text-white" size={32} />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  Let's Work{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Together
                  </span>
                </h3>

                <p className="text-gray-700 dark:text-gray-200 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                  from you. Drop me a message and let's create something amazing together!
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="/contact-form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold"
                  >
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </a>

                  <a
                    href="tel:+917780383588"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-full hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    <Phone size={20} />
                    Call Me
                  </a>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                  <MapPin size={18} />
                  <span className="text-sm">Based in Andhra Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
