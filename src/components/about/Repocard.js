import React from "react";
import Gitcard from "../ui/gitcard";

const Repocard = () => (
    <div className="md:col-span-1 md:row-span-2 flex flex-col rounded-2xl shadow-xl justify-between min-h-32 bg-gray-900 border border-gray-700 overflow-hidden relative">
        <div className="flex flex-row items-center justify-between py-2 gap-5 px-4">
            <button className="rounded-full text-xl font-bold text-white font-body-alt w-32 z-10">Workflow</button>
            <div className="text-sm text-white font-paragraph">
                Improved performance and fixed critical application bugs
            </div>
        </div>
        <div className="flex justify-center items-center flex-1">
            <Gitcard />
        </div>
    </div>
);

export default Repocard;
