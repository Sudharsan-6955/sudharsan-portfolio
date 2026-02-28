import GithubButton from "../ui/GithubButton";

export default function SkillsServicesCard() {


  return (
    <div className="relative bg-[#151417] rounded-2xl p-5 border border-gray-700  transition-all duration-300 group overflow-hidden">
      {/* SVG Background */}
      <img
        src="/Assets/Projects/seatbooking.svg"
        alt="Password Generator background"
        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      <div className="absolute right-2 bottom-2 z-20 md:right-5 md:bottom-5">
        <GithubButton />
      </div>
    </div>
  );
}
