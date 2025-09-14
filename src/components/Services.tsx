const Services = () => {
  const services = [
    {
      icon: "🦷",
      title: "General Dentistry",
      description: "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
      features: ["Regular checkups", "Teeth cleaning", "Cavity treatment"]
    },
    {
      icon: "😁",
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with our cosmetic dental procedures and treatments.",
      features: ["Teeth whitening", "Veneers", "Smile makeovers"]
    },
    {
      icon: "🦴",
      title: "Orthodontics",
      description: "Professional teeth straightening and bite correction services.",
      features: ["Braces", "Invisalign", "Teeth alignment"]
    }
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="premium-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive dental care services available 24/7 with modern equipment and experienced professionals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="premium-card p-8 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="premium-text mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Video Showcase Section */}
        <div className="premium-card p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Our Work Showcase</h3>
            <p className="text-gray-300">See the quality of our dental work through our video presentations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="space-y-4">
              <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/pics/dental check brace.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h4 className="text-xl font-bold text-white text-center">Dental Check & Brace Treatment</h4>
              <p className="text-gray-300 text-center">Comprehensive dental examination and orthodontic treatment showcase</p>
            </div>

            {/* Video 2 */}
            <div className="space-y-4">
              <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/pics/purple dental girl.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h4 className="text-xl font-bold text-white text-center">Purple Dental Care</h4>
              <p className="text-gray-300 text-center">Specialized dental care with our signature purple theme</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services 