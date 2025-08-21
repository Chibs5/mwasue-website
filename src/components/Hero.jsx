import { useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChefHat, Star, Users } from 'lucide-react'

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [backgroundImages, setBackgroundImages] = useState([])
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Load background images 
  useEffect(() => {
    const loadBackgroundImages = async () => {
      try {
        const images = [
          {
            src: (await import('../assets/Fried Fish & Nshima.jpg')).default,
            alt: "Fried Fish & Nshima"
          },
          {
            src: (await import('../assets/Susan1.jpg')).default,
            alt: "Susan - Head Chef"
          },
          {
            src: (await import('../assets/Samosas.jpg')).default,
            alt: "Golden Samosas"
          },
          {
            src: (await import('../assets/Ingredients.jpg')).default,
            alt: "Fresh Ingredients"
          },
          {
            src: (await import('../assets/Pies.jpg')).default,
            alt: "Homemade Pies"
          },
          {
            src: (await import('../assets/Susan3.jpg')).default,
            alt: "Susan Cooking"
          },
          {
            src: (await import('../assets/Fried Fish.jpg')).default,
            alt: "Perfectly Fried Fish"
          },
          {
            src: (await import('../assets/scones.jpg')).default,
            alt: "Fresh Scones"
          },
          {
            src: (await import('../assets/Ingredients2.jpg')).default,
            alt: "Colorful Vegetables"
          },
          {
            src: (await import('../assets/Pies2.jpg')).default,
            alt: "Assorted Pies"
          },
          {
            src: (await import('../assets/fish.jpg')).default,
            alt: "Fresh Fish Selection"
          }
        ]
        setBackgroundImages(images)
        setImagesLoaded(true)
      } catch (error) {
        console.error('Error loading background images:', error)
        setImagesLoaded(true)
      }
    }
    loadBackgroundImages()
  }, [])

  // Auto-advance slideshow
  useEffect(() => {
    if (!imagesLoaded || backgroundImages.length === 0) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [imagesLoaded, backgroundImages.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Images Slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {imagesLoaded && backgroundImages.length > 0 && (
            <Motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={backgroundImages[currentImageIndex]?.src}
                alt={backgroundImages[currentImageIndex]?.alt}
                className="w-full h-full object-cover"
                style={{ 
                  filter: 'blur(0.5px) brightness(0.8)',
                }}
              />
            </Motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Gradient Overlay - maintains your brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/75 via-orange-400/80 to-red-500/75"></div>

      {/* Decorative blur elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <Motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg"
          >
            Premium
            <span className="block text-yellow-200">Catering Services</span>
          </Motion.h1>

          {/* Subtitle */}
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto drop-shadow-md"
          >
            Exceptional culinary experiences for your special events in Zambia
          </Motion.p>

          {/* Core values preview */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-white/90 text-sm md:text-base"
          >
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="h-5 w-5" />
              <span>Quality First</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <ChefHat className="h-5 w-5" />
              <span>Passion & Heart</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="h-5 w-5" />
              <span>Excellence in Service</span>
            </div>
          </Motion.div>

          {/* CTA Buttons with Navigation */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="bg-white text-orange-500 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
              >
                View Our Services
              </Link>
            </Motion.div>
            
            <Motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300 inline-block backdrop-blur-sm bg-white/10"
              >
                Contact Us
              </Link>
            </Motion.div>
          </Motion.div>
        </Motion.div>
      </div>

      {/* Image indicators */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2"
      >
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </Motion.div>

      {/* Scroll indicator */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm"
        >
          <Motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </Motion.div>
      </Motion.div>
    </section>
  )
}

export default Hero