import { motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ChefHat, 
  Phone, 
  MessageCircle, 
  Mail, 
  CheckCircle,
  DollarSign,
  Clock,
  Star
} from 'lucide-react'

const Footer = () => {
  // WhatsApp message template
  const getWhatsAppMessage = () => {
    return `Hello MWASUE Investment Limited! I'm interested in your catering services. Please send me more information.`
  }

  const whatsappUrl = `https://wa.me/260970445730?text=${encodeURIComponent(getWhatsAppMessage())}`

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Get Quote', path: '/contact' }
  ]

  const services = [
    'Wedding Catering',
    'Corporate Events',
    'Private Parties',
    'Chaffing Dish Rental',
    'Custom Menus'
  ]

  const serviceHighlights = [
    '70+ Events Successfully Catered',
    'Local Supplier Partnership',
    'Same-Day Response Guaranteed',
    'Equipment Rental Available'
  ]

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
        duration: 0.5
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Information */}
            <Motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <ChefHat className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold">MWASUE Investment Limited</span>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                Exceptional catering services in Zambia
              </p>
              
              <p className="text-orange-400 font-medium mb-6">
                Est. January 2025
              </p>

              {/* Contact Information */}
              <div className="space-y-3">
                <Motion.a
                  href="tel:+260965994659"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>0965994659</span>
                </Motion.a>
                
                <Motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>0970445730</span>
                </Motion.a>
                
                <Motion.a
                  href="mailto:mwasueinvestmentltd@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">mwasueinvestmentltd@gmail.com</span>
                </Motion.a>
              </div>
            </Motion.div>

            {/* Quick Links */}
            <Motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-orange-400">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Motion.div>

            {/* Services */}
            <Motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-orange-400">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="text-gray-300">
                    {service}
                  </li>
                ))}
              </ul>
            </Motion.div>

            {/* Business Information & Highlights */}
            <Motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-xl font-bold mb-6 text-orange-400">Why Choose Us</h3>
              
              {/* Service Highlights */}
              <ul className="space-y-3 mb-6">
                {serviceHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Business Information */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-orange-400" />
                  <span className="text-gray-300">Mobile Money Accepted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-orange-400" />
                  <span className="text-gray-300">24-hour Response Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-orange-400" />
                  <span className="text-gray-300">Free Consultations Available</span>
                </div>
              </div>
            </Motion.div>
          </div>
        </Motion.div>

        {/* Call-to-Action Section */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your event today or get in touch for emergency catering needs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors duration-300 inline-block"
                >
                  Book Your Event Today
                </Link>
              </Motion.div>
              
              <Motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-500 text-green-400 font-semibold px-8 py-4 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300 inline-flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us Now
              </Motion.a>
            </div>
            
            <p className="text-orange-400 text-sm mt-6 font-medium">
              Emergency Catering Available
            </p>
          </div>
        </Motion.div>

        {/* Bottom Bar */}
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 MWASUE Investment Limited. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="text-gray-400 text-sm">
                Made with ❤️ in Zambia
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </footer>
  )
}

export default Footer