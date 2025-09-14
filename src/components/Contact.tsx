const Contact = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/cinou.dental",
      icon: "📘",
      followers: "24K+",
      description: "Follow us for latest updates and dental care tips"
    },
    {
      name: "Book Appointment",
      url: "tel:+213698173427",
      icon: "📞",
      followers: "Call Now",
      description: "Schedule your dental appointment 24/7"
    }
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="premium-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to take care of your smile? Contact Cinou Dental Clinic and book your appointment today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-gray-300 text-sm">
                      Cinou Dental, Ben 'Aknoûn, Algeria, 16009
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">📞</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300 text-sm">
                      0698 17 34 27
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">📧</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-300 text-sm">
                      cinou.dental@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 premium-gradient rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                    <span className="text-slate-900 text-lg">⏰</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Hours</h4>
                    <p className="text-gray-300 text-sm">
                      Always Open (24/7)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-gradient p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Cinou Dental?</h3>
              <ul className="space-y-3 text-slate-900">
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  24/7 availability for emergencies
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Modern dental equipment
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Experienced professionals
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Personalized care approach
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block premium-card p-6 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">{social.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{social.name}</h3>
                      <p className="text-gray-300 text-sm">{social.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="premium-text font-bold text-lg">{social.followers}</div>
                    <div className="text-gray-400 text-sm">followers</div>
                  </div>
                </div>
              </a>
            ))}

            <div className="premium-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Book Your Appointment</h3>
              <p className="text-gray-300 mb-4">
                Ready to take care of your dental health? Call us now or visit our clinic for immediate care.
              </p>
              <a 
                href="tel:+213698173427" 
                className="btn-primary w-full text-center"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 premium-card p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Smile?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit Cinou Dental Clinic today and experience professional dental care with modern equipment. 
            Your smile is our priority - book your appointment now for exceptional dental services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+213698173427" 
              className="btn-primary text-lg px-8 py-4"
            >
              Book Appointment
            </a>
            <a 
              href="https://www.facebook.com/cinou.dental" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 