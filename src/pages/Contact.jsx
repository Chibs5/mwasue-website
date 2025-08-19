import { useState, useRef } from 'react'
import { motion as Motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Calendar,
  Users,
  ChefHat,
  CheckCircle,
  AlertCircle,
  Utensils,
  DollarSign,
  Star,
  Send
} from 'lucide-react'
import Navigation from '../components/Navigation'

const Contact = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    eventType: '',
    eventDate: '',
    guestCount: '',
    location: '',
    cuisineStyle: '',
    chaffingDishRental: false,
    serviceStaff: false,
    setupCleanup: false,
    dietaryRequirements: '',
    budgetRange: '',
    name: '',
    phone: '',
    email: '',
    additionalNotes: ''
  })

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null })
    
    try {
      // EmailJS configuration
      const serviceId = 'service_qes8pi8' // Replace with your EmailJS service ID
      const templateId = 'template_yi3bgwz' // Replace with your EmailJS template ID  
      const publicKey = 'gioWt-ynbLS3ZdPKb' // Replace with your EmailJS public key

      // Prepare template parameters for EmailJS
      const templateParams = {
        to_name: 'MWASUE Limited',
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        event_type: formData.eventType,
        event_date: formData.eventDate,
        guest_count: formData.guestCount,
        location: formData.location,
        cuisine_style: formData.cuisineStyle || 'Not specified',
        chaffing_dish: formData.chaffingDishRental ? 'Yes' : 'No',
        service_staff: formData.serviceStaff ? 'Yes' : 'No',
        setup_cleanup: formData.setupCleanup ? 'Yes' : 'No',
        dietary_requirements: formData.dietaryRequirements || 'None specified',
        budget_range: formData.budgetRange || 'Not specified',
        additional_notes: formData.additionalNotes || 'None',
        message: `
Event Details:
- Type: ${formData.eventType}
- Date: ${formData.eventDate}
- Guests: ${formData.guestCount}
- Location: ${formData.location}
- Cuisine: ${formData.cuisineStyle || 'Not specified'}

Additional Services:
- Chaffing Dish Rental: ${formData.chaffingDishRental ? 'Yes' : 'No'}
- Service Staff: ${formData.serviceStaff ? 'Yes' : 'No'}
- Setup & Cleanup: ${formData.setupCleanup ? 'Yes' : 'No'}

Dietary Requirements: ${formData.dietaryRequirements || 'None specified'}
Budget Range: ${formData.budgetRange || 'Not specified'}
Additional Notes: ${formData.additionalNotes || 'None'}

Contact Information:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}
        `
      }

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      if (result.status === 200) {
        setFormStatus({ isSubmitting: false, isSubmitted: true, error: null })
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            eventType: '',
            eventDate: '',
            guestCount: '',
            location: '',
            cuisineStyle: '',
            chaffingDishRental: false,
            serviceStaff: false,
            setupCleanup: false,
            dietaryRequirements: '',
            budgetRange: '',
            name: '',
            phone: '',
            email: '',
            additionalNotes: ''
          })
          setFormStatus({ isSubmitting: false, isSubmitted: false, error: null })
        }, 5000) // Reset after 5 seconds
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: 'Failed to send message. Please try calling or WhatsApp instead.' 
      })
    }
  }

  // WhatsApp message template
  const getWhatsAppMessage = () => {
    return `Hello MWASUE Limited! I'm interested in your catering services for my upcoming event. Please send me more information.`
  }

  const whatsappUrl = `https://wa.me/260970445730?text=${encodeURIComponent(getWhatsAppMessage())}`

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      value: "0965994659",
      action: "tel:+260965994659",
      buttonText: "Call Now",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      description: "Quick response via WhatsApp",
      value: "0970445730",
      action: whatsappUrl,
      buttonText: "Message Us",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Detailed inquiries welcome",
      value: "mwasueinvestmentltd@gmail.com",
      action: "mailto:mwasueinvestmentltd@gmail.com",
      buttonText: "Send Email",
      color: "bg-blue-100 text-blue-600"
    }
  ]

  const eventTypes = [
    "Wedding",
    "Corporate Event",
    "Private Party",
    "Birthday Celebration",
    "Anniversary",
    "Holiday Event",
    "Conference",
    "Product Launch",
    "Custom Event"
  ]

  const cuisineStyles = [
    "Traditional Zambian",
    "International",
    "Mixed (Traditional + International)",
    "Continental",
    "Custom Menu"
  ]

  const budgetRanges = [
    "Under K2,000",
    "K2,000 - K5,000",
    "K5,000 - K10,000",
    "K10,000 - K20,000",
    "Above K20,000",
    "Prefer to discuss"
  ]

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2 weeks in advance, but we also handle last-minute requests when possible."
    },
    {
      question: "Do you charge for travel outside Kitwe and Kalulushi?",
      answer: "Our standard rates cover Kitwe and Kalulushi. For other locations, travel fees apply based on distance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Mobile Money payments for your convenience."
    },
    {
      question: "Do you provide chaffing dishes?",
      answer: "Yes! We offer chaffing dish rental as part of our equipment services."
    }
  ]

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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Ready to create an unforgettable culinary experience? 
              Contact us for your free consultation today!
            </p>
            
            {/* Quick Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <Motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white"
                  >
                    <IconComponent className="h-8 w-8 mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">{method.title}</h3>
                    <p className="text-white/80 text-sm">{method.value}</p>
                  </Motion.div>
                )
              })}
            </div>
          </div>
        </Motion.section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          
          {/* Contact Methods Grid */}
          <Motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Choose Your Preferred Contact Method
              </h2>
              <p className="text-lg text-gray-600">
                We respond to all inquiries within 24 hours
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <Motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`w-16 h-16 rounded-full ${method.color} flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <p className="font-semibold text-gray-800 mb-6">{method.value}</p>
                    <Motion.a
                      href={method.action}
                      target={method.action.includes('wa.me') ? '_blank' : '_self'}
                      rel={method.action.includes('wa.me') ? 'noopener noreferrer' : ''}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors duration-300"
                    >
                      {method.buttonText}
                    </Motion.a>
                  </Motion.div>
                )
              })}
            </div>
          </Motion.section>

          {/* Quick Quote Form */}
          <Motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Get Your Free Quote
                </h2>
                <p className="text-lg text-gray-600">
                  Tell us about your event and we'll provide a customized quote
                </p>
              </div>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                {/* Event Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <input
                      type="number"
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      placeholder="e.g., 50"
                      required
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Kitwe, Kalulushi, or other"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Cuisine Style
                  </label>
                  <select
                    name="cuisineStyle"
                    value={formData.cuisineStyle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select cuisine style</option>
                    {cuisineStyles.map((style) => (
                      <option key={style} value={style}>{style}</option>
                    ))}
                  </select>
                </div>

                {/* Additional Services */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Additional Services Needed
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="chaffingDishRental"
                        checked={formData.chaffingDishRental}
                        onChange={handleInputChange}
                        className="h-5 w-5 text-orange-500 rounded focus:ring-orange-500"
                      />
                      <span className="text-gray-700">Chaffing Dish Rental</span>
                    </label>
                    
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="serviceStaff"
                        checked={formData.serviceStaff}
                        onChange={handleInputChange}
                        className="h-5 w-5 text-orange-500 rounded focus:ring-orange-500"
                      />
                      <span className="text-gray-700">Service Staff</span>
                    </label>
                    
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="setupCleanup"
                        checked={formData.setupCleanup}
                        onChange={handleInputChange}
                        className="h-5 w-5 text-orange-500 rounded focus:ring-orange-500"
                      />
                      <span className="text-gray-700">Setup & Cleanup</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Dietary Requirements
                  </label>
                  <textarea
                    name="dietaryRequirements"
                    value={formData.dietaryRequirements}
                    onChange={handleInputChange}
                    placeholder="Any allergies, vegetarian, vegan, or special dietary needs?"
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Budget Range (Optional)
                  </label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Contact Information</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    placeholder="Any additional details about your event?"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  {formStatus.isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-green-800 mb-2">Quote Request Sent!</h3>
                      <p className="text-green-700">We'll respond within 24 hours with your customized quote.</p>
                    </div>
                  ) : (
                    <>
                      {formStatus.error && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                          <AlertCircle className="h-5 w-5 text-red-500 inline mr-2" />
                          <span className="text-red-700">{formStatus.error}</span>
                        </div>
                      )}
                      
                      <Motion.button
                        type="submit"
                        disabled={formStatus.isSubmitting}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-orange-500 text-white font-semibold px-12 py-4 rounded-full hover:bg-orange-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto"
                      >
                        {formStatus.isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Sending Request...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-3" />
                            Get My Free Quote
                          </>
                        )}
                      </Motion.button>
                    </>
                  )}
                </div>
              </form>
            </div>
          </Motion.section>

          {/* Service Areas */}
          <Motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Service Areas</h2>
                <p className="text-lg text-gray-600">We bring exceptional catering across the Copperbelt</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-green-50 rounded-xl p-6 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Primary Areas</h3>
                    <p className="text-gray-600 mb-4">Standard rates apply</p>
                    <div className="space-y-2">
                      <p className="font-medium text-gray-800">• Kitwe</p>
                      <p className="font-medium text-gray-800">• Kalulushi</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-orange-50 rounded-xl p-6 mb-4">
                    <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Extended Areas</h3>
                    <p className="text-gray-600 mb-4">Travel fees apply based on distance</p>
                    <div className="space-y-2">
                      <p className="font-medium text-gray-800">• Ndola</p>
                      <p className="font-medium text-gray-800">• Mufulira</p>
                      <p className="font-medium text-gray-800">• Other Copperbelt locations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Motion.section>

          {/* FAQ Section */}
          <Motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.section>

          {/* Bottom CTA */}
          <Motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-12"
          >
            <ChefHat className="h-16 w-16 text-orange-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether it's a last-minute request or a carefully planned celebration, 
              we're here to make your event unforgettable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Motion.a
                href="tel:+260965994659"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-3" />
                Call Now
              </Motion.a>
              
              <Motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-500 text-green-500 font-semibold px-8 py-4 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300 inline-flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5 mr-3" />
                WhatsApp Us
              </Motion.a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <Clock className="h-4 w-4 mr-2" />
                  24-hour response time
                </div>
                <div className="flex items-center justify-center">
                  <Star className="h-4 w-4 mr-2" />
                  Free consultation
                </div>
                <div className="flex items-center justify-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Mobile Money accepted
                </div>
              </div>
            </div>
          </Motion.section>
        </div>
      </div>
    </div>
  )
}

export default Contact