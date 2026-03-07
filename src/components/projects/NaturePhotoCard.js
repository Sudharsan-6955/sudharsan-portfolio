import GithubButton from "../ui/GithubButton";
export default function NaturePhotoCard() {
  return (
    <div className="relative bg-[#151417] rounded-2xl overflow-hidden border border-gray-700  transition-all duration-300 group row-span-2">
      <div className="absolute left-2 bottom-2 z-20 md:left-5 md:bottom-5">
        <a
          href="https://rajsurgical.vercel.app/products/search"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Go to GitHub repository"
          className='opacity-80'
        >
          Smart Search Bar
        </a>
      </div>
      <img
        src="/Assets/Projects/Product.svg"
        alt="Password Generator background"
        className="absolute inset-0 w-full h-full object-cover   pointer-events-none select-none z-0"
        aria-hidden="true"
      />
       <a
            href="https://rajsurgical.vercel.app/products/search"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-2 bottom-2 z-20 cursor-pointer"
          >
            <GithubButton />
          </a>
    </div>
  );
}
