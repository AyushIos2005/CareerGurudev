import { Routes, Route } from 'react-router-dom'
import { 
  SignedIn, 
  SignedOut, 
  RedirectToSignIn, 
  ClerkProvider 
} from '@clerk/clerk-react'  // ❌ Remove SignedInBoundary
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'
import CounselorRequest from './pages/CounselorRequest'
import Footer from './components/Footer'
import Testimonials from './pages/Testimonials'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <SignedIn>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
            <Route path="/counselor" element={<CounselorRequest />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>
      </SignedIn>
      
      <SignedOut>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<div>Please sign in to take quiz</div>} />
          <Route path="/result" element={<div>Please sign in to see results</div>} />
          <Route path="/counselor" element={<div>Please sign in to request counselor</div>} />
          <Route path="*" element={<RedirectToSignIn />} />
        </Routes>
      </SignedOut>
      
      <Footer />
    </div>
  )
}
