import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Programs from './components/Programs'
import EventsNews from './components/EventsNews'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <Hero />
      <AboutUs />
      <Programs />
      <EventsNews />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
