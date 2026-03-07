import Image from 'next/image';

export default function BrandInfo() {
  return (
    <div className="flex flex-col gap-4 h-full z-0">
      {/* DesignInfinity Card */}
      <div className="bg-[#151417] rounded-lg p-6 z-0 border border-gray-700 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-400 mb-1 font-syne">Coder's say</p>
            <div className="flex items-center gap-3">
              <h3 className="text-white font-bold font-syne text-xl tracking-tighter" >
                JS<span className="text-[#FF9900]"> Snap</span>
              </h3>
            </div>
          </div>

          <div className="w-10 h-10  flex items-center justify-center  ">
            <Image src="/Assets/Brandinfo/js.svg" alt="js logo" className="w-7 h-7" width={24} height={24} style={{ filter: 'invert(1) sepia(0.5) hue-rotate(40deg) saturate(1.2)' }} />

          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed flex-1 font-syne">
          Leveraging JavaScript as the foundation of modern web development to build scalable, secure, and high-performance applications, powering dynamic frontend interfaces, efficient backend services, optimized APIs, and reliable system architecture.
        </p>
      </div>



      {/* Spring Card */}
      <div className="bg-[#151417] rounded-lg p-6 z-0 border border-gray-700 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Image src="/Assets/Brandinfo/node.svg" alt="nodejs logo" className="w-7 h-7" width={24} height={24} style={{ filter: 'invert(0.8) sepia(0.8) hue-rotate(100deg) saturate(1.5)' }} />
            <h3 className="text-white font-bold font-syne text-xl" >
              Node<span className="text-[#FF9900]">Snap</span>
            </h3>
          </div>

        </div>
        <p className="text-gray-400 text-sm leading-relaxed flex-1 font-syne">
          Building backend systems with Node.js, creating secure APIs, managing databases, authentication, ensuring scalable & secure & performance.
        </p>

      </div>

      {/* Large Infinity Icon */}
      {/* <div className="flex justify-center">
        <div className="text-gray-700 text-8xl font-light font-[--font-space-grotesk]">∞</div>
      </div> */}
    </div>
  );
}
