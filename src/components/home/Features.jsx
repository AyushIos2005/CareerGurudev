export function Features() {
  const features = [
    {
      icon: '🤖',
      title: 'AI Stream Analyzer',
      desc: 'Advanced quiz analyzes your interests and recommends perfect stream',
      link: '/quiz'  // ✅ Added Quiz Link
    },
    {
      icon: '🧑‍⚕️',
      title: 'Top Counselors',
      desc: 'Request personalized guidance from expert career counselors',
      link: '/counselor',
      testimonial: true  // ✅ Links to Testimonials
    },
    {
      icon: '📈',
      title: 'Post-12th Roadmap',
      desc: 'Complete guidance on courses, colleges and careers after 12th',
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Why Choose CareerGurudev?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{feature.desc}</p>
              
              {/* Quiz Link for AI Analyzer */}
              {feature.link && (
                <a 
                  href={feature.link} 
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 group/link"
                >
                  Start Quiz → 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17 8 4 4-4 4" />
                  </svg>
                </a>
              )}
              
              {/* Testimonial Link for Counselors */}
              {feature.testimonial && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a href="/testimonials" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                    Read Student Reviews →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
