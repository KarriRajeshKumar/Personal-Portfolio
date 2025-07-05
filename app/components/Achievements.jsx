"use client"
import { useState, useEffect, useRef } from "react"
import { Trophy, Star, Target, BookOpen, Award, TrendingUp } from "lucide-react"

export default function Achievements() {
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

  const achievements = [
    {
      title: "Merit Scholarship Recipient",
      description:
        "GMR Institute of Technology – Awarded for outstanding academic performance and top-ranking results.",
      icon: <Trophy size={28} />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
      bgColorDark: "from-yellow-900/20 to-orange-900/20",
      stats: "Top 5% of Class",
    },
    {
      title: "Research Publication",
      description:
        '"Enhancing Math Reasoning Using LLMs", published in IRJMETS Journal, focusing on leveraging Large Language Models to strengthen mathematical problem-solving.',
      icon: <BookOpen size={28} />,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      bgColorDark: "from-blue-900/20 to-indigo-900/20",
      stats: "Published Research",
    },
    {
      title: "Problem-Solving Excellence",
      description:
        "Solved 300+ coding challenges on LeetCode, demonstrating exceptional algorithmic thinking and proficiency in data structures and algorithms.",
      icon: <Target size={28} />,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      bgColorDark: "from-green-900/20 to-emerald-900/20",
      stats: "300+ Problems Solved",
    },
    {
      title: "NXT Wave Consistency Badge",
      description:
        "Earned a badge for maintaining consistent learning over 250+ days, showcasing dedication and commitment to continuous improvement.",
      icon: <Star size={28} />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      bgColorDark: "from-purple-800/40 to-pink-800/40",
      stats: "250+ Days Streak",
    },
  ]

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%236366f1' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
              Milestones that mark my journey of growth and excellence
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`relative bg-gradient-to-br ${achievement.bgColor} dark:bg-gradient-to-l dark:${achievement.bgColorDark} rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border border-white/50 dark:border-gray-700/50 hover:border-transparent overflow-hidden h-full`}
                >
                  {/* Background Decoration */}
                  <div
                    className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-r ${achievement.color} opacity-10 rounded-full`}
                  ></div>

                  {/* Achievement Header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`p-4 bg-gradient-to-r ${achievement.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                      >
                        <div className="text-white">{achievement.icon}</div>
                      </div>
                      <div
                        className={`px-4 py-2 bg-gradient-to-r ${achievement.color} text-white rounded-full text-sm font-bold shadow-md`}
                      >
                        {achievement.stats}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                  </div>

                  {/* Achievement Description */}
                  <div className="relative z-10">
                    <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">{achievement.description}</p>

                    {/* Achievement Badge */}
                    <div className="flex items-center gap-3 p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl">
                      <Award className="text-yellow-500" size={20} />
                      <span className="text-gray-700 dark:text-gray-200 font-semibold text-sm">Verified Achievement</span>
                      <TrendingUp className="text-green-500 ml-auto" size={20} />
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${achievement.color} w-0 group-hover:w-full transition-all duration-700 rounded-b-3xl`}
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
