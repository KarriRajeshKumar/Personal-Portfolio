"use client"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fillOpacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20 dark:opacity-10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 animate-float"></div>
      <div
        className="absolute top-40 right-10 sm:right-20 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-10 sm:left-20 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)]">
            {/* Left Side - Profile Image */}
            <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start order-2 lg:order-1">
              {/* KRK Logo/Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                KRK
              </h2>
              <div
                className={`w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl transform transition-all duration-1000 ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"} hover:scale-110 hover:rotate-6 overflow-hidden border-4 border-white/20`}
              >
                <img
                  src="/profile.jpg"
                  alt="Karri Rajesh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left order-1 lg:order-2">
              {/* Main Heading */}
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Karri Rajesh Kumar
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-200 mb-6 sm:mb-8 transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                Full Stack Developer & Machine Learning Enthusiast
              </p>

              {/* Description */}
              <p
                className={`text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                Building smart and complete web applications by combining full stack web development with machine learning,
                making technology more useful and intelligent.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transform transition-all duration-1000 delay-1100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <a
                  href="#projects"
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-semibold text-sm sm:text-base text-center mobile-button"
                >
                  <span className="flex items-center justify-center gap-2">
                    View My Work
                    <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
                  </span>
                </a>
                <a
                  href="/resume.pdf"
                  download="Karri_Rajesh_Kumar_Resume.pdf"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-semibold text-sm sm:text-base text-center mobile-button"
                >
                  <span className="flex items-center justify-center gap-2">
                    Download Resume
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="sm:w-6 sm:h-6 text-white/60" />
      </div>
    </section>
  )
}
