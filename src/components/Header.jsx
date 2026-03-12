import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">Presley EXCEL</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition">About</button>
          <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-primary transition">Programs</button>
          <button onClick={() => scrollToSection('events')} className="text-gray-700 hover:text-primary transition">Events</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition">Contact</button>
          <button onClick={() => scrollToSection('contact')} className="btn-primary">Get Started</button>
          <button className="btn-accent">Donate</button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-primary py-2">About</button>
            <button onClick={() => scrollToSection('programs')} className="block w-full text-left text-gray-700 hover:text-primary py-2">Programs</button>
            <button onClick={() => scrollToSection('events')} className="block w-full text-left text-gray-700 hover:text-primary py-2">Events</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-primary py-2">Contact</button>
            <button onClick={() => scrollToSection('contact')} className="btn-primary w-full">Get Started</button>
            <button className="btn-accent w-full">Donate</button>
          </div>
        </div>
      )}
    </header>
  )
}
