import React from "react";
import { testimonials } from "../../assets/assets";

const Testi = () => {
  const CreateCard = ({ testimonial }) => {
    return (
      <div className="p-6 rounded-2xl mx-4 bg-white shadow hover:shadow-lg transition-all duration-200 w-80 shrink-0 border border-gray-100">
        <div className="flex gap-3">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={testimonial.image}
            alt={testimonial.name}
          />

          <div className="flex flex-col">
            <p className="text-lg text-gray-800 font-semibold">
              {testimonial.name}
            </p>
            <span className="text-xs text-slate-500">
              {testimonial.handle}
            </span>
          </div>
        </div>

        <p className="text-sm py-4 text-gray-600 leading-relaxed">
          "{testimonial.text}"
        </p>

        <p className="text-xs text-gray-400">{testimonial.date}</p>
      </div>
    );
  };

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-inner {
          animation: marqueeScroll 30s linear infinite;
        }

        .marquee-inner:hover {
          animation-play-state: paused;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-24">
        <h2 className="text-3xl font-bold text-center">
          What Students Say
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Real feedback from Indian students using our platform
        </p>

        {/* Row 1 */}
        <div className="w-full mx-auto max-w-6xl overflow-hidden relative mt-10">
          <div className="marquee-inner flex min-w-[200%] py-6">
            {[...testimonials, ...testimonials].map((t, index) => (
              <CreateCard key={index} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-full mx-auto max-w-6xl overflow-hidden relative">
          <div className="marquee-inner marquee-reverse flex min-w-[200%] py-6">
            {[...testimonials, ...testimonials].map((t, index) => (
              <CreateCard key={"rev" + index} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testi;
