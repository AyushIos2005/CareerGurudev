import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { streamQuestions } from '../data/questions'

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState({ science: 0, commerce: 0, arts: 0 })
  const [isComplete, setIsComplete] = useState(false)
  const navigate = useNavigate()

  const handleAnswer = (optionIndex) => {
    const question = streamQuestions[currentQuestion]
    const [sciScore, comScore, artScore] = question.scores[optionIndex]
    
    setScores(prev => ({
      science: prev.science + sciScore,
      commerce: prev.commerce + comScore,
      arts: prev.arts + artScore
    }))

    if (currentQuestion < streamQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsComplete(true)
    }
  }

  const finishQuiz = () => {
    navigate('/result', { 
      state: { 
        scores,
        totalQuestions: streamQuestions.length
      } 
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent mb-4">
            AI Career Quiz
          </h1>
          <div className="flex justify-center gap-2 text-sm text-gray-600 mb-8">
            <div className="w-3 h-3 bg-emerald-500 rounded-full" />
            <span>AI analyzes your answers for perfect stream match</span>
          </div>
          
          <div className="flex justify-center gap-2 mb-8 text-sm">
            <span>Question {currentQuestion + 1} of {streamQuestions.length}</span>
          </div>
        </div>

        {!isComplete ? (
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {streamQuestions[currentQuestion].question}
              </h2>
            </div>
            
            <div className="grid gap-4">
              {streamQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-emerald-50 hover:to-emerald-100 border-2 border-gray-200 hover:border-emerald-300 rounded-2xl text-left transition-all duration-200 hover:shadow-lg font-medium hover:scale-[1.02]"
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t-2 border-gray-100 text-center">
              <p className="text-sm text-gray-500 mb-4">
                Progress: {Math.round((currentQuestion + 1) / streamQuestions.length * 100)}%
              </p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-secondary h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.round((currentQuestion + 1) / streamQuestions.length * 100)}%` }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-emerald-500 to-secondary text-white p-12 rounded-3xl shadow-2xl text-center">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-xl mb-8 opacity-90">AI has analyzed your answers. See your personalized stream recommendation.</p>
            <button 
              onClick={finishQuiz}
              className="btn-primary text-xl px-12 py-5 shadow-2xl inline-block"
            >
              🎉 View My Results
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
