export default function ContactPage() {
  return (
    <>
      <div className="mb-8 md:text-start text-center px-7 z-10  relative">
        <h2 className="text-4xl font-unbounded md:text-5xl font-bold text-white mb-4">
          Cantact me<span className="bg-orange-500 bg-clip-text text-transparent">.</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg">A showcase of my creative projects and achievements</p>
      </div>
      <section id="contact" className="min-h-auto md:mx-0 mx-2 border rounded-2xl border-gray-700 bg-black text-white py-12 px-1 relative z-10">
        
        <div className="max-w-7xl mx-auto z-10 px-2">

          {/* Top Section */}
          <div className="">
            {/* Left Info Box */}
            <div className="flex justify-between md:justify-between ">
              <div className="border border-gray-700 hidden md:block rounded-2xl p-3 h-fit w-fit">
                <p className="text-sm md:text-base flex flex-col font-syne text-[#ffffff]">
                  <span >Empty block just </span>
                  <span>because 'y'</span>
                </p>
              </div>
              <div className="flex items-center justify-center">
                <h1 className="text-xl md:text-5xl  font-cursive  italic text-gray-100 text-center">
                  Sudharsan V
                </h1>
              </div>
              {/* Right Info Box */}
              <div className="border  border-gray-700 rounded-xl p-3 h-fit  w-fit">
                <p className="text-xs md:text-base flex flex-col font-syne text-[#ffffff]">
                  <span>
                    <span className="relative inline-block w-fit">
                      Currently
                      <svg className="absolute bottom-0 left-0 w-full h-6" viewBox="0 0 100 30" preserveAspectRatio="none">
                        <path d="M 0 15 Q 25 5, 50 15 T 100 15" stroke="#ef4444" strokeWidth="2" fill="none" strokeLinecap="round" />
                      </svg>
                    </span> open to work
                  </span>
                  <span>Always</span>
                </p>
              </div>
            </div>


            {/* Center Content */}
            <div className=" py-10">
              {/* Status Badge */}

              <div className="w-fit mx-auto border my-7 border-gray-700 rounded-full px-6 py-2 mb-8">
                <p className="text-sm text-gray-400">Let's collaborate</p>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl max-w-5xl md:text-7xl mx-auto font-satoshi font-semibold mb-8 leading-tight text-center">
                Ready to make pixels dance together ?

              </h2>

              {/* Contact Button */}
              <div className="flex justify-center">
                <button className="border border-gray-700 rounded-full px-8 py-3 text-sm md:text-lg font-syne hover:bg-gray-900 transition-colors flex items-center gap-2">
                  Contact me
                  <svg width="20px" height="20px" viewBox="0 -33.5 151 151" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
                    <path d="M82.7399 41.3499C100.736 41.2042 118.732 41.0874 136.728 40.8905C140.315 40.8505 143.907 40.5689 147.48 40.2178C148.071 40.1535 148.629 39.9124 149.08 39.5259C149.532 39.1395 149.857 38.6258 150.012 38.0518C150.305 37.133 149.285 35.8295 148.067 35.6378C146.886 35.4521 145.71 35.1639 144.523 35.0924C136.94 34.6329 129.358 33.9826 121.768 33.8454C106.175 33.5651 90.5773 33.4943 74.9807 33.4765C60.1836 33.4595 45.3858 33.6439 30.5886 33.6787C28.2127 33.6846 25.8354 33.3853 23.4634 33.1733C23.306 33.1345 23.1609 33.0567 23.0414 32.9472C22.9219 32.8377 22.8318 32.6999 22.7795 32.5465C22.7368 32.1803 22.8452 31.562 23.0887 31.4307C27.6358 28.9589 32.1271 26.3585 36.8029 24.1526C47.6803 19.0207 57.8844 12.7277 68.0813 6.41374C69.7569 5.37607 71.5132 4.322 72.1893 2.26307C72.312 1.8883 72.5037 1.24641 72.3475 1.12105C71.788 0.599524 71.1082 0.224493 70.3686 0.029504C69.581 -0.0633942 68.783 0.064092 68.0635 0.397733C65.5156 1.55223 62.9861 2.75664 60.5071 4.05094C42.786 13.3014 25.101 22.6069 7.37069 31.8324C0.682603 35.311 -2.49542 38.6846 5.53291 46.3329C7.84584 48.5375 10.1857 50.7389 12.7008 52.6993C24.3652 61.8006 36.0723 70.8462 47.8221 79.8362C49.4375 80.9957 51.1411 82.0271 52.9173 82.9211C54.0757 83.5499 55.2354 83.1764 56.2356 82.4229C57.3363 81.5926 58.0196 79.1793 57.6402 78.118C56.7968 75.7617 55.1166 74.033 53.3123 72.4676C46.3648 66.4411 39.3803 60.4579 32.3588 54.518C27.7959 50.6365 23.1851 46.812 18.6295 42.9225C18.4043 42.7302 18.3932 42.1349 18.4844 41.7766C18.5443 41.6215 18.6409 41.4833 18.766 41.3737C18.8911 41.2642 19.0408 41.1867 19.2025 41.1478C21.583 40.9916 23.9688 40.7927 26.3519 40.8052C45.1486 40.9045 63.9452 41.0283 82.7419 41.1766L82.7399 41.3499Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
            </div>


          </div>



          {/* Bottom Section */}
          <div className="flex justify-between">


            {/* Center - Contact Icons */}
            <div className="flex justify-center gap-3 px-7 items-end">
              <a href="mailto:salman@example.com" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417a9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.265-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>

            {/* Bottom Right */}
            <div className="border border-gray-700 rounded-2xl p-3 w-fit h-fit cursor-pointer hover:bg-gray-900 transition-colors" onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}>
              <p className="text-xs md:text-base text-right flex flex-col font-syne text-[#ffffff]">
                <span >You definitely missed </span>
                <span className="flex items-center justify-end gap-2">
                  something
                  <svg width="25px" height="25px" viewBox="0 0 96.3 96.3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <g>
                        <path d="M44.516,50.7c-2.2,6.6-1,13.3-1.4,20c0,0.3,0.7,0.8,1.1,0.9c1,0.3,1.8-0.1,2.4-0.6c2-1.9,2.9-4.1,3.1-6.4 c0.6-5.5,1.4-11.1,0.8-16.6c0.1-0.7,0.2-1.4,0.2-2.1c0.2-2.8,0.3-5.6,0.2-8.3c2,2.1,4,3.9,6.4,5.5c1,0.7,2.3,0.8,3.5-0.6 c1.1-1.2,1.3-2.6,0.6-3.7c-1.3-1.8-2.6-3.6-4.2-5.2c-2.6-2.5-5.4-4.7-8.1-7.1l0,0l0,0c-0.5-1.1-1.8-1.5-2.9-1l-1.1,0.6 c-5.9,3-9.5,8.4-14.3,12.5c-0.2,0.2-0.1,1,0.2,1.4c0.5,0.9,1.3,1.2,2.1,1.2c2.7,0.2,4.9-0.8,6.6-2.2c1.4-1.2,2.9-2.3,4.3-3.4 c-0.2,1.3-0.3,2.6-0.3,3.9C43.816,43.3,44.216,47,44.516,50.7z" fill="currentColor" />
                      </g>
                    </g>
                  </svg>
                </span>
              </p>
            </div>
          </div>
          {/* Bottom Left */}
          <div className=" text-center mt-5 rounded-2xl h-fit">
            <p className="text-sm md:text-2xl  font-syne text-gray-300">
              <span className="font-satoshi">© 2026</span> - All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>

  );
}
