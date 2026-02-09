import { testimonials } from '../data/assets'
import { Link } from 'react-router-dom'

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-600 to-slate-800 bg-clip-text text-transparent mb-6">
            🏆 Student Success Stories
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            10,000+ students trust CareerGurudev for their 10th pass career decisions
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center text-sm text-emerald-600 font-semibold">
            <span>⭐ 4.9/5 Rating</span>
            <span>✅ 97% Success Rate</span>
            <span>📈 500+ Counselors</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20 text-center text-white">
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-4xl font-bold mb-2">10K+</h3>
            <p>Happy Students</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-4xl font-bold mb-2">2.5K+</h3>
            <p>5-Star Reviews</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-4xl font-bold mb-2">97%</h3>
            <p>Stream Accuracy</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-4xl font-bold mb-2">500+</h3>
            <p>Top Counselors</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 9).map((testimonial) => (
            <div key={testimonial.id} className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              
              {/* Photo + Name */}
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={testimonial.photo} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform"
                />
                <div>
                  <h4 className="font-bold text-xl text-gray-800">{testimonial.name}</h4>
                  <p className="text-emerald-600 font-semibold">{testimonial.city}</p>
                  <p className="text-sm text-gray-500">{testimonial.stream}</p>
                </div>
              </div>
              
              {/* Review */}
              <p className="text-gray-700 leading-relaxed italic mb-4">"{testimonial.review}"</p>
              
              {/* Counselor + Date */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span>👨‍🏫 {testimonial.counselor}</span>
                <span>📅 {testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-6">
          <Link 
            to="/quiz"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-secondary text-white px-12 py-6 rounded-3xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
          >
            🚀 Start Your AI Quiz Now
          </Link>
          <div className="text-lg text-gray-600">
            Join 10,000+ students who discovered their perfect career path
          </div>
          <Link to="/" className="text-emerald-600 hover:text-emerald-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
