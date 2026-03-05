import GithubButton from '../ui/GithubButton';
export default function PrintOnWallCard() {
  return (
    <div className="relative bg-[#151417] rounded-2xl overflow-hidden border border-gray-700 transition-all duration-300 group">
      {/* SVG Background */}
      <img
        src="/Assets/Projects/rajsurgical.svg"
        alt="Raj Surgical background"
        className="absolute inset-0 w-full h-full object-cover   pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      {/* Buttons */}
      {/* <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <a
          href="https://lms-frontend-omega-eight.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 mx-auto flex items-center hover:bg-blue-600 text-white text-xs w-fit py-1.5 rounded-full transition-all duration-300 px-3 no-underline overflow-hidden group/button focus:outline-none focus:ring-2 focus:ring-blue-400"
          tabIndex={0}
        >
          <span className="flex items-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#fff"/>
              <text x="50%" y="55%" textAnchor="middle" fill="#2563eb" fontSize="16" fontWeight="bold" fontFamily="Arial" dy=".3em">R</text>
            </svg>
          </span>
          <span
            className="relative flex items-center transition-all duration-700 max-w-0 opacity-0 group-hover/button:max-w-xs group-hover/button:opacity-100 group-focus/button:max-w-xs group-focus/button:opacity-100 group-active/button:max-w-xs group-active/button:opacity-100 overflow-hidden whitespace-nowrap ml-2"
          >
            Go Project &rarr;
          </span>
        </a>
      </div> */}
      {/* GitHub Button - bottom right */}
       <a
            href="https://music-player-sigma-dun.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-2 bottom-2 z-20 cursor-pointer"
          >
            <GithubButton />
          </a>
    </div>
  );
}
