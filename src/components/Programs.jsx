import { BookOpen, Users, Lightbulb, Award } from 'lucide-react'

export default function Programs() {
  const programs = [
    {
      icon: <BookOpen className="w-12 h-12 text-white" />,
      title: "Academic Tutoring",
      description: "One-on-one and small group tutoring in all subjects for Pre-K through 12th grade. Personalized learning plans tailored to each student's needs.",
      features: ["Math & Science", "Language Arts", "Test Prep", "Homework Help"]
    },
    {
      icon: <Users className="w-12 h-12 text-white" />,
      title: "Community Youth Programs",
      description: "Enrichment programs and community events designed to engage youth, build leadership skills, and foster community connections.",
      features: ["After-School Programs", "Summer Camps", "Community Events", "Leadership Development"]
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-white" />,
      title: "Scholars Program",
      description: "Comprehensive scholarship and mentorship program supporting high-achieving students in their academic and personal growth.",
      features: ["Mentorship", "Scholarships", "College Prep", "Career Guidance"]
    },
    {
      icon: <Award className="w-12 h-12 text-white" />,
      title: "Educational Consulting",
      description: "Professional consulting services for schools and organizations seeking to enhance their educational programs and student outcomes.",
      features: ["Program Development", "Staff Training", "Curriculum Support", "Assessment Services"]
    }
  ]

  return (
    <section id="programs" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Programs & Services</h2>
          <p className="section-subtitle">Comprehensive educational solutions for students of all ages</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="gradient-bg w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark mb-3">{program.title}</h3>
              <p className="text-gray-700 mb-6">{program.description}</p>
              <div className="space-y-2">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-lg mb-8">Contact us today to learn more about our programs and how we can support your educational journey.</p>
          <button className="bg-accent text-dark px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
