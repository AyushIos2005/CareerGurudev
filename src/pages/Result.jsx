import { useLocation, Link } from 'react-router-dom'
import { calculateStreamRecommendation } from '../utils/calculateScore'

export default function Result() {
  const { state } = useLocation()
  const { scores } = state || {}
  
  if (!scores) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">No quiz results found</h1>
          <Link to="/quiz" className="btn-primary">Take Quiz Again</Link>
        </div>
      </div>
    )
  }

  const recommendation = calculateStreamRecommendation(
    scores.science || 0,
    scores.commerce || 0,
    scores.arts || 0
  )

  const { recommended, details } = recommendation

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Results Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-secondary text-white px-8 py-4 rounded-full text-2xl font-bold mb-6 shadow-2xl">
            Your Perfect Match: {details.title.split(' ')[1]}
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-gray-800 bg-clip-text text-transparent mb-6">
            {details.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {details.desc}
          </p>
        </div>

        {/* Score Breakdown */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Scores</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl">
                <span>🧪 Science</span>
                <span className="font-bold text-2xl">{scores.science}/15</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                <span>💼 Commerce</span>
                <span className="font-bold text-2xl">{scores.commerce}/15</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                <span>🎨 Arts</span>
                <span className="font-bold text-2xl">{scores.arts}/15</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-br from-emerald-500 to-secondary text-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Next Steps After 12th</h3>
            <ul className="space-y-3 text-lg">
              {details.nextSteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-2xl mt-1">→</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Link 
            to="/counselor" 
            className="group bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white p-8 rounded-3xl text-center shadow-2xl hover:shadow-3xl transition-all duration-300 font-bold text-xl flex items-center justify-center gap-4 hover:scale-[1.02]"
          >
            🧑‍⚕️ Get Expert Counselor
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
          
          <div className="bg-white p-8 rounded-3xl shadow-2xl text-center group hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Top Colleges</h4>
            <p className="text-xl text-gray-700">{details.colleges}</p>
          </div>
        </div>

        {/* Retake Quiz */}
        <div className="text-center">
          <Link 
            to="/quiz" 
            className="inline-flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-8 rounded-2xl transition-all duration-200"
          >
            🔄 Retake Quiz
          </Link>
        </div>
      </div>
    </div>
  )
}
