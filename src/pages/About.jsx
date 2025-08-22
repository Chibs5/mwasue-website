import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Users, 
  Award, 
  Calendar, 
  MapPin, 
  Heart,
  ChefHat,
  Star,
  Clock,
  X,
  Phone,
  Mail
} from 'lucide-react'
import Navigation from '../components/Navigation'

// Import images
import susan1Img from '../assets/Susan1.jpg'
import chibweImg from '../assets/chibwe.JPG'
const About = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState(null)

  // Company stats/achievements
  const stats = [
    {
      icon: Calendar,
      number: "Jan 2025",
      label: "Established",
      description: "Your newest catering partner"
    },
    {
      icon: Users,
      number: "70+",
      label: "Events Catered",
      description: "Creating memorable experiences"
    },
    {
      icon: Award,
      number: "100%",
      label: "Client Satisfaction",
      description: "Our commitment to quality"
    },
    {
      icon: Heart,
      number: "Fresh",
      label: "Innovative Approach",
      description: "Modern catering solutions"
    }
  ]

  // Team members
  const teamMembers = [
    {
      name: "Susan Mwape",
      role: "Founder & Head Chef",
      image: susan1Img, // Using the actual Susan image
      bio: "With a passion for culinary excellence, Susan founded MWASUE Investment Limited in January 2025 with a vision to bring exceptional catering services to the Copperbelt. Her dedication to quality and innovation has quickly established MWASUE as a trusted name in the region.",
      specialties: ["Traditional Zambian Cuisine", "International Fusion", "Wedding Catering", "Menu Development"],
      experience: "10+ years",
      education: "Culinary Arts Diploma, Hospitality Management",
      contact: {
        phone: "+260965994659",
        email: "susan@mwasueinvestmentltd.com"
      }
    },
    {
      name: "Elizabeth Mwape",
      role: "Executive Chef",
      image: "/api/placeholder/300/400",
      bio: "Elizabeth brings creativity and precision to every dish. Her expertise in both local and international cuisines ensures that every meal we serve meets the highest standards of taste and presentation.",
      specialties: ["Gourmet Cooking", "Presentation", "Corporate Catering", "Menu Innovation"],
      experience: "8+ years",
      education: "Advanced Culinary Techniques, Food Safety Certification",
      contact: {
        phone: "+260970445730",
        email: "elizabeth@mwasueinvestmentltd.com"
      }
    },
    {
      name: "Chibwe Musendeka",
      role: "Catering Manager",
      image: chibweImg, // Using the actual Chibwe image
      bio: "Chibwe ensures that every event runs smoothly from planning to execution. His attention to detail and excellent organizational skills make him an invaluable part of our team.",
      specialties: ["Event Planning", "Client Relations", "Team Coordination", "Quality Control"],
      experience: "1+ years",
      education: "Software Engineering",
      contact: {
        phone: "+260967528035",
        email: "chibwemusendeka@gmail.com"
      }
    }
  ]

  // Company milestones
  const milestones = [
    {
      year: "Jan 2025",
      title: "Company Founded",
      description: "MWASUE Investment Limited was established on January 27th, 2025, by founder Susan Mwape with a mission to provide exceptional catering services in the Copperbelt and other regions."
    },
    {
      year: "Feb 2025",
      title: "First Events Success",
      description: "Successfully catered our first events, establishing our reputation for quality food and reliable service in the local community."
    },
    {
      year: "Mar 2025",
      title: "Team Assembly",
      description: "Assembled our core team of experienced professionals to ensure consistent quality and excellent service delivery."
    },
    {
      year: "Present",
      title: "Growing Strong",
      description: "With 70+ events successfully catered, we continue to build our reputation as the Copperbelt's newest and most promising catering service."
    },
    {
      year: "Future",
      title: "Expansion Plans",
      description: "Planning to expand our services and reach more clients across the Copperbelt while maintaining our commitment to excellence."
    },
    {
      year: "Vision",
      title: "Our Goal",
      description: "To become the most trusted and preferred catering partner in the Copperbelt region, known for quality, innovation, and exceptional service."
    }
  ]

  // Animation variants
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
    <div>
      <Navigation />
      <section className="py-20 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            About MWASUE Investment Limited
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Founded with a passion for culinary excellence, MWASUE Investment Limited has been serving the Copperbelt 
            region with exceptional catering services that create memorable experiences for every occasion.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-8"></div>
        </Motion.div>

        {/* Company Story */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                MWASUE Investment Limited was born from a simple belief: that great food brings people together 
                and creates lasting memories. What started as a small catering service has grown into 
                one of the Copperbelt's most trusted names in event catering.
              </p>
              <p>
                Our journey began with founder Susan Mwape's vision to combine traditional Zambian 
                flavors with international culinary techniques. Today, we continue to honor that 
                vision while constantly innovating to exceed our clients' expectations.
              </p>
              <p>
                Every dish we prepare, every event we cater, and every client we serve is a testament 
                to our commitment to quality, creativity, and genuine hospitality.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <ChefHat className="h-20 w-20 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Est. 2025</h3>
                <p className="text-gray-600">Your newest catering partner</p>
              </div>
            </div>
          </div>
        </Motion.div>

        {/* Stats Section */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</p>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </Motion.div>
            )
          })}
        </Motion.div>

        {/* Team Section */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals who make every event exceptional
            </p>
          </div>

          <Motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <Motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTeamMember(member)}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Updated image rendering */}
                <div className="h-64 overflow-hidden">
                  {member.image && member.image !== "/api/placeholder/300/400" ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                      <Users className="h-24 w-24 text-orange-500" />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio.substring(0, 120)}...
                  </p>
                  <p className="text-orange-500 text-sm font-medium">
                    Click to learn more →
                  </p>
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </Motion.div>

        {/* Company Timeline */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming the Copperbelt's trusted catering partner
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-orange-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
                  }`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                      <span className="text-orange-500 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </Motion.div>

        {/* Contact CTA */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create an unforgettable culinary experience for your next event. 
            Contact us today to discuss your catering needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-orange-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-600 transition-colors duration-300 shadow-lg inline-block"
              >
                Get In Touch
              </Link>
            </Motion.div>
            <Motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/services"
                className="border-2 border-orange-500 text-orange-500 font-semibold px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 inline-block"
              >
                View Our Services
              </Link>
            </Motion.div>
          </div>
        </Motion.div>
      </div>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedTeamMember && (
          <Motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedTeamMember(null)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <Motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTeamMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>

              {/* Modal Content */}
              <div className="pr-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="w-full md:w-1/3">
                    {/* Updated modal image rendering */}
                    <div className="h-80 rounded-xl overflow-hidden">
                      {selectedTeamMember.image && selectedTeamMember.image !== "/api/placeholder/300/400" ? (
                        <img
                          src={selectedTeamMember.image}
                          alt={selectedTeamMember.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="h-full bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                          <Users className="h-32 w-32 text-orange-500" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">
                      {selectedTeamMember.name}
                    </h3>
                    <p className="text-xl text-orange-500 font-medium mb-4">
                      {selectedTeamMember.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {selectedTeamMember.bio}
                    </p>
                    
                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Experience</p>
                        <p className="text-gray-600">{selectedTeamMember.experience}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Education</p>
                        <p className="text-gray-600">{selectedTeamMember.education}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Specialties</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {selectedTeamMember.specialties.map((specialty, idx) => (
                      <div key={idx} className="bg-orange-50 rounded-lg p-3 text-center">
                        <p className="text-sm font-medium text-orange-700">{specialty}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-600">{selectedTeamMember.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-600">{selectedTeamMember.contact.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
    </div>
  )
}

export default About