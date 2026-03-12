import { Facebook, Instagram, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">Presley EXCEL</h3>
            <p className="text-gray-400">Empowering youth to achieve academic excellence and personal growth in Lake City and Columbia County.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#programs" className="hover:text-primary transition">Programs</a></li>
              <li><a href="#events" className="hover:text-primary transition">Events</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition">Academic Tutoring</a></li>
              <li><a href="#" className="hover:text-primary transition">Youth Programs</a></li>
              <li><a href="#" className="hover:text-primary transition">Scholars Program</a></li>
              <li><a href="#" className="hover:text-primary transition">Consulting</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={18} />
                <span>(386) 752-4074</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={18} />
                <span>info@presleyexcel.org</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2026 Presley EXCEL and Scholars Program, Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition">Terms of Service</a>
              <a href="#" className="hover:text-primary transition">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
