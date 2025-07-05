"use client"

import { useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certificates from "./components/Certificates"
import Achievements from "./components/Achievements"
import Extracurricular from "./components/Extracurricular"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  useEffect(() => {
    // Ensure we're on the home page
    if (typeof window !== "undefined") {
      // Force scroll to top on page load
      window.scrollTo(0, 0)
      
      // Clear any hash fragments
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Achievements />
      <Extracurricular />
      <Contact />
      <Footer />
    </div>
  )
}