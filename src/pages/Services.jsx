import Navigation from '../components/Navigation'
import Services from '../components/Services'

const ServicesPage = () => {
  return (
    <div>
      <Navigation />
      <div className="pt-16"> {/* Add padding-top to account for fixed navigation */}
        <Services />
      </div>
    </div>
  )
}

export default ServicesPage