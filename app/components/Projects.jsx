"use client"
import { useState, useEffect, useRef } from "react"
import { ExternalLink, Github, Code, Zap } from "lucide-react"

export default function Projects() {
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

  const projects = [
    {
      title: "Personal Voice Assistant",
      description:
        "A web-based voice assistant using Web Speech API for real-time voice commands and speech synthesis, enabling smooth voice interaction and task automation.",
      techStack: ["HTML", "CSS", "JavaScript", "Web Speech API"],
      githubUrl: "https://github.com/KarriRajeshKumar",
      liveUrl: "https://personal-voice-assistant.vercel.app/",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-200 to-pink-200",
      bgColorDark: "from-purple-800/40 to-pink-800/40",
      image: "/images/voice-assistant.svg",
    },
    {
      title: "Vision Sketch",
      description:
        "Interactive canvas web app leveraging Gemini API to convert sketches into AI-powered descriptive captions in real-time, enhancing creative expression through image analysis.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "Gemini API"],
      githubUrl: "https://github.com/KarriRajeshKumar/Vision-Sketch",
      liveUrl: "https://vision-sketch.vercel.app/",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-200 to-cyan-200",
      bgColorDark: "from-blue-800/40 to-cyan-800/40",
      image: "/images/vision-sketch.svg",
    },
    {
      title: "Student Performance Predictor",
      description:
        "A machine learning tool predicting student academic outcomes with data visualization and predictive modeling to provide actionable insights for improvement.",
      techStack: ["HTML", "CSS", "JavaScript", "Machine Learning", "Data Analysis"],
      githubUrl: "https://github.com/KarriRajeshKumar/Student-Performance-Predictor",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-200 to-orange-200",
      bgColorDark: "from-amber-800/40 to-orange-800/40",
      image: "/images/performance-predictor.svg",
    },
    {
      title: "Card Matching Game",
      description:
        "An engaging memory game featuring countdown timer, card flip animations, and score tracking for an interactive and fun user experience.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://karrirajeshkumar.github.io/Card-Matching-Game/",
      githubUrl: "https://github.com/KarriRajeshKumar/Card-Matching-Game",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-200 to-red-200",
      bgColorDark: "from-orange-800/40 to-red-800/40",
      image: "/images/card-game.svg",
    },
    {
      title: "Blog Page",
      description:
        "Modern multi-page blog app with client-side routing, reusable components, and responsive design for seamless content presentation.",
      techStack: ["HTML", "CSS", "JavaScript", "React", "React Router"],
      githubUrl: "https://github.com/KarriRajeshKumar",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-200 to-purple-200",
      bgColorDark: "from-indigo-800/40 to-purple-800/40",
      image: "/images/blog-page.svg",
    },
    {
      title: "TodoList Application",
      description:
        "Comprehensive todo app with task management, priority levels, categories, drag-and-drop support, and local storage persistence.",
      techStack: ["HTML", "CSS", "JavaScript", "Local Storage"],
      liveUrl: "https://todolist2004.ccbp.tech/",
      githubUrl: "https://github.com/KarriRajeshKumar",
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-200 to-cyan-200",
      bgColorDark: "from-teal-800/40 to-cyan-800/40",
      image: "/todo-text.svg",
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-2.15 21.906a2 2 0 01-2.718-.688l-1.866-3.23a2 2 0 01.688-2.718l1.866-3.23a2 2 0 012.718.688l1.866 3.23a2 2 0 01-.688 2.718l-1.866 3.23z' fill='%236366f1' fillOpacity='0.4' fillRule='evenodd'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              Showcasing innovative solutions and creative problem-solving
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group transform transition-all duration-1000 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`relative bg-gradient-to-r ${project.bgColor} ${
                    index === 0 ? "dark:bg-gradient-to-l" : "dark:bg-gradient-to-r"
                  } dark:${project.bgColorDark} rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-transparent overflow-hidden h-full`}
                >
                  {/* Background Decoration */}
                  <div
                    className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-r ${project.color} opacity-10 rounded-full`}
                  ></div>

                  {/* Project Image */}
                  {project.image && (
                    <div className="relative z-10 mb-6 overflow-hidden rounded-xl">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = "none"
                            e.target.nextSibling.style.display = "flex"
                          }}
                        />
                        <div className="hidden absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-500 flex items-center justify-center">
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                          >
                            <Code size={24} className="text-white" />
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 font-medium">{project.title}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Project Header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 bg-gradient-to-r ${project.color} text-white rounded-full hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg`}
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                        <a
                          href={project.githubUrl || "https://github.com/KarriRajeshKumar"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg"
                        >
                          <Github size={18} />
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-100 leading-relaxed mb-6">{project.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                      <Code size={18} className="text-blue-500" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm text-gray-700 dark:text-gray-100 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-200 hover:scale-105 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.color} w-0 group-hover:w-full transition-all duration-700 rounded-b-3xl`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* View More on GitHub Button */}
          <div
            className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href="https://github.com/KarriRajeshKumar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-semibold"
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
