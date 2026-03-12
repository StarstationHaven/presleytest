export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663410696369/7MDZ95Hy9MGBB4fHQdjJ6d/presley-hero-SeaHwArQEBU8wrT7AMNnHN.webp)',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Empowering Youth to <span className="text-accent">EXCEL</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          Quality education, community support, and opportunities for every student in Lake City
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-lg px-8 py-4">Start Tutoring</button>
          <button className="btn-accent text-lg px-8 py-4 text-dark">Support Our Mission</button>
        </div>
      </div>
    </section>
  )
}
