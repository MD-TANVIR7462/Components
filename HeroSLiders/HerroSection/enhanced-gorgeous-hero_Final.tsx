import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion'
import { ShoppingBag, ChevronRight, Star, Truck, Zap, RotateCcw, ArrowRight } from 'lucide-react'
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

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default function EnhancedGorgeousHeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-[0.03]"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() * 0.5 + 0.5, 1],
              opacity: [0.03, 0.1, 0.03],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col lg:flex-row items-center justify-center">
        {/* Enhanced Content */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 lg:pr-8"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 animate-gradient-x">Step into</span>
              <br />
              <span className="text-white relative">
                the Future
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-indigo-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover our revolutionary collection that blends cutting-edge design with unparalleled comfort. Elevate your footwear game today.
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white hover:from-pink-600 hover:to-indigo-600 text-base sm:text-lg px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
              <ShoppingBag className="mr-2 h-5 w-5 group-hover:animate-bounce" /> Shop Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-purple-300 hover:bg-purple-300 hover:text-purple-900 text-base sm:text-lg px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 group">
              Explore Collection <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          {/* Enhanced Trust indicators and features */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0"
          >
            {[
              { icon: Star, text: "4.9/5 Rating", subtext: "From 10k+ Customers", color: "text-yellow-300" },
              { icon: Truck, text: "Free Shipping", subtext: "On Orders Over $100", color: "text-green-300" },
              ...features.map(f => ({ ...f, color: "text-blue-300", subtext: "" }))
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center justify-center sm:justify-start bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-4 transition-all duration-300 hover:bg-opacity-20 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <feature.icon className={`h-8 w-8 ${feature.color} mr-4 group-hover:animate-pulse`} />
                <div>
                  <p className="text-white font-semibold">{feature.text}</p>
                  {feature.subtext && <p className="text-purple-200 text-sm">{feature.subtext}</p>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Image Showcase */}
        <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-[600px] relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentImage}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.9, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotateY: 90 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src={images[currentImage]}
                alt={`Featured Shoe ${currentImage + 1}`}
                width={600}
                height={600}
                className="object-cover object-center rounded-3xl shadow-2xl w-full h-full"
                priority={currentImage === 0}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent rounded-3xl"
                animate={{
                  background: [
                    "linear-gradient(to top, rgba(88, 28, 135, 0.7), transparent)",
                    "linear-gradient(to top, rgba(157, 23, 77, 0.7), transparent)",
                    "linear-gradient(to top, rgba(88, 28, 135, 0.7), transparent)",
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Enhanced Product info card */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">UltraBoost X</h3>
            <p className="text-purple-200 mb-4 text-sm sm:text-base">Experience unparalleled comfort and style with our latest innovation.</p>
            <div className="flex flex-wrap justify-between items-center">
              <span className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-indigo-300 mb-2 sm:mb-0 animate-pulse">$199.99</span>
              <Button size="lg" className="w-full sm:w-auto bg-white text-purple-900 hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 group">
                View Details
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Enhanced image navigation dots */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage ? 'bg-white' : 'bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}