import GithubButton from '../ui/GithubButton';
export default function MobileDesignCard() {
  return (
    <div className="relative bg-[#151417] rounded-2xl p-6 pb-2 hover:pb-6 border border-gray-700 hover:border-gray-500 transition-all duration-300 group overflow-hidden">
      <div className="absolute left-2 bottom-2 z-20 md:left-5 md:bottom-5">
        <a
          href="https://lms-frontend-omega-eight.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to GitHub repository"
          className='opacity-80'
        >
          Learning Managemnet System
        </a>
      </div>
      {/* SVG Background */}
      <img
        src="/Assets/Projects/LMS.webp"
        alt="LMS background"
        className="absolute inset-0 w-full h-full object-cover  pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      {/* 
      <div className="relative z-10 h-full justify-end  flex flex-col">
        <div className="bg- rounded-xl p-3  backdrop-blur-sm border border-gray-700">
          <div className="space-y-2 ">
            <div className="flex  items-center gap-2">
              <span className="text-gray-300 text-xs truncate">Sudharsan-6955</span>
            </div>
            <div className="text-white justify-around flex text-xs leading-relaxed space-y-">
              <p className="truncate">✓ Creating UI</p>
              <p className="truncate">✓ Designing...</p>
              <p className="truncate">✓ Ensuring quality</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      */}
      {/* GitHub Button - bottom right */}
      <div className="absolute right-2 bottom-2 z-20 md:right-5 md:bottom-5">
        <a
          href="https://lms-frontend-omega-eight.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to GitHub repository"
        >
          <GithubButton />
        </a>
      </div>
    </div>
  );
}
