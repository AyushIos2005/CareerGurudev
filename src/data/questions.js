export const streamQuestions = [
  {
    id: 1,
    question: "Which subjects do you enjoy most?",
    options: [
      "Mathematics & Science",
      "Business & Accounts", 
      "History, Arts & Literature"
    ],
    scores: [[3,1,0], [1,3,1], [0,1,3]]
  },
  {
    id: 2,
    question: "What kind of career interests you?",
    options: [
      "Doctor, Engineer, Scientist",
      "Businessman, CA, Banker",
      "Lawyer, Designer, Writer"
    ],
    scores: [[3,1,0], [1,3,1], [0,2,3]]
  },
  {
    id: 3,
    question: "How do you prefer to work?",
    options: [
      "Solving complex problems",
      "Managing people & money",
      "Creating & expressing ideas"
    ],
    scores: [[3,0,1], [1,3,1], [0,2,3]]
  },
  {
    id: 4,
    question: "Which activity excites you?",
    options: [
      "Science experiments",
      "Market analysis",
      "Drawing/painting"
    ],
    scores: [[3,0,1], [0,3,1], [0,1,3]]
  },
  {
    id: 5,
    question: "Future goal priority?",
    options: [
      "High salary + stability",
      "Entrepreneurship",
      "Creative freedom"
    ],
    scores: [[2,3,1], [1,3,2], [1,1,3]]
  }
]

export const streamResults = {
  science: {
    minScore: 10,
    title: "🧪 SCIENCE Stream",
    desc: "Perfect for you! Science opens doors to Medicine, Engineering, Research & Technology careers.",
    nextSteps: [
      "PCB - Medical (Doctor, Dentist, Biotech)",
      "PCM - Engineering (IITs, NITs, Tech)",
      "After 12th: NEET/JEE + Top Colleges"
    ],
    colleges: "AIIMS, IITs, NITs, BITS Pilani"
  },
  commerce: {
    minScore: 7,
    title: "💼 COMMERCE Stream", 
    desc: "Excellent choice! Commerce leads to CA, MBA, Finance, Business Management careers.",
    nextSteps: [
      "CA Foundation after 12th",
      "B.Com + MBA from IIMs",
      "Banking & Finance careers"
    ],
    colleges: "SRCC, St. Xavier's, Christ University"
  },
  arts: {
    minScore: 0,
    title: "🎨 ARTS/Humanities Stream",
    desc: "Great fit! Arts offers Law, Design, Journalism, Psychology & Civil Services careers.",
    nextSteps: [
      "BA + Law (CLAT)",
      "Design (NID/NIFT)",
      "UPSC Civil Services"
    ],
    colleges: "LSE, JNU, St. Stephen's"
  }
}
