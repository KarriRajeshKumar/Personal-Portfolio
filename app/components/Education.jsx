"use client"
import { useState, useEffect, useRef } from "react"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export default function Education() {
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

  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "GMR Institute of Technology",
      location: "Rajam, AP",
      period: "2022 - Present",
      grade: "CGPA: 9.79 (up to 6th semester)",
      current: true,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      bgColorDark: "from-purple-800/40 to-pink-800/40",
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "Sri Chaitanya Junior College",
      location: "Visakhapatnam, AP",
      period: "2020-2022",
      grade: "Score: 975/1000",
      current: false,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      bgColorDark: "from-blue-900/20 to-cyan-900/20",
    },
    {
      degree: "SSC (Class X)",
      institution: "Holy Cross School",
      location: "Seethanagaram, AP",
      period: "2019-2020",
      grade: "Score: 588/600",
      current: false,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      bgColorDark: "from-green-900/20 to-emerald-900/20",
    },
  ]

  return (
    <section id="education" ref={sectionRef} className="py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-600 dark:to-pink-600 rounded-full opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              A journey of academic excellence and continuous learning
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : index % 2 === 0
                      ? "-translate-x-10 opacity-0"
                      : "translate-x-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`relative bg-gradient-to-r ${edu.bgColor} dark:bg-gradient-to-l dark:${edu.bgColorDark} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-transparent`}
                >
                  {/* Current Badge */}
                  {edu.current && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse-custom">
                      Current
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    {/* Left Content */}
                    <div className="flex-1 mb-4 lg:mb-0">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`p-3 bg-gradient-to-r ${edu.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <GraduationCap className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-lg sm:text-xl text-gray-700 dark:text-white font-semibold mb-2">{edu.institution}</p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 dark:text-gray-100 mb-3">
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              <span className="text-sm sm:text-base">{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span className="text-sm sm:text-base">{edu.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Content - Grade */}
                    <div className="flex items-center gap-3">
                      <Award
                        className={`text-2xl bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}
                        size={24}
                      />
                      <div
                        className={`px-4 py-2 bg-gradient-to-r ${edu.color} text-white rounded-full font-bold text-sm sm:text-base shadow-lg group-hover:scale-105 transition-transform duration-300`}
                      >
                        {edu.grade}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${edu.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`}
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
