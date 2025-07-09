"use client"
import { useState, useEffect, useRef } from "react"
import { Code, Database, Globe, Wrench, Zap } from "lucide-react"

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={28} />,
      skills: ["Python", "C", "C++", "Java", "JavaScript"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      bgColorDark: "from-purple-900/20 to-pink-900/20",
      hoverColor: "hover:from-purple-600 hover:to-pink-600",
    },
    {
      title: "Web Development",
      icon: <Globe size={28} />,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "React.js"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      bgColorDark: "from-blue-900/20 to-cyan-900/20",
      hoverColor: "hover:from-blue-600 hover:to-cyan-600",
    },
    {
      title: "Databases",
      icon: <Database size={28} />,
      skills: ["MySQL", "SQLite3"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      bgColorDark: "from-green-900/20 to-emerald-900/20",
      hoverColor: "hover:from-green-600 hover:to-emerald-600",
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={28} />,
      skills: ["Git", "GitHub", "Vercel"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      bgColorDark: "from-orange-900/20 to-red-900/20",
      hoverColor: "hover:from-orange-600 hover:to-red-600",
    },
    {
      title: "Coding Achievements",
      icon: <Zap size={28} />,
      skills: ["LeetCode: 300+ Problems", "Data Structures", "Algorithms", "Problem Solving"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      bgColorDark: "from-indigo-900/20 to-purple-900/20",
      hoverColor: "hover:from-indigo-600 hover:to-purple-600",
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-16 lg:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-600 dark:to-pink-600 rounded-full opacity-20 animate-float"></div>
      <div
        className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-r from-blue-300 to-cyan-300 dark:from-blue-600 dark:to-cyan-600 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-green-300 to-emerald-300 dark:from-green-600 dark:to-emerald-600 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-32 right-10 w-24 h-24 bg-gradient-to-r from-orange-300 to-red-300 dark:from-orange-600 dark:to-red-600 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Technical{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`relative bg-gradient-to-br ${category.bgColor} dark:bg-gradient-to-l dark:${category.bgColorDark} rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border border-white/50 dark:border-gray-700/50 hover:border-transparent overflow-hidden h-full`}
                >
                  {/* Background Decoration */}
                  <div
                    className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-r ${category.color} opacity-10 rounded-full`}
                  ></div>

                  {/* Icon and Title */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`inline-flex p-4 bg-gradient-to-r ${category.color} ${category.hoverColor} rounded-2xl shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                    >
                      <div className="text-white">{category.icon}</div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group/skill transform transition-all duration-300 hover:translate-x-2"
                        style={{ animationDelay: `${skillIndex * 0.1}s` }}
                      >
                        <div
                          className={`flex items-center justify-between p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl hover:bg-white/90 dark:hover:bg-gray-800/90 hover:shadow-md transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-600`}
                        >
                          <span className="font-medium text-gray-700 dark:text-gray-200 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors duration-300">
                            {skill}
                          </span>
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full group-hover/skill:scale-150 transition-transform duration-300`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${category.color} w-0 group-hover:w-full transition-all duration-700 rounded-b-3xl`}
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
