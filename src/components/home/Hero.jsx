import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
// import videof from "../assets/videof.mp4";

export default function Hero() {
  const { isSignedIn } = useUser();

  return (
    <section
      className="
        relative overflow-hidden
        min-h-screen
        flex items-center justify-center
        px-6 md:px-20
        text-white
      "
    >
      {/* 🎥 Background Video */}
  

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-slate-900/85 to-emerald-900/80"></div>

      {/* 🌟 Content */}
      <div className="relative z-10 max-w-4xl text-center pt-24 md:pt-28">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent leading-tight">
          Confused After 10th?
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
          AI-Powered Career Guidance for Science, Commerce & Arts.
          Get personalized recommendations + expert counselor support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/quiz"
            className="bg-yellow-500 hover:bg-yellow-400 hover:-translate-y-1 hover:scale-105 text-black font-semibold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-xl shadow-2xl transition duration-300"
          >
            🚀 Start AI Quiz Now
          </Link>

          {!isSignedIn && (
            <Link
              to="/sign-in"
              className="border-2 border-white/40 hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-105 font-semibold text-base md:text-lg px-8 md:px-10 py-3 md:py-4 rounded-xl transition duration-300"
            >
              Sign In
            </Link>
          )}
        </div>

        <p className="mt-6 text-sm opacity-70">
          Trusted by students • Free AI quiz • No payment required
        </p>
      </div>
    </section>
  );
}
