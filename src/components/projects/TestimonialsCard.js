export default function TestimonialsCard({ testimonials, activeTestimonial, setActiveTestimonial }) {
  return (
    <div className="relative bg-linear-to-br from-purple-900/20 to-indigo-900/20 rounded-2xl p-6 border border-gray-700 hover:border-pink-500 transition-all duration-300 group overflow-hidden">
      <h3 className="text-white font-bold text-base mb-4 line-clamp-2">
        Testimonials of happy <span className="text-purple-400">clients.</span>
      </h3>
      
      <div className="relative">
        {/* Testimonial Card */}
        <div className="bg-gray-900 rounded-xl p-3 border border-gray-700">
          <div className="flex items-start gap-2 mb-2">
            <div className="flex flex-col gap-1 shrink-0">
              <div className="w-9 h-9 bg-linear-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-lg">
                {testimonials[activeTestimonial].avatar}
              </div>
              <span className="bg-purple-500 text-white text-xs px-1.5 py-0.5 rounded-full text-center text-[10px]">
                {testimonials[activeTestimonial].badge}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-1">
                <h4 className="text-white font-bold text-xs truncate">{testimonials[activeTestimonial].name}</h4>
                <button className="text-gray-500 text-lg shrink-0">×</button>
              </div>
              <p className="text-gray-400 text-xs mb-0.5 truncate">{testimonials[activeTestimonial].role}</p>
              <div className="text-yellow-400 text-xs">{'⭐'.repeat(testimonials[activeTestimonial].rating)}</div>
            </div>
          </div>
          
          <p className="text-gray-300 text-xs leading-tight mb-2 line-clamp-3">
            {testimonials[activeTestimonial].feedback}
          </p>

          <div className="flex justify-between items-center text-xs">
            <button className="text-gray-500 truncate">😊 peter</button>
            <button className="text-gray-500 shrink-0">next →</button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-2 justify-center mt-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeTestimonial === index ? 'bg-purple-500 w-6' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
