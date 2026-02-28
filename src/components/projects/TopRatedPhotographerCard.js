import GithubButton from "../ui/GithubButton";
export default function TopRatedPhotographerCard() {
  return (
    <div className="relative  rounded-2xl p-6 bg-[#151417] border border-gray-700  transition-all duration-300 group overflow-hidden">
      {/* SVG Background */}
      <img
        src="/Assets/Projects/E-Com.svg"
        alt="E-Commerce background"
        className="absolute inset-0 w-full h-full object-cover  rounded-2xl group-hover:opacity-100 opacity-60 pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      {/* GitHub Button - bottom right */}
      <div className="absolute right-2 bottom-2 z-20 md:right-5 md:bottom-5">
        <GithubButton />
      </div>
    </div>
  );
}
