import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Star, Heart, Shield, Lightbulb, Users, Leaf, X } from 'lucide-react'

const CoreValues = () => {
  const [selectedValue, setSelectedValue] = useState(null)

  const values = [
    {
      icon: Star,
      title: "Quality First",
      description: "Never compromise on ingredients or preparation",
      detailedDescription: "At MWASUE Limited, quality is non-negotiable. We source only the finest, freshest ingredients from trusted suppliers. Every dish is prepared with meticulous attention to detail, ensuring that each bite meets our exacting standards. From farm to table, we maintain strict quality control processes that guarantee excellence in every aspect of our catering services.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Heart,
      title: "Passion & Heart",
      description: "Love for cooking in every event",
      detailedDescription: "Cooking is more than just a profession for us - it's our passion. Every team member brings genuine love and enthusiasm to their craft. This passion translates into memorable culinary experiences that touch the hearts of our clients and their guests. We believe that food prepared with love tastes better and creates lasting memories.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "Honest communication and reliable service",
      detailedDescription: "Trust is the foundation of every successful partnership. We build lasting relationships through transparent communication, reliable service delivery, and honest business practices. When you choose MWASUE Limited, you can count on us to deliver exactly what we promise, when we promise it, with complete integrity.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      description: "New flavors while honoring tradition",
      detailedDescription: "We embrace innovation while respecting culinary traditions. Our chefs constantly explore new techniques, flavor combinations, and presentation styles to keep our offerings fresh and exciting. However, we never forget the time-honored recipes and methods that form the backbone of great cuisine, creating a perfect balance between innovation and tradition.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Users,
      title: "Respect & Inclusivity",
      description: "Celebrating diversity and welcoming all",
      detailedDescription: "We celebrate the rich diversity of our community and ensure that everyone feels welcomed and valued. Our menus reflect various cultural backgrounds and dietary needs, from traditional Zambian cuisine to international flavors. We create inclusive environments where every guest can enjoy our services regardless of their background or dietary requirements.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Leaf,
      title: "Sustainability & Community",
      description: "Supporting local suppliers",
      detailedDescription: "We are committed to sustainable practices and supporting our local community. By partnering with local farmers and suppliers, we reduce our environmental footprint while contributing to the local economy. Our sustainability initiatives include minimizing food waste, using eco-friendly packaging, and sourcing ingredients responsibly.",
      color: "bg-emerald-100 text-emerald-600"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at MWASUE Limited
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-8"></div>
        </Motion.div>

        {/* Values Grid */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedValue(value)}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-lg ${value.color} flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                <p className="text-orange-500 text-sm mt-4 font-medium">
                  Click to learn more →
                </p>
              </Motion.div>
            )
          })}
        </Motion.div>

        {/* Bottom CTA */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Experience the difference our values make in every dish we serve
          </p>
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-lg"
          >
            Learn More About Us
          </Motion.button>
        </Motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedValue && (
          <Motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedValue(null)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <Motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedValue(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>

              {/* Modal Content */}
              <div className="pr-8">
                <div className={`w-20 h-20 rounded-xl ${selectedValue.color} flex items-center justify-center mb-6`}>
                  <selectedValue.icon className="h-10 w-10" />
                </div>

                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {selectedValue.title}
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {selectedValue.detailedDescription}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    This value is at the heart of everything we do at MWASUE Limited
                  </p>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default CoreValues