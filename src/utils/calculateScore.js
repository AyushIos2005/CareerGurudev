import { streamResults } from '../data/questions'

export function calculateStreamRecommendation(scienceScore, commerceScore, artsScore) {
  const scores = { science: scienceScore, commerce: commerceScore, arts: artsScore }
  const bestStream = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b)
  
  return {
    recommended: bestStream,
    scores,
    details: streamResults[bestStream]
  }
}
