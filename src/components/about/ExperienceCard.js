import React from "react";
import './Textrole.css';

function BloomingDescription() {
    return (
        <div className="text-center" style={{ borderRadius: '1rem', padding: '0.5rem' }}>
            <p className="text-base text-white font-syne">
                MERN Stack Developer with hands-on experience building real-world applications.
                Strong in problem-solving and writing clean, scalable code.
                Ready to contribute and grow with real-world projects.                </p>
        </div>
    );
}

const ExperienceCard = () => {
    return (
        <div className="md:col-span-1 md:row-span-2  min-h-32 ">
            <div
                className="relative w-full h-full bg-[#151417] border-gray-700 border "
                style={{
                    borderRadius: "1rem",
                    overflow: "hidden"
                }}
            >
                {/* Static Gradient Border */}
                <div
                    className="absolute inset-0"
                    style={{
                        borderRadius: "1rem",
                        zIndex: 0
                    }}
                ></div>
                {/* Card Content */}
                <div
                    className="relative z-10 w-full h-full "
                    style={{
                        borderRadius: "1rem",
                        padding: "1rem"
                    }}
                >
                    {/* Profile Photo & Name/Title in Row */}
                    <div className="flex gap-4 mb-4 w-full justify-center items-center">
                        <div className="w-20 h-20  rounded-md overflow-hidden  shadow-2xl shadow-orange-500">
                            <img src="/Assets/About/photo.png" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-left my-auto">
                            <h3 className="text-lg font-bold text-white">Sudharsan V</h3>
                            <div className="card">
                                <div className="loader">
                                    <p className="text-sm">Workflow</p>
                                    <div className="words ">
                                        <span className="word">plan</span>
                                        <span className="word">design</span>
                                        <span className="word">develop</span>
                                        <span className="word">secure</span>
                                        <span className="word">deploy</span>
                                        <span className="word">scale</span>
                                        {/* <style>{`
                                                .word {
                                                    animation: spin_4991 3.5s infinite ease-in-out;
                                                        }
                                        `}</style> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 w-full">
                        <div className="rounded-lg p-2 flex flex-col items-center font-bricolage">
                            <span className="text-xl font-bold text-yellow-400 ">160</span>
                            <span className="text-xs text-gray-300">Repos</span>
                        </div>
                        <div className="rounded-lg p-2 flex flex-col items-center font-bricolage">
                            <span className="text-xl font-bold text-blue-400">40</span>
                            <span className="text-xs text-gray-300">LeetCode</span>
                        </div>
                        <div className="rounded-lg p-2 flex flex-col items-center font-bricolage">
                            <span className="text-xl font-bold text-green-400">25</span>
                            <span className="text-xs text-gray-300">GFG</span>
                        </div>
                    </div>
                    {/* Blooming Description - visible when in view */}
                    <BloomingDescription />
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
