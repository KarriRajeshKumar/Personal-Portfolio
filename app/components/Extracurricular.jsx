"use client"
import { useState, useEffect, useRef } from "react"
import { Users, Award, Calendar, MapPin } from "lucide-react"

export default function Extracurricular() {
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

  const activities = [
    {
      role: "CSI (Computer Society of India) Coordinator",
      organization: "Computer Society of India",
      duration: "2023 - Present",
      location: "GMRIT",
      description:
        "Leading and coordinating technical activities, workshops, and events for the Computer Society of India chapter at GMRIT. Organizing coding competitions, hackathons, and technical seminars to promote computer science education and innovation.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      bgColorDark: "from-blue-900/20 to-cyan-900/20",
    },
    {
      role: "Vice President of Student Council",
      organization: "Student Council GMRIT",
      duration: "2023 - Present",
      location: "GMRIT",
      description:
        "Serving as Vice President of the Student Council, representing student interests and coordinating various campus activities. Leading initiatives for student welfare, cultural events, and academic support programs.",
      icon: Award,
      color: "from-pink-500 to-orange-500",
      bgColor: "from-pink-50 to-orange-50",
      bgColorDark: "from-pink-900/20 to-orange-900/20",
    },
  ]

  return (
    <section
      id="extracurricular"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-600 dark:to-pink-600 rounded-full opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-blue-600 dark:to-cyan-600 rounded-full opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-200 to-emerald-200 dark:from-green-600 dark:to-emerald-600 rounded-full opacity-10 animate-float"
        style={{ animationDelay: "2s" }}
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
              Extracurricular{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Activities
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Leadership roles and activities that demonstrate my commitment to community building,
              technical excellence, and student development.
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {activities.map((activity, index) => (
              <div
                key={activity.role}
                className={`group transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`relative h-full flex flex-col justify-between bg-gradient-to-r ${activity.bgColor} dark:bg-gradient-to-l dark:${activity.bgColorDark} rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 dark:border-gray-600/50 hover:border-transparent overflow-hidden`}
                >
                  {/* Background Decoration */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${activity.color} opacity-10 rounded-full -translate-y-16 translate-x-16`}
                  ></div>

                  {/* Role Header */}
                  <div className="flex items-start gap-4 mb-6 relative z-10">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${activity.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                    >
                      <activity.icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {activity.role}
                      </h3>
                      <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                        {activity.organization}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{activity.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{activity.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed relative z-10">
                    {activity.description}
                  </p>

                  {/* Hover Bottom Border */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${activity.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl`}
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
