'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShoppingBag, ChevronRight, Star, Truck } from 'lucide-react'
import { Button } from "@/components/ui/button"

const images = [
  "https://images.pexels.com/photos/19090/pexels-photo.jpg",
  "https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?w=826",
  "https://images.unsplash.com/photo-1591950845424-4d3ef17c72d8?w=1964"
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-pink-500 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-indigo-500 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col lg:flex-row items-center">
        {/* Content */}
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 mb-6 leading-tight">
            Step into the Future of Style
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-xl mx-auto lg:mx-0">
            Discover our revolutionary collection that blends cutting-edge design with unparalleled comfort. Elevate your footwear game today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white hover:from-pink-600 hover:to-indigo-600 text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <ShoppingBag className="mr-2 h-5 w-5" /> Shop Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-purple-300 hover:bg-purple-300 hover:text-purple-900 text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Explore Collection <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full p-3 mr-4">
                <Star className="h-6 w-6 text-yellow-300" />
              </div>
              <div>
                <p className="text-white font-semibold">4.9/5 Rating</p>
                <p className="text-purple-200 text-sm">From 10k+ Happy Customers</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-full p-3 mr-4">
                <Truck className="h-6 w-6 text-green-300" />
              </div>
              <div>
                <p className="text-white font-semibold">Free Express Shipping</p>
                <p className="text-purple-200 text-sm">On Orders Over $100</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Image Showcase */}
        <div className="lg:w-1/2 relative h-[500px] lg:h-[700px]">
          {images.map((src, index) => (
            <motion.div
              key={src}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: currentImage === index ? 1 : 0,
                scale: currentImage === index ? 1 : 0.8,
              }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-full h-full">
                <motion.img
                  src={src}
                  alt={`Featured Shoe ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl shadow-2xl"
                  style={{ y: index === 1 ? y1 : y2 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent rounded-3xl" />
              </div>
            </motion.div>
          ))}
          
          {/* Glassmorphism product info card */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 w-5/6 max-w-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">UltraBoost X</h3>
            <p className="text-purple-200 mb-4">Experience unparalleled comfort and style with our latest innovation.</p>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-white">$199.99</span>
              <Button size="sm" className="bg-white text-purple-900 hover:bg-purple-100">
                View Details
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}