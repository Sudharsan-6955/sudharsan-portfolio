import GithubButton from "../ui/GithubButton";
export default function BrandShowcaseCard() {
  return (
    <div className="relative bg-[#151417] rounded-2xl p-5 border border-gray-700  transition-all duration-300 group overflow-hidden">
      <div className="grid grid-cols-2 gap-2 h-full">
        {/* DesignInfinity */}
        <div className="relative bg-ber-500 rounded-xl flex flex-col justify-between overflow-hidden min-h-[120px]">
          <img
            src="/Assets/Projects/Musicapp.svg"
            alt="Password Generator background"
            className=" inset-0 w-full h-full object-cover  pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          <a
            href="https://music-player-sigma-dun.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-2 bottom-2 z-20 cursor-pointer"
          >
            <GithubButton />
          </a>
        </div>

        {/* Restaurant */}
        <div className="relative bg-ber-500 rounded-xl flex flex-col justify-between overflow-hidden min-h-[120px]">
          <img
            src="/Assets/Projects/Calc.svg"
            alt="Password Generator background"
            className=" inset-0 w-full h-full object-cover  pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          <a
            href="https://multical-c.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-2 bottom-2 z-20 cursor-pointer"
          >
            <GithubButton />
          </a>
        </div>


        {/* Hotel Badge */}
        <div className="relative bg-ber-500 rounded-xl flex flex-col justify-between overflow-hidden min-h-[120px]">
          <img
            src="/Assets/Projects/PasswordGen.svg"
            alt="Password Generator background"
            className=" inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          <a
            href="https://p-gen-one.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-2 bottom-2 z-20 cursor-pointer"
          >
            <GithubButton />
          </a>
        </div>


        {/* Warzone */}
        <div className="bg-black rounded-xl p-3 flex  flex-col justify-between border border-gray-700 overflow-hidden">
          <div className="text-white font-bold text-xs md:text-base  text-center ">MY Projects</div>
          <p className="text-gray-400 text-xs  text-center">"View My Work"</p>
          <a
            href="https://github.com/Sudharsan-6955"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black text-xs px-2 py-1 rounded-full hover:bg-gray-200 transition w-full truncate text-center flex items-center gap-2 justify-center"
          >
            Visit My repo
            <img src="/Assets/Projects/visit.svg" alt="Visit Repo" className="w-6 h-6" />

          </a>
        </div>

      </div>
    </div>
  );
}
