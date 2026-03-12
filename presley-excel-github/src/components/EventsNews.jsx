import { Calendar, MapPin, ArrowRight } from 'lucide-react'

export default function EventsNews() {
  const events = [
    {
      date: "May 2, 2026",
      title: "Kiwanis Kids Day",
      location: "Florida Gateway Fairgrounds, Lake City",
      description: "Join us for an exciting day of educational games, community activities, and family fun. Presley EXCEL will have an interactive booth with STEM challenges and learning activities for all ages!",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410696369/7MDZ95Hy9MGBB4fHQdjJ6d/presley-community-ZygMu2hgBBofq2L5gjUZ2L.webp"
    },
    {
      date: "June 15, 2026",
      title: "Summer Learning Program Launch",
      location: "Presley EXCEL Center",
      description: "Kick off summer with our comprehensive summer learning program. Prevent summer slide and build new skills through engaging, interactive learning activities.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410696369/7MDZ95Hy9MGBB4fHQdjJ6d/presley-hero-SeaHwArQEBU8wrT7AMNnHN.webp"
    },
    {
      date: "August 1, 2026",
      title: "Back-to-School Preparation",
      location: "Multiple Locations",
      description: "Get ready for the new school year with our back-to-school prep sessions. Academic readiness assessments, goal setting, and skill-building workshops.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663410696369/7MDZ95Hy9MGBB4fHQdjJ6d/presley-tutoring-gFTF9jWi3wDJQdDXSu7gpW.webp"
    }
  ]

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Events & News</h2>
          <p className="section-subtitle">Stay connected with our community activities and program updates</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div key={index} className="card overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="h-48 overflow-hidden rounded-t-xl">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                  <Calendar size={18} />
                  {event.date}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin size={16} />
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-3">{event.description}</p>
                <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-bg-light rounded-xl p-12 text-center">
          <h3 className="text-3xl font-bold text-dark mb-4">Stay Updated</h3>
          <p className="text-gray-700 mb-8">Subscribe to our newsletter for the latest news, events, and program updates.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}
