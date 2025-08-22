import { useState, useEffect } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { X, Camera } from 'lucide-react'
import Navigation from '../components/Navigation'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageIndex, setImageIndex] = useState(0)
  const [galleryImages, setGalleryImages] = useState([])
  const [loadedImages, setLoadedImages] = useState({}) // track loaded state

  useEffect(() => {
    const loadImages = async () => {
      try {
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
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
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
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Camera className="h-16 w-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              A visual journey through our culinary creations, passionate team, and memorable events
            </p>
          </div>
        </Motion.section>

        {/* Gallery Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <Motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {galleryImages.map((image, index) => (
                <Motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openModal(image, index)}
                  className="cursor-pointer group"
                >
                  <div className="relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                    
                    {/* Blur-up effect */}
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        onLoad={() => setLoadedImages(prev => ({ ...prev, [image.src]: true }))}
                        className={`w-full h-auto rounded-lg transition duration-700 ease-in-out ${
                          loadedImages[image.src]
                            ? "opacity-100 scale-100"
                            : "opacity-40 blur-xl scale-105"
                        }`}
                      />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </div>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </section>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
            >
              <Motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Prev / Next */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                >
                  ←
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                >
                  →
                </button>

                {/* Image */}
                <div className="relative">
                  <Motion.img
                    key={selectedImage.src}
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{imageIndex + 1} of {galleryImages.length}</span>
                    <span className="text-orange-500 font-medium">MWASUE Limited</span>
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
