import { useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { X, Camera, ChefHat, Users, Heart } from 'lucide-react'
import Navigation from '../components/Navigation'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageIndex, setImageIndex] = useState(0)
  const [galleryImages, setGalleryImages] = useState([])

  // Dynamic image loading
  useEffect(() => {
    const loadImages = async () => {
      try {
        // Dynamic imports for better loading
        const images = [
          {
            src: (await import('../assets/Fried Fish & Nshima.jpg')).default,
            alt: "Fried Fish & Nshima",
            title: "Traditional Fried Fish & Nshima",
            description: "Authentic Zambian cuisine prepared with love and tradition"
          },
          {
            src: (await import('../assets/Susan1.jpg')).default,
            alt: "Susan - Head Chef",
            title: "Susan - Our Head Chef",
            description: "Passionate about creating exceptional culinary experiences"
          },
          {
            src: (await import('../assets/Samosas.jpg')).default,
            alt: "Golden Samosas",
            title: "Crispy Golden Samosas",
            description: "Perfectly seasoned and fried to golden perfection"
          },
          {
            src: (await import('../assets/Ingredients.jpg')).default,
            alt: "Fresh Ingredients",
            title: "Farm Fresh Ingredients",
            description: "Quality starts with the finest, freshest ingredients"
          },
          {
            src: (await import('../assets/Pies.jpg')).default,
            alt: "Homemade Pies",
            title: "Homemade Meat Pies",
            description: "Flaky pastry filled with seasoned meat and vegetables"
          },
          {
            src: (await import('../assets/Susan3.jpg')).default,
            alt: "Susan Cooking",
            title: "Chef Susan in Action",
            description: "Our founder bringing passion to every dish"
          },
          {
            src: (await import('../assets/Fried Fish.jpg')).default,
            alt: "Perfectly Fried Fish",
            title: "Expertly Prepared Fish",
            description: "Fresh fish prepared with traditional Zambian spices"
          },
          {
            src: (await import('../assets/scones.jpg')).default,
            alt: "Fresh Scones",
            title: "Freshly Baked Scones",
            description: "Light, fluffy scones perfect for any occasion"
          },
          {
            src: (await import('../assets/Ingredients2.jpg')).default,
            alt: "Colorful Vegetables",
            title: "Vibrant Fresh Vegetables",
            description: "Locally sourced vegetables for maximum flavor and nutrition"
          },
          {
            src: (await import('../assets/Pies2.jpg')).default,
            alt: "Assorted Pies",
            title: "Variety of Baked Goods",
            description: "An assortment of our popular baked items"
          },
          {
            src: (await import('../assets/fish.jpg')).default,
            alt: "Fresh Fish Selection",
            title: "Premium Fish Selection",
            description: "Fresh fish ready for preparation in our signature style"
          }
        ]
        
        setGalleryImages(images)
        console.log('All images loaded:', images)
      } catch (error) {
        console.error('Error loading images:', error)
      }
    }

    loadImages()
  }, [])

  const openModal = (image, index) => {
    setSelectedImage(image)
    setImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
    setImageIndex(0)
  }

  const nextImage = () => {
    const newIndex = (imageIndex + 1) % galleryImages.length
    setImageIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const prevImage = () => {
    const newIndex = imageIndex === 0 ? galleryImages.length - 1 : imageIndex - 1
    setImageIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2
      }
    }
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gray-50 pt-16">
        
        {/* Hero Section */}
        <Motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Camera className="h-16 w-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              A visual journey through our culinary creations, passionate team, and memorable events
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
              >
                <ChefHat className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Authentic Flavors</h3>
                <p className="text-white/80 text-sm">Traditional & International</p>
              </Motion.div>
              
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
              >
                <Users className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Expert Team</h3>
                <p className="text-white/80 text-sm">Passionate Professionals</p>
              </Motion.div>
              
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
              >
                <Heart className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Made with Love</h3>
                <p className="text-white/80 text-sm">Every Dish, Every Event</p>
              </Motion.div>
            </div>
          </div>
        </Motion.section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Culinary Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From fresh ingredients to finished masterpieces, discover the passion and dedication 
                that goes into every MWASUE Limited creation
              </p>
            </Motion.div>

            {/* Loading State */}
            {galleryImages.length === 0 && (
              <div className="text-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading our delicious gallery...</p>
              </div>
            )}

            {/* Masonry Grid */}
            {galleryImages.length > 0 && (
              <Motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
              >
                {galleryImages.map((image, index) => (
                  <Motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openModal(image, index)}
                    className="break-inside-avoid cursor-pointer group"
                  >
                    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            console.error('Image failed to load:', image.src);
                            e.target.style.display = 'none';
                          }}
                          onLoad={() => {
                            console.log('Image loaded successfully:', image.title);
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 mb-1">{image.title}</h3>
                        <p className="text-sm text-gray-600">{image.description}</p>
                      </div>
                    </div>
                  </Motion.div>
                ))}
              </Motion.div>
            )}

            {/* Coming Soon Section */}
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-20 bg-white rounded-2xl shadow-lg p-12"
            >
              <Camera className="h-16 w-16 text-orange-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                More Photos Coming Soon!
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're constantly creating new culinary masterpieces and capturing memorable moments. 
                Follow our journey as we add more photos from our latest events and behind-the-scenes moments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Motion.a
                  href="tel:+260965994659"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors duration-300 inline-block"
                >
                  Book Your Event
                </Motion.a>
                <Motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-orange-500 text-orange-500 font-semibold px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 inline-block"
                >
                  Get Quote
                </Motion.a>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <Motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeModal}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            >
              <Motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors"
                >
                  →
                </button>

                {/* Image */}
                <div className="relative">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>

                {/* Image Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {selectedImage.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {imageIndex + 1} of {galleryImages.length}
                    </span>
                    <div className="text-sm text-orange-500 font-medium">
                      MWASUE Limited
                    </div>
                  </div>
                </div>
              </Motion.div>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Gallery