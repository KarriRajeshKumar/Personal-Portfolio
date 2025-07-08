"use client"
import { useState, useEffect, useRef } from "react"
import { Target, Heart, Code, Lightbulb } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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

  const highlights = [
    {
      icon: <Target size={24} />,
      title: "Goal-Oriented",
      description: "Focused on creating intelligent web solutions",
    },
    {
      icon: <Heart size={24} />,
      title: "Passionate",
      description: "Love for technology and continuous learning",
    },
    {
      icon: <Code size={24} />,
      title: "Full-Stack",
      description: "Expertise in both frontend and backend development",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Innovative",
      description: "Always exploring new technologies and solutions",
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width%3D%22100%22 height%3D%22100%22 viewBox%3D%220 0 100 100%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath d%3D%22M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z%22 fill%3D%22%236366f1%22 fillOpacity%3D%220.4%22 fillRule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              className={`space-y-6 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  I'm a dedicated <span className="font-semibold text-purple-600 dark:text-purple-400">Full-Stack Developer</span> and{" "}
                  <span className="font-semibold text-pink-600 dark:text-pink-400">Machine Learning enthusiast</span>, currently studying at GMR Institute of Technology.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  I love creating smart and modern web applications—tools that not only work well but also learn, adapt, and make life easier for users. I'm driven by curiosity and a passion for turning complex problems into simple, useful solutions.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                  Outside of coding, I enjoy mentoring other learners, working on community projects, and staying up-to-date with the latest trends in AI and technology. I'm always excited to build new things, grow my skills, and make a real difference.
                </p>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="group p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-600"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-full group-hover:from-purple-200 group-hover:to-pink-200 dark:group-hover:from-purple-800 dark:group-hover:to-pink-800 transition-all duration-300">
                        <div className="text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                          {highlight.icon}
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">{highlight.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {[
              { number: "100+", label: "Students Mentored", color: "from-blue-500 to-cyan-500" },
              { number: "300+", label: "LeetCode Problems", color: "from-purple-500 to-pink-500" },
              { number: "250+", label: "Learning Days", color: "from-orange-500 to-red-500" },
              { number: "9.79", label: "CGPA", color: "from-green-500 to-emerald-500" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm sm:text-base mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
