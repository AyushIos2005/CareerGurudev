import { Link } from 'react-router-dom'

export function CTA() {
  return (
    <section className="py-20 text-center bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to discover your career path?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Take our AI-powered quiz and get personalized stream recommendations in just 3 minutes!</p>
        <Link to="/quiz" className="btn-primary text-xl px-12 py-5 inline-block shadow-2xl hover:shadow-3xl">
          🎯 Take Career Quiz Now
        </Link>
      </div>
    </section>
  )
}
