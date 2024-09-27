"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Code, Video, PenTool } from "lucide-react";

const services = [
  {
    title: "Programming & Tech",
    description: "Craft innovative solutions with cutting-edge technology",
    image: "/placeholder.svg?height=600&width=600",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Video & Animation",
    description: "Bring your ideas to life with stunning visuals",
    image: "/placeholder.svg?height=600&width=600",
    icon: Video,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Writing & Translation",
    description: "Communicate effectively across languages and cultures",
    image: "/placeholder.svg?height=600&width=600",
    icon: PenTool,
    color: "from-green-500 to-teal-500",
  },
];

export default function EnhancedHeroSlider() {
  const [currentService, setCurrentService] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentService((prev) => (prev + 1) % services.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentService((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying) {
      timer = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] to-[#2d1854] flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative">
        <div className="text-white space-y-8 lg:w-1/2 z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b657ff] to-[#ff8989]">
              thrive
            </span>{" "}
            towards
            <br />
            your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b657ff] to-[#ff8989]">
              envision
            </span>
            .
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Empower your vision with our expert services
          </p>
          <ul className="space-y-4 text-lg md:text-xl">
            {services.map((service, index) => (
              <li
                key={index}
                className={`transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                  index === currentService ? "text-[#b657ff]" : "text-gray-400"
                }`}
                onClick={() => setCurrentService(index)}
              >
                <service.icon
                  className={`w-6 h-6 ${
                    index === currentService
                      ? "text-[#b657ff]"
                      : "text-gray-400"
                  }`}
                />
                {service.title}
              </li>
            ))}

            
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-[#b657ff] to-[#ff8989] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity transform hover:scale-105">
              Book Your Free Consult
            </button>
            <button className="bg-[#2d1854] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#3d2172] transition-colors transform hover:scale-105">
              Get a Quote
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 relative overflow-hidden rounded-2xl shadow-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentService * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentService(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentService
                    ? "bg-white scale-125"
                    : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-4 right-4 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-30 transition-all"
      >
        {isAutoPlaying ? "Pause" : "Play"} Autoplay
      </button>
    </div>
  );
}
