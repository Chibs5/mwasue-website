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
    // Using the working new URL approach instead of dynamic imports
    const images = [
      {
        src: new URL("../assets/Fried Fish & Nshima.jpg", import.meta.url).href,
        alt: "Fried Fish & Nshima",
        title: "Traditional Fried Fish & Nshima",
        description: "Authentic Zambian cuisine prepared with love and tradition"
      },
      {
        src: new URL("../assets/Susan1.jpg", import.meta.url).href,
        alt: "Susan - Head Chef",
        title: "Susan - Our Head Chef",
        description: "Passionate about creating exceptional culinary experiences"
      },
      {
        src: new URL("../assets/Samosas.jpg", import.meta.url).href,
        alt: "Golden Samosas",
        title: "Crispy Golden Samosas",
        description: "Perfectly seasoned and fried to golden perfection"
      },
      {
        src: new URL("../assets/Ingredients.jpg", import.meta.url).href,
        alt: "Fresh Ingredients",
        title: "Farm Fresh Ingredients",
        description: "Quality starts with the finest, freshest ingredients"
      },
      {
        src: new URL("../assets/Pies.jpg", import.meta.url).href,
        alt: "Homemade Pies",
        title: "Homemade Meat Pies",
        description: "Flaky pastry filled with seasoned meat and vegetables"
      },
      {
        src: new URL("../assets/Susan3.jpg", import.meta.url).href,
        alt: "Susan Cooking",
        title: "Chef Susan in Action",
        description: "Our founder bringing passion to every dish"
      },
      {
        src: new URL("../assets/Fried Fish.jpg", import.meta.url).href,
        alt: "Perfectly Fried Fish",
        title: "Expertly Prepared Fish",
        description: "Fresh fish prepared with traditional Zambian spices"
      },
      {
        src: new URL("../assets/scones.jpg", import.meta.url).href,
        alt: "Fresh Scones",
        title: "Freshly Baked Scones",
        description: "Light, fluffy scones perfect for any occasion"
      },
      {
        src: new URL("../assets/Ingredients2.jpg", import.meta.url).href,
        alt: "Colorful Vegetables",
        title: "Vibrant Fresh Vegetables",
        description: "Locally sourced vegetables for maximum flavor and nutrition"
      },
      {
        src: new URL("../assets/Pies2.jpg", import.meta.url).href,
        alt: "Assorted Pies",
        title: "Variety of Baked Goods",
        description: "An assortment of our popular baked items"
      },
      {
        src: new URL("../assets/fish.jpg", import.meta.url).href,
        alt: "Fresh Fish Selection",
        title: "Premium Fish Selection",
        description: "Fresh fish ready for preparation in our signature style"
      }
    ]
    
    // Set images immediately - no async loading needed
    setGalleryImages(images)
    console.log('All images loaded immediately:', images)
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
            
            {/* Section Title */}
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

            {/* Loading State - only show if no images yet */}
            {galleryImages.length === 0 && (
              <div className="text-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading our delicious gallery...</p>
              </div>
            )}

            {/* Gallery Grid */}
            {galleryImages.length > 0 && (
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
                      
                      {/* Image with improved loading */}
                      <div className="relative overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          onLoad={() => setLoadedImages(prev => ({ ...prev, [image.src]: true }))}
                          onError={(e) => {
                            console.error('Image failed to load:', image.src);
                            // Show a placeholder instead of hiding
                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='.3em' fill='%236b7280' font-size='18'%3EImage Loading...%3C/text%3E%3C/svg%3E";
                          }}
                          className={`w-full h-64 object-cover group-hover:scale-105 transition-all duration-300 ${
                            loadedImages[image.src]
                              ? "opacity-100 scale-100"
                              : "opacity-70 blur-sm scale-105"
                          }`}
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                          <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>

                      {/* Image Info */}
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

                {/* Navigation Arrows */}
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

                {/* Image Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{imageIndex + 1} of {galleryImages.length}</span>
                    <span className="text-orange-500 font-medium">MWASUE Investment Limited</span>
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