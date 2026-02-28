import React from "react";

const ExperienceCard = () => (
    <div className="md:col-span-1 md:row-span-2 rounded-2xl flex items-center justify-center min-h-32">
        <div className="card h-full w-full">
            <div className="content h-full">
                <div className="back h-full">
                    <div className="back-content h-full flex items-center justify-center">
                        <div className="dot-border-dot"></div>
                        <span className="text-xs sm:text-sm p-2 font-bold text-white text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eos quae, vel ipsum cupiditate quibusdam cum?
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ExperienceCard;
