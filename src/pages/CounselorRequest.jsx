import { useUser } from '@clerk/clerk-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function CounselorRequest() {
  const { user } = useUser()
  const [formData, setFormData] = useState({
    name: user?.fullName || '',
    email: user?.primaryEmailAddress?.emailAddress || '',
    streamPreference: '',
    doubts: '',
    post12thGoals: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formDataToSend = new FormData()
    formDataToSend.append('access_key', '4f6581b5-cbeb-4c70-a6d7-d94d0955f722') // Replace with your key
    formDataToSend.append('name', formData.name)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('stream', formData.streamPreference)
    formDataToSend.append('doubts', formData.doubts)
    formDataToSend.append('goals', formData.post12thGoals)
    formDataToSend.append('subject', 'New Counselor Request - CareerGurudev')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: user?.fullName || '',
          email: user?.primaryEmailAddress?.emailAddress || '',
          streamPreference: '',
          doubts: '',
          post12thGoals: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-secondary flex items-center justify-center px-6 py-12">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-12 text-center">
          <div className="text-6xl mb-6">✅</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Request Sent Successfully!</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our top counselor will contact you within 24 hours on {formData.email}
          </p>
          <Link to="/" className="btn-primary w-full text-lg py-4">← Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12 px-6">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent mb-4">
            🧑‍⚕️ Request Expert Counselor
          </h1>
          <p className="text-xl text-gray-600">
            Get personalized guidance for your career decisions
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-10 space-y-6">
          {/* Auto-filled user info */}
          <div className="space-y-2 p-4 bg-emerald-50 rounded-2xl border-2 border-emerald-200">
            <label className="text-sm font-medium text-emerald-800">Pre-filled from your profile</label>
            <div className="text-lg font-semibold text-gray-800">
              👤 {formData.name} | 📧 {formData.email}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Stream (Optional)
            </label>
            <select
              name="streamPreference"
              value={formData.streamPreference}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              required
            >
              <option value="">Select your preference...</option>
              <option value="Science">🧪 Science (Medical/Engineering)</option>
              <option value="Commerce">💼 Commerce (CA/Business)</option>
              <option value="Arts">🎨 Arts/Humanities (Law/Design)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Main Doubts/Questions
            </label>
            <textarea
              name="doubts"
              value={formData.doubts}
              onChange={handleChange}
              rows="4"
              placeholder="Ex: Should I choose Science PCB or PCM? Which college for CA?..."
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-vertical"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Post 12th Career Goals
            </label>
            <textarea
              name="post12thGoals"
              value={formData.post12thGoals}
              onChange={handleChange}
              rows="3"
              placeholder="Ex: Become Doctor, Start Business, UPSC..."
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-vertical"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary text-lg py-5 font-bold shadow-2xl hover:shadow-3xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin mr-2">⏳</span>
                Sending Request...
              </>
            ) : (
              '📨 Send Counselor Request'
            )}
          </button>
        </form>

        {submitStatus === 'error' && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-800 text-center font-medium">
              Something went wrong. Please try again.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
