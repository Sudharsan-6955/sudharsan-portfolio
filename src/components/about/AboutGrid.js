"use client";

import React, { useState } from "react";
import ExperienceCard from "./ExperienceCard";
import Repocard from "./Repocard";
import ReadingCard from "./ReadingCard";
import MapCard from "./MapCard";
import HowIWorkCard from "./HowIWorkCard";

// import Phoneui from "../ui/phoneui";
// import FancyCard from "../ui/FancyCard";
import "./DotBorder.css";
// import './loadingbg.css'

const AboutGrid = () => {
    // 0: normal, 1: butter, 2: lubber

    return (
        <div className="w-full max-w-6xl mx-auto px-2 md:px-0">
            {/* Top Section */}
            <div className="flex  flex-row md:flex-row md:items-center justify-around md:justify-between md:gap-4 mb-4 md:mb-6 mt-2">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight flex-1 font-unbounded">
                        About me<span className="text-orange-500">.</span>
                    </h1>
                </div>
                <button className="bg-black text-white px-7 py-3 rounded-2xl text-xs md:text-lg font-semibold shadow-lg hover:bg-gray-900 transition w-fit">Let’s Work Together</button>

            </div>
            <div className="flex flex-col md:flex-row md:items-center items-center md:justify-between gap-4 md:mb-8">
                <div className="flex items-center gap-3 md:mt-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold border border-green-300">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>Open to work
                    </span>
                </div>
                <p className="text-lg md:text-xl font-medium text-gray-300 text-center md:text-left flex-1">Feel free to explore my portfolio and reach out — I'd love to connect!</p>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-4 gap-4 w-full h-auto min-h-150">
                <ExperienceCard />
                <Repocard />
                <ReadingCard />
                <MapCard />
                <HowIWorkCard />
            </div>
        </div>
    );
};

export default AboutGrid;