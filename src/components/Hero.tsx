const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/pics/hero.jpg"
          alt="Cinou Dental Clinic"
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
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 glass-effect border border-purple-500/30 rounded-full premium-text text-sm font-medium mb-8">
            <span className="mr-2">🦷</span>
            24K+ Followers on Facebook
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Cinou Dental
            <span className="block premium-text">Clinic H24</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your smile is our priority. Professional dental care available 24/7 in Ben 'Aknoûn, Algeria. 
            Experience modern dentistry with a personal touch.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center premium-card p-6">
              <div className="text-3xl font-bold premium-text">24/7</div>
              <div className="text-gray-400">Always Open</div>
            </div>
            <div className="text-center premium-card p-6">
              <div className="text-3xl font-bold premium-text">24K+</div>
              <div className="text-gray-400">Happy Patients</div>
            </div>
            <div className="text-center premium-card p-6">
              <div className="text-3xl font-bold premium-text">Modern</div>
              <div className="text-gray-400">Equipment</div>
            </div>
          </div>

          {/* CTA Buttons */}
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
              <span className="mr-2">📘</span>
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 