"use client"
import { useState, useEffect, useRef } from "react"
import { Calendar, Users, BookOpen, Briefcase } from "lucide-react"

export default function Experience() {
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

  const experiences = [
    {
      title: "Teaching Assistant",
      company: "NXT Wave CCBP 4.0 Technologies",
      period: "Present",
      type: "Current Position",
      icon: <BookOpen size={28} />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      bgColorDark: "from-purple-900/40 to-pink-900/40",
      achievements: ["100+ Students Mentored", "100+ Problems Resolved", "95% Student Satisfaction", "Expert in Python Teaching"],
    },
    {
      title: "Volunteer Educator",
      company: "Government School Initiative",
      period: "June 2024 - July 2024",
      type: "Community Impact Project",
      icon: <Users size={28} />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      bgColorDark: "from-blue-900/40 to-cyan-900/40",
      achievements: ["100+ Students Reached", "4-Week Program", "Rural Impact Initiative"],
    },
  ]

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%236366f1' fillOpacity='0.3'%3E%3Cpath d='M50 50c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM10 10c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM60 60c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Empowering others through education and technology
            </p>
          </div>

          {/* Equal-height Responsive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <div
                  className={`relative h-full flex flex-col justify-between bg-gradient-to-r ${exp.bgColor} dark:bg-gradient-to-l dark:${exp.bgColorDark} rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 dark:border-gray-600/50 hover:border-transparent overflow-hidden`}
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${exp.color} opacity-10 rounded-full -translate-y-16 translate-x-16`}
                  ></div>

                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex items-start gap-6 mb-6 lg:mb-0">
                      <div
                        className={`p-4 bg-gradient-to-r ${exp.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <div className="text-white">{exp.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 font-semibold mb-3">{exp.company}</p>
                        <div
                          className={`inline-block px-4 py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-semibold shadow-md`}
                        >
                          {exp.type}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 bg-white/70 dark:bg-gray-700/70 px-4 py-2 rounded-full backdrop-blur-sm">
                      <Calendar size={18} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                      <Briefcase size={20} className="text-purple-600" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className={`px-4 py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300`}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${exp.color} w-0 group-hover:w-full transition-all duration-700 rounded-b-3xl`}
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
