'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, ChevronRight, Star, Truck, Zap, RotateCcw } from 'lucide-react'
import { Button } from "@/components/ui/button"

const images = [
  "https://images.pexels.com/photos/19090/pexels-photo.jpg",
  "https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?w=826",
  "https://images.unsplash.com/photo-1591950845424-4d3ef17c72d8?w=1964"
]

const features = [
  { icon: Zap, text: "Lightning-fast comfort" },
  { icon: RotateCcw, text: "360° support system" },
]

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-[0.03] animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 4 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col lg:flex-row items-center justify-center">
        {/* Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">Step into</span>
              <br />
              <span className="text-white">the Future</span>
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover our revolutionary collection that blends cutting-edge design with unparalleled comfort. Elevate your footwear game today.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white hover:from-pink-600 hover:to-indigo-600 text-base sm:text-lg px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <ShoppingBag className="mr-2 h-5 w-5" /> Shop Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-purple-300 hover:bg-purple-300 hover:text-purple-900 text-base sm:text-lg px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Explore Collection <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
          
          {/* Trust indicators and features */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center justify-center sm:justify-start bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-4 transition-all duration-300 hover:bg-opacity-20">
              <Star className="h-8 w-8 text-yellow-300 mr-4" />
              <div>
                <p className="text-white font-semibold">4.9/5 Rating</p>
                <p className="text-purple-200 text-sm">From 10k+ Customers</p>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-4 transition-all duration-300 hover:bg-opacity-20">
              <Truck className="h-8 w-8 text-green-300 mr-4" />
              <div>
                <p className="text-white font-semibold">Free Shipping</p>
                <p className="text-purple-200 text-sm">On Orders Over $100</p>
              </div>
            </div>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center sm:justify-start bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-4 transition-all duration-300 hover:bg-opacity-20">
                <feature.icon className="h-8 w-8 text-blue-300 mr-4" />
                <p className="text-white font-semibold">{feature.text}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image Showcase */}
        <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] relative">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImage}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src={images[currentImage]}
                alt={`Featured Shoe ${currentImage + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center rounded-3xl shadow-2xl"
                priority={currentImage === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent rounded-3xl" />
            </motion.div>
          </AnimatePresence>
          
          {/* Product info card */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">UltraBoost X</h3>
            <p className="text-purple-200 mb-4 text-sm sm:text-base">Experience unparalleled comfort and style with our latest innovation.</p>
            <div className="flex flex-wrap justify-between items-center">
              <span className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300 mb-2 sm:mb-0">$199.99</span>
              <Button size="lg" className="w-full sm:w-auto bg-white text-purple-900 hover:bg-purple-100 transition-all duration-300 transform hover:scale-105">
                View Details
              </Button>
            </div>
          </motion.div>

          {/* Image navigation dots */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage ? 'bg-white scale-125' : 'bg-white/50 scale-100'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}