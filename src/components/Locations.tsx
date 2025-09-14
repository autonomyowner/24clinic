const Locations = () => {
  const locations = [
    {
      city: "Ben 'Aknoûn",
      status: "Active",
      schedules: [
        { time: "24/7 Emergency Care", available: true },
        { time: "24/7 Routine Appointments", available: true }
      ],
      mapUrl: "https://maps.google.com/?q=Cinou+Dental+Ben+Aknoun+Algeria",
      description: "Our main dental clinic location in Ben 'Aknoûn, providing comprehensive dental care with modern equipment and 24/7 availability."
    }
  ]

  return (
    <section id="locations" className="section-padding glass-effect">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="premium-text">Location</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visit our dental clinic in Ben 'Aknoûn for professional dental care available 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="premium-card p-8 hover:transform hover:scale-105">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">{location.city}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  location.status === "Active" 
                    ? "bg-green-500/20 text-green-400 border border-green-400/30"
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                }`}>
                  {location.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {location.description}
              </p>

              {/* Schedules */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Available Services:</h4>
                <div className="space-y-2">
                  {location.schedules.map((schedule, scheduleIndex) => (
                    <div key={scheduleIndex} className={`flex items-center justify-between p-3 rounded-lg ${
                      schedule.available 
                        ? "bg-green-500/10 border border-green-400/20" 
                        : "bg-gray-500/10 border border-gray-400/20"
                    }`}>
                      <span className={`text-sm ${
                        schedule.available ? "text-green-400" : "text-gray-400"
                      }`}>
                        {schedule.time}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        schedule.available 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-gray-500/20 text-gray-400"
                      }`}>
                        {schedule.available ? "Available" : "Coming Soon"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Link */}
              <a 
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center premium-text hover:text-yellow-300 transition-colors"
              >
                <span className="mr-2">📍</span>
                View on Google Maps
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 premium-card p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Book Your Appointment?</h3>
            <p className="text-gray-300 mb-6">
              Contact us anytime for emergency care or to schedule your routine dental appointment. 
              We're available 24/7 to serve your dental needs.
            </p>
            <a 
              href="tel:+213698173427" 
              className="btn-primary"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Locations 