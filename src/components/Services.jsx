import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { 
  ChefHat, 
  Users, 
  Calendar, 
  Utensils, 
  Crown, 
  Coffee,
  X,
  Clock,
  MapPin,
  Phone
} from 'lucide-react'

const Services = () => {
  // State to track which service modal is open
  const [selectedService, setSelectedService] = useState(null)

  // Our catering services data
const services = [
  {
    icon: Crown,
    title: "Wedding Catering",
    description: "Make your special day unforgettable with our elegant wedding catering services",
    features: ["Custom menu design", "Professional service staff", "Beautiful presentation", "Dietary accommodations"],
    price: "Quote on request", // CHANGED: Was "From K2,500 per person"
    duration: "Full day service",
    includes: ["Appetizers", "Main course", "Desserts", "Professional staff", "Setup & cleanup"],
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: Users,
    title: "Corporate Events",
    description: "Professional catering for business meetings, conferences, and corporate functions",
    features: ["Business lunch packages", "Conference catering", "Office parties", "Product launches"],
    price: "Quote on request", // CHANGED: Was "From K1,800 per person"
    duration: "4-8 hours",
    includes: ["Continental breakfast", "Lunch service", "Coffee breaks", "Professional presentation"],
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Calendar,
    title: "Private Parties",
    description: "Celebrate life's moments with our personalized private party catering",
    features: ["Birthday celebrations", "Anniversary parties", "Family gatherings", "Holiday events"],
    price: "Quote on request", // CHANGED: Was "From K1,200 per person"
    duration: "3-6 hours",
    includes: ["Appetizer selection", "Main dishes", "Beverages", "Party setup", "Cleanup service"],
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Utensils,
    title: "Fine Dining Experience",
    description: "Luxury dining experiences with premium ingredients and exceptional service",
    features: ["Multi-course meals", "Personal chef service", "Gourmet ingredients", "Premium presentation"], // CHANGED: Removed "Wine pairing"
    price: "Quote on request", // CHANGED: Was "From K3,500 per person"
    duration: "3-4 hours",
    includes: ["5-course menu", "Personal chef", "Premium ingredients", "Elegant presentation", "Table service"], // CHANGED: Removed "Wine selection"
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Coffee,
    title: "Casual Catering",
    description: "Relaxed catering perfect for informal gatherings and everyday events",
    features: ["Buffet style service", "Comfort food options", "Quick service", "Budget-friendly"],
    price: "Quote on request", // CHANGED: Was "From K800 per person"
    duration: "2-4 hours",
    includes: ["Buffet setup", "Comfort foods", "Basic service", "Cleanup"],
    color: "bg-green-100 text-green-600"
  },
  {
    icon: ChefHat,
    title: "Custom Menus",
    description: "Tailored culinary experiences designed specifically for your event",
    features: ["Personalized menu creation", "Cultural cuisines", "Special dietary needs", "Unique presentations"],
    price: "Quote on request", // This stays the same
    duration: "Varies",
    includes: ["Menu consultation", "Custom recipes", "Specialized ingredients", "Unique presentation"],
    color: "bg-orange-100 text-orange-600"
  }
]

  // Animation variants for staggered card appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 // Delay between each card animation
      }
    }
  }

  // Individual card animation
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

  // Modal animation variants
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

  // Background overlay animation
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <section className="py-20 bg-white">
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we cater to every occasion with excellence
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-8"></div>
        </Motion.div>

        {/* Services Grid */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedService(service)}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
              >
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-lg ${service.color} flex items-center justify-center mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                {/* Service Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Feature Preview */}
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 2 && (
                    <div className="text-sm text-orange-500 font-medium">
                      +{service.features.length - 2} more features
                    </div>
                  )}
                </div>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    {service.price}
                  </p>
                  <p className="text-orange-500 text-sm font-medium">
                    Click for full details →
                  </p>
                </div>
              </Motion.div>
            )
          })}
        </Motion.div>

        {/* Bottom CTA Section */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gray-50 rounded-2xl p-12"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Need Something Custom?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We specialize in creating custom catering experiences tailored to your specific needs and preferences.
          </p>
          <Motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-lg inline-block"
            >
              Request Custom Quote
            </Link>
          </Motion.div>
        </Motion.div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <Motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <Motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
              className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>

              {/* Modal Content */}
              <div className="pr-8">
                {/* Service Header */}
                <div className="flex items-start gap-6 mb-8">
                  <div className={`w-20 h-20 rounded-xl ${selectedService.color} flex items-center justify-center flex-shrink-0`}>
                    <selectedService.icon className="h-10 w-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {selectedService.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {selectedService.description}
                    </p>
                  </div>
                </div>

                {/* Service Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">
                      Service Features
                    </h4>
                    <div className="space-y-3">
                      {selectedService.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What's Included */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">
                      What's Included
                    </h4>
                    <div className="space-y-3">
                      {selectedService.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Info Cards */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <Clock className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-800">Duration</p>
                    <p className="text-sm text-gray-600">{selectedService.duration}</p>
                  </div>
                  
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                <MapPin className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-800">Service Area</p>
                <p className="text-sm text-gray-600">Copperbelt & surrounding areas</p> {/* CHANGED: Was "Lusaka & surrounding areas" */}
                </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <Phone className="h-6 w-6 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-800">Booking</p>
                    <p className="text-sm text-gray-600">48hrs advance notice</p>
                  </div>
                </div>

                {/* Pricing & CTA */}
                <div className="bg-orange-50 rounded-xl p-6 text-center">
                  <p className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedService.price}
                  </p>
                  <p className="text-gray-600 mb-4">
                    Final pricing depends on guest count, menu selection, and additional services
                  </p>
                  <Motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/contact"
                      className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition-colors duration-300 inline-block"
                    >
                      Get Detailed Quote
                    </Link>
                  </Motion.div>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Services