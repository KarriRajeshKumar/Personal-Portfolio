"use client"
import { Heart, Code, Coffee } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            opacity: 0.1,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Name and Title */}
          <h3 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Karri Rajesh Kumar
          </h3>
          <p className="text-gray-300 text-lg mb-6">Full Stack Developer & Machine Learning Enthusiast</p>



          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Karri Rajesh Kumar. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with React.js • Designed for impact • Crafted with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
