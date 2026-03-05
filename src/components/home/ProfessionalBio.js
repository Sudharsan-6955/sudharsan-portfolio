"use client";

import { useState } from 'react';
import Image from "next/image";
import './Btnshine.css'
export default function ProfessionalBio() {
    const [spot, setSpot] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    const handleMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setSpot({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };
    //fonts  font-['Space_Grotesk'] font-syne font-digital font-unbounded font-bricolage
    return (
        <div
            className="relative overflow-hidden rounded-2xl bg-[#151417] border border-gray-600 "
            onMouseMove={handleMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div
                className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'
                    }`}
                style={{
                    background: `radial-gradient(500px circle at ${spot.x}px ${spot.y}px, rgba(45, 212, 191, 0.22), rgba(0, 0, 0, 0.0) 55%)`,
                }}
            />

            <div className="relative z-10 flex flex-col gap-12 ">
                {/* Snowflake Decorations */}
                <div className="absolute -top-8 -left-4 text-2xl text-gray-700 opacity-40">❄</div>
                <div className="absolute top-32 -right-6 text-2xl text-gray-700 opacity-40">❄</div>
                <div className="absolute top-4 right-8 text-2xl text-gray-700 opacity-40">❄</div>

                {/* Main Titles Section */}
                <div className="flex flex-col p-3 ">
                    {/* Senior UX designer */}
                    <div className="flex justify-between pb-1 md:pb-0 items-start md:gap-6">
                        <h3 className="text-xl  md:text-5xl font-bold text-[#F2F2F2] leading-tight flex-1 font-unbounded">
                            MERN Developer<span className="text-orange-500">.</span>
                        </h3>
                        <div className="hii text-right whitespace-nowrap md:pt-2 flex items-center  gap-2">
                            <div className="text-gray-400 text-xs mt-2 md:text-sm md:mt-6">Since</div>
                            <div className="text-white font-dseg7 text-sm md:text-xl tracking-widest md:mt-4">
                                <h1>2026</h1>
                            </div>
                        </div>
                    </div>

                    {/* Webflow developer */}
                    <div className="flex justify-between pb-1 md:pb-0 items-start md:gap-6">
                        <h3 className="text-xl md:text-5xl font-bold text-[#F2F2F2] leading-tight flex-1 font-unbounded">
                            Backend Developer<span className="text-orange-500">.</span>
                        </h3>
                        <div className="hii text-right whitespace-nowrap md:pt-2 flex items-center  gap-2">
                            <div className="text-gray-400 text-xs mt-2 md:text-sm md:mt-6">Since</div>
                            <div className="text-white font-dseg7 text-sm md:text-xl tracking-widest md:mt-4">
                                <h1>2024</h1>
                            </div>
                        </div>
                    </div>

                    {/* Photographer */}
                    <div className="flex justify-between pb-1 md:pb-0 items-start md:gap-6">
                        <h3 className="text-xl md:text-5xl font-bold text-[#F2F2F2] leading-tight flex-1 font-unbounded">
                            Frontend Creater<span className="text-orange-500">.</span>
                        </h3>
                        <div className="hii text-right whitespace-nowrap md:pt-2 flex items-center  gap-2">
                            <div className="text-gray-400 text-xs mt-2 md:text-sm md:mt-6">Since</div>
                            <div className="text-white font-dseg7 text-sm md:text-xl tracking-widest md:mt-4">
                                <h1>2023</h1>
                            </div>
                        </div>
                    </div>

                    {/* Creative */}
                    <div className="flex justify-between items-start md:gap-6">
                        <div className="relative inline-block overflow-hidden">
                            <h3 className="text-xl md:text-5xl font-bold text-[#F2F2F2] leading-tight flex-1 font-unbounded">
                                Creative<span className="text-orange-500">.</span>
                            </h3>
                        </div>
                        <div className="hii text-right whitespace-nowrap md:pt-1 flex items-center  gap-2">
                            <div className="text-gray-400 text-xs mt-2 md:text-sm md:mt-6">Since</div>
                            <div className="text-white font-dseg7 text-sm md:text-xl tracking-widest md:mt-4">
                                <Image src="/Assets/Textsimages/birth.svg" alt="2023" className="md:h-5 h-4 w-auto" width={96} height={32} />
                            </div>
                        </div>
                    </div>
                    {/* Job Description and Button */}
                    <div className="flex justify-between  items-center md:pt-9 md:pb-4">
                        <p className="text-gray-300 text-xs md:text-base flex-1 font-satoshi">
                            Turning ideas into real

                            <span className="text-red-500 font-bold"> Web Applications.</span>
                        </p>
                        <button className="ml-6 gold-text bg-gray-800 hover:bg-gray-700 text-white px-1 md:px-2 py-3 rounded-full text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap">
                            Make it fly!
                            <Image src="/Assets/Educat/rocket.svg" alt="rocket" className="md:h-5 h-3 w-auto" width={20} height={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
