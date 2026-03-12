import { Heart, Users, BookOpen, Target } from 'lucide-react'

export default function AboutUs() {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Community Focused",
      description: "Dedicated to serving Lake City and Columbia County youth with compassion and excellence"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Inclusive Education",
      description: "Welcoming all students regardless of background, creating supportive learning environments"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Academic Excellence",
      description: "Providing quality tutoring and educational services for Pre-K through 12th grade"
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Youth Empowerment",
      description: "Building confidence and skills to help students achieve their full potential"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="section-title">About Presley EXCEL</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded by educator Mrs. Bernice D. Presley, Presley EXCEL and Scholars Program, Inc. is a nonprofit organization dedicated to providing exceptional educational services and community youth programming to the Lake City area.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With over 18 years of community involvement and a commitment to educational excellence, we've helped hundreds of students achieve their academic goals through personalized tutoring, mentorship, and enrichment programs.
            </p>
            <p className="text-lg text-gray-700">
              Our mission is simple: <span className="font-bold text-primary">Empower Youth to EXCEL</span> by providing quality education, supportive community, and opportunities for success.
            </p>
          </div>
          <div>
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663410696369/7MDZ95Hy9MGBB4fHQdjJ6d/presley-tutoring-gFTF9jWi3wDJQdDXSu7gpW.webp"
              alt="Tutoring session"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="card text-center">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-dark">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
