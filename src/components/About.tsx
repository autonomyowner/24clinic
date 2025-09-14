const About = () => {
  return (
    <section id="about" className="section-padding glass-effect">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="premium-text">Cinou Dental</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your smile is our priority. We're committed to providing exceptional dental care with modern equipment 
            and a personal touch, available 24/7 for your convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="premium-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To provide exceptional dental care with a focus on patient comfort, using modern technology 
                and personalized treatment plans to ensure the best possible outcomes for every patient.
              </p>
            </div>

            <div className="premium-card p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center mr-4 shadow-lg">
                  <span className="text-slate-900 text-2xl">🌟</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To become the leading dental clinic in Algeria, known for our commitment to excellence, 
                innovation in dental care, and our dedication to making quality dental services accessible 24/7.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="premium-gradient p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Cinou Dental?</h3>
              <ul className="space-y-3 text-slate-900">
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  24/7 availability for emergency and routine care
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Modern dental equipment and latest technology
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Experienced and professional dental team
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Personalized treatment plans for each patient
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Comfortable and sterile environment
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="premium-card p-6 text-center">
                <div className="text-3xl font-bold premium-text mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Always Open</div>
              </div>
              <div className="premium-card p-6 text-center">
                <div className="text-3xl font-bold premium-text mb-2">Modern</div>
                <div className="text-gray-400 text-sm">Equipment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 