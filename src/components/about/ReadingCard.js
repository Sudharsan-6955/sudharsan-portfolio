import React from "react";
import ThreeDCard from "./ThreeDCard";

const ReadingCard = () => (
    <div className="md:col-span-1 z-0 p-0.5 md:row-span-2 rounded-2xl flex-col items-center justify-center min-h-32 bg-gray-7000 border border-gray-700  overflow-hidden">
        <div className="flex flex-row items-center justify-between py-2 gap-5 px-4">
            <button className="rounded-full text-xl font-bold text-white font-body-alt  w-32 py- z-10 ">Milestone</button>
            <div className=" text-sm text-white font-paragraph">
                From confusion to successfully building functionality            </div>
        </div>

        <div className="flex mt-0.5">
            <ThreeDCard />
        </div>
    </div>
);

export default ReadingCard;
