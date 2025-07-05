"use client"
import { useState, useEffect, useRef } from "react"
import { Award, Calendar, CheckCircle, ExternalLink } from "lucide-react"

export default function Certificates() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const certificates = [
    {
      title: "HTML, CSS, Bootstrap",
      issuer: "NXT Wave",
      date: "August 2023",
      category: "Web Development",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      bgColorDark: "from-blue-900/20 to-cyan-900/20",
      pdfUrl: "/html-css-bootstrap-certificate.pdf",
    },
    {
      title: "Introduction to Databases (SQL)",
      issuer: "NXT Wave",
      date: "October 2024",
      category: "Database Management",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      bgColorDark: "from-green-900/20 to-emerald-900/20",
      pdfUrl: "/sql-database-certificate.pdf",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud (Coursera)",
      date: "February 2025",
      category: "Artificial Intelligence",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      bgColorDark: "from-purple-800/40 to-pink-800/40",
      pdfUrl: "/generative-ai-certificate.pdf",
    },
    {
      title: "JavaScript",
      issuer: "NXT Wave",
      date: "June 21, 2025",
      category: "Dynamic Web Development",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      bgColorDark: "from-yellow-900/20 to-orange-900/20",
      pdfUrl: "/javascript-certificate.pdf",
    },
    {
      title: "Programming Foundation with Python",
      issuer: "NXT Wave",
      date: "January 24, 2025",
      category: "Programming Foundation",
      color: "from-pink-500 to-red-500",
      bgColor: "from-pink-50 to-red-50",
      bgColorDark: "from-pink-900/20 to-red-900/20",
      pdfUrl: "/python-foundation-certificate.pdf",
    },
    {
      title: "Developer Foundations (Git and Command Line)",
      issuer: "NXT Wave",
      date: "June 2025",
      category: "Developer Tools",
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-50 to-blue-50",
      bgColorDark: "from-indigo-900/20 to-blue-900/20",
      pdfUrl: "/git-commandline-certificate.pdf",
    },
  ]

  return (
    <section id="certificates" ref={sectionRef} className="py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-600 dark:to-pink-600 rounded-full opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Certificates
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Continuous learning and professional development achievements
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`relative bg-gradient-to-br ${cert.bgColor} dark:bg-gradient-to-l dark:${cert.bgColorDark} rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 border border-white/50 dark:border-gray-700/50 hover:border-transparent overflow-hidden h-full flex flex-col`}
                >
                  {/* Background Decoration */}
                  <div
                    className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-r ${cert.color} opacity-10 rounded-full`}
                  ></div>

                  {/* Certificate Icon */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`inline-flex p-4 bg-gradient-to-r ${cert.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <Award className="text-white" size={28} />
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="relative z-10 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
                      {cert.title}
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-200 font-semibold mb-4">{cert.issuer}</p>

                    {/* Date and Category */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                        <Calendar size={16} />
                        <span className="text-sm font-medium">{cert.date}</span>
                      </div>
                      <div
                        className={`inline-block px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-full text-sm font-semibold shadow-md`}
                      >
                        {cert.category}
                      </div>
                    </div>

                    {/* Spacer to push button to bottom */}
                    <div className="flex-1"></div>

                    {/* View Certificate Button */}
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r ${cert.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl`}
                    >
                      <ExternalLink size={18} />
                      View Certificate
                    </a>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${cert.color} w-0 group-hover:w-full transition-all duration-700 rounded-b-3xl`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
