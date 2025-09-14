const OfferForYou = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Page Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/pics/pagehero.jpg"
            alt="Cinou Dental Clinic Services"
            className="w-full h-full object-cover"
          />
          {/* Image overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 glass-effect border border-purple-500/30 rounded-full premium-text text-sm font-medium mb-8">
              <span className="mr-2">🦷</span>
              Professional Dental Services
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Advanced Dental
              <span className="block premium-text">Care & Treatment</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience cutting-edge dental care with our comprehensive range of services. 
              From routine checkups to complex treatments, we're here for all your dental needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
        <div className="container-custom">
          {/* Services Overview */}
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Our Comprehensive Dental Services</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 text-xl">🦷</div>
                  <div>
                    <h4 className="text-white font-semibold">General Dentistry</h4>
                    <p className="text-gray-300 text-sm">Regular checkups, cleanings, fillings, and preventive care to maintain optimal oral health.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 text-xl">😁</div>
                  <div>
                    <h4 className="text-white font-semibold">Cosmetic Dentistry</h4>
                    <p className="text-gray-300 text-sm">Teeth whitening, veneers, and smile makeovers to enhance your appearance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 text-xl">🦴</div>
                  <div>
                    <h4 className="text-white font-semibold">Orthodontics</h4>
                    <p className="text-gray-300 text-sm">Professional teeth straightening with braces and modern alignment treatments.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 text-xl">🦷</div>
                  <div>
                    <h4 className="text-white font-semibold">Emergency Care</h4>
                    <p className="text-gray-300 text-sm">24/7 emergency dental services for urgent dental problems and pain relief.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 text-xl">🏥</div>
                  <div>
                    <h4 className="text-white font-semibold">Modern Equipment</h4>
                    <p className="text-gray-300 text-sm">State-of-the-art dental technology for accurate diagnosis and comfortable treatment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-purple-400 text-xl">👨‍⚕️</div>
                  <div>
                    <h4 className="text-white font-semibold">Expert Team</h4>
                    <p className="text-gray-300 text-sm">Experienced dental professionals committed to providing personalized care.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-green-900/20 border border-green-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Cinou Dental Clinic?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✅</div>
                  <div>
                    <h4 className="text-white font-semibold">24/7 Availability</h4>
                    <p className="text-gray-300 text-sm">Always open for emergencies and routine care. Your dental health never sleeps.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✅</div>
                  <div>
                    <h4 className="text-white font-semibold">Modern Technology</h4>
                    <p className="text-gray-300 text-sm">Latest dental equipment and techniques for accurate diagnosis and comfortable treatment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✅</div>
                  <div>
                    <h4 className="text-white font-semibold">Experienced Professionals</h4>
                    <p className="text-gray-300 text-sm">Skilled dental team with years of experience in comprehensive dental care.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✅</div>
                  <div>
                    <h4 className="text-white font-semibold">Personalized Care</h4>
                    <p className="text-gray-300 text-sm">Individual treatment plans tailored to your specific dental needs and goals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✅</div>
                  <div>
                    <h4 className="text-white font-semibold">Sterile Environment</h4>
                    <p className="text-gray-300 text-sm">Clean, safe, and comfortable clinic environment with strict hygiene protocols.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-xl">✅</div>
                  <div>
                    <h4 className="text-white font-semibold">Comprehensive Services</h4>
                    <p className="text-gray-300 text-sm">From routine checkups to complex procedures - all under one roof.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-slate-800/30 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Success by Numbers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold premium-text mb-2">24K+</div>
                <div className="text-gray-400">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold premium-text mb-2">24/7</div>
                <div className="text-gray-400">Always Open</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold premium-text mb-2">Modern</div>
                <div className="text-gray-400">Equipment</div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-purple-500/10 border border-purple-500/30 rounded-2xl">
              <div className="text-center">
                <div className="text-5xl font-bold premium-text mb-2">Your Smile</div>
                <div className="text-gray-300 text-lg">Is Our Priority</div>
                <div className="text-gray-400 text-sm mt-2">Professional dental care with a personal touch</div>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Dental Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="premium-card p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">🦷 General Dentistry</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Regular dental checkups and cleanings</li>
                    <li>• Cavity treatment and fillings</li>
                    <li>• Preventive care and oral hygiene</li>
                    <li>• Root canal treatments</li>
                  </ul>
                </div>
                <div className="premium-card p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">😁 Cosmetic Dentistry</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Professional teeth whitening</li>
                    <li>• Dental veneers and crowns</li>
                    <li>• Smile makeovers</li>
                    <li>• Gum contouring</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="premium-card p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">🦴 Orthodontics</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Traditional braces treatment</li>
                    <li>• Invisalign clear aligners</li>
                    <li>• Teeth alignment correction</li>
                    <li>• Bite correction therapy</li>
                  </ul>
                </div>
                <div className="premium-card p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">🚨 Emergency Care</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• 24/7 emergency dental services</li>
                    <li>• Pain relief and treatment</li>
                    <li>• Dental trauma care</li>
                    <li>• Immediate appointments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="bg-slate-800/30 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Get in Touch with Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <div className="text-lg text-gray-300">
                    <div className="font-semibold text-white">Address:</div>
                    Cinou Dental, Ben 'Aknoûn, Algeria, 16009
                  </div>
                  <div className="text-lg text-gray-300">
                    <div className="font-semibold text-white">Phone:</div>
                    0698 17 34 27
                  </div>
                  <div className="text-lg text-gray-300">
                    <div className="font-semibold text-white">Email:</div>
                    cinou.dental@gmail.com
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Operating Hours</h3>
                <div className="space-y-4">
                  <div className="text-3xl font-bold premium-text mb-2">24/7</div>
                  <div className="text-gray-300 text-lg">Always Open</div>
                  <div className="text-gray-400 text-sm">Emergency and routine care available around the clock</div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-2xl">
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400 mb-2">🦷 Your Smile Matters</div>
                <div className="text-gray-300 text-sm">Professional dental care available whenever you need it. Book your appointment today!</div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-3xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-6">Why Choose Cinou Dental Clinic?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">⏰</div>
                <h4 className="text-white font-semibold mb-2">24/7 Availability</h4>
                <p className="text-gray-300 text-sm">Always open for your dental needs, emergencies, and routine care.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h4 className="text-white font-semibold mb-2">Modern Equipment</h4>
                <p className="text-gray-300 text-sm">State-of-the-art dental technology for accurate diagnosis and treatment.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">👨‍⚕️</div>
                <h4 className="text-white font-semibold mb-2">Expert Care</h4>
                <p className="text-gray-300 text-sm">Experienced professionals committed to your dental health and comfort.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Smile?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience professional dental care with modern equipment and personalized attention. 
              Your smile is our priority - book your appointment today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+213698173427" 
                className="btn-primary text-lg px-8 py-4"
              >
                🦷 Book Your Appointment
              </a>
              <a 
                href="https://www.facebook.com/cinou.dental" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-4"
              >
                <span className="mr-2">📘</span>
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OfferForYou 